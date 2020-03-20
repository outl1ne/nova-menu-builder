<?php

namespace OptimistDigital\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use OptimistDigital\MenuBuilder\Models\Menu;
use OptimistDigital\MenuBuilder\Models\MenuItem;
use OptimistDigital\MenuBuilder\Http\Requests\NewMenuItemRequest;
use OptimistDigital\MenuBuilder\MenuBuilder;

class MenuController extends Controller
{
    /**
     * Return root menu items for one menu.
     *
     * @param Illuminate\Http\Request $request
     * @param OptimistDigital\MenuBuilder\Models\Menu $menu
     * @return Illuminate\Http\Response
     **/
    public function getMenuItems(Request $request, Menu $menu)
    {
        if (empty($menu)) return response()->json(['menu' => 'menu_not_found'], 400);

        $menuItems = $menu->rootMenuItems->filter(function ($item) {
            return class_exists($item->class);
        });

        return response()->json($menuItems, 200);
    }

    /**
     * Save menu items.
     *
     * @param Illuminate\Http\Request $request
     * @param OptimistDigital\MenuBuilder\Models\Menu $menu
     * @return Illuminate\Http\Response
     **/
    public function saveMenuItems(Request $request, Menu $menu)
    {
        $items = $request->get('menuItems');

        $i = 1;
        foreach ($items as $item) {
            $this->saveMenuItemWithNewOrder($i, $item);
            $i++;
        }

        return response()->json(['success' => true], 200);
    }

    /**
     * Creates new MenuItem.
     *
     * @param OptimistDigital\MenuBuilder\Http\Requests\NewMenuItemRequest $request
     * @return Illuminate\Http\Response
     **/
    public function createMenuItem(NewMenuItemRequest $request)
    {
        $request->validate([
            'class' => 'required',
            'value' => 'present',
            'enabled' => 'present',
            'name' => 'required|min:1',
        ]);

        $data = $request->all();
        $data['order'] = MenuItem::max('id') + 1;

        // Add fail-safe due to https://github.com/optimistdigital/nova-menu-builder/issues/41
        $data['parameters'] = empty($data['parameters']) ? null : $data['parameters'];

        MenuItem::create($data);
        return response()->json(['success' => true], 200);
    }

    /**
     * Returns the menu item as JSON.
     *
     * @param OptimistDigital\MenuBuilder\Models\MenuItem $menuItem
     * @return Illuminate\Http\Response
     **/
    public function getMenuItem(MenuItem $menuItem)
    {
        return isset($menuItem)
            ? response()->json($menuItem, 200)
            : resonse()->json(['error' => 'item_not_found'], 400);
    }

    /**
     * Updates a MenuItem.
     *
     * @param OptimistDigital\MenuBuilder\Http\Requests\NewMenuItemRequest $request
     * @param OptimistDigital\MenuBuilder\Models\MenuItem $menuItem
     * @return Illuminate\Http\Response
     **/
    public function updateMenuItem(NewMenuItemRequest $request, MenuItem $menuItem)
    {
        if (!isset($menuItem)) return response()->json(['error' => 'menu_item_not_found'], 400);
        $data = $request->all();

        // Add fail-safe due to https://github.com/optimistdigital/nova-menu-builder/issues/47
        $data['parameters'] = empty($data['parameters']) ? null : $data['parameters'];

        $menuItem->update($data);
        return response()->json(['success' => true], 200);
    }

    /**
     * Deletes a MenuItem.
     *
     * @param OptimistDigital\MenuBuilder\Models\MenuItem $menuItem
     * @return Illuminate\Http\Response
     **/
    public function deleteMenuItem(MenuItem $menuItem)
    {
        $menuItem->children()->delete();
        $menuItem->delete();
        return response()->json(['success' => true], 200);
    }

    /**
     * Get link types for locale.
     *
     * @param string $locale
     * @return Illuminate\Http\Response
     **/
    public function getLinkTypes($locale)
    {
        $linkTypes = [];
        $models = MenuBuilder::getModels();

        foreach ($models as $linkClass) {
            if (!class_exists($linkClass)) continue;

            $data = [
                'name' => $linkClass::getName(),
                'type' => $linkClass::getType(),
                'class' => $linkClass,
            ];

            if (method_exists($linkClass, 'getOptions')) {
                $data['options'] = $linkClass::getOptions($locale);
            }

            $linkTypes[] = $data;
        }

        return response()->json($linkTypes, 200);
    }

    /**
     * Duplicates a MenuItem.
     *
     * @param OptimistDigital\MenuBuilder\Models\MenuItem $menuItem
     * @return Illuminate\Http\Response
     **/
    public function duplicateMenuItem(MenuItem $menuItem)
    {
        if (empty($menuItem)) return response()->json(['error' => 'menu_item_not_found'], 400);

        $this->shiftMenuItemsWithHigherOrder($menuItem);
        $this->recursivelyDuplicate($menuItem, $menuItem->parent_id, $menuItem->order + 1);

        return response()->json(['success' => true], 200);
    }


    // ------------------------------
    // Helpers
    // ------------------------------

    /**
     * Increase order number of every menu item that has higher order number than ours by one
     *
     * @param MenuItem $menuItem
     */
    private function shiftMenuItemsWithHigherOrder(MenuItem $menuItem)
    {
        $tableName = $menuItem->getTable();
        $menuItemParentSql = $menuItem->parent_id ? "menuItem.parent_id = $menuItem->parent_id" : 'menuItem.parent_id IS NULL';

        DB::statement(
            <<<SQL
                UPDATE $tableName AS menuItem
                SET menuItem.order = menuItem.order + 1
                WHERE menuItem.order > {$menuItem->order}
                AND menuItem.menu_id = {$menuItem->menu_id}
                AND {$menuItemParentSql}
SQL
        );
    }

    private function recursivelyOrderChildren($item)
    {
        if (count($item['children']) > 0) {
            foreach ($item['children'] as $i => $child) {
                $this->saveMenuItemWithNewOrder($i + 1, $child, $item['id']);
            }
        }
    }

    private function saveMenuItemWithNewOrder($orderNr, $item, $parentId = null)
    {
        $menuItem = MenuItem::find($item['id']);
        $menuItem->order = $orderNr;
        $menuItem->parent_id = $parentId;
        $menuItem->save();

        // Check children
        if (count($item['children']) > 0) {
            foreach ($item['children'] as $i => $child) {
                $this->saveMenuItemWithNewOrder($i + 1, $child, $item['id']);
            }
        }

        $this->recursivelyOrderChildren($item);
    }

    protected function recursivelyDuplicate(MenuItem $item, $parentId = null, $order = null)
    {
        $data = $item->toArray();
        unset($data['id']);
        if ($parentId != null) $data['parent_id'] = $parentId;
        if ($order != null) $data['order'] = $order;
        $newItem = MenuItem::create($data);
        $children = $item->children;
        foreach ($children as $child) $this->recursivelyDuplicate($child, $newItem->id);
    }
}
