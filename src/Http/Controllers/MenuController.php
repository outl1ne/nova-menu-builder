<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Workup\MenuBuilder\Settings;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\Http\Requests\MenuItemFormRequest;

class MenuController extends Controller
{
    /**
     * Return root menu items for one menu.
     **/
    public function index(Request $request)
    {
        $menuModel = Settings::getMenuClass();
        $query = $menuModel::query();

        if ($request->boolean('notEmpty')) {
            $query->whereHas('rootMenuItems');
        }

        return $query->get()->map(function ($menu) {
            return [
                'id' => $menu->id,
                'title' => "{$menu->name} ({$menu->slug})",
                'name' => $menu->name,
                'slug' => $menu->slug,
            ];
        });
    }

    public function show(Request $request, int $menuId): JsonResponse
    {
        $locale = $request->get('locale');
        $menu = Settings::getMenuClass()::find($menuId);

        if (empty($menu)) {
            return response()->json(['menu' => 'menu_not_found'], 400);
        }

        if (empty($locale)) {
            return response()->json(['menu' => 'locale_required_but_missing'], 400);
        }

        $menuItems = $menu
            ->rootMenuItems()
            ->where('locale', $locale)
            ->get()
            ->filter(function ($item) {
                return class_exists($item->class);
            });

        return response()->json($menuItems, 200);
    }

    /**
     * Save menu items.
     **/
    public function store(Request $request): JsonResponse
    {
        $items = $request->get('menuItems');

        $i = 1;
        foreach ($items as $item) {
            $this->saveMenuItemWithNewOrder($i, $item);
            $i++;
        }

        return response()->json(['success' => true], 200);
    }

    public function getMenus(Request $request)
    {
        $menuModel = Settings::getMenuClass();
        $query = $menuModel::query();

        if ($request->boolean('notEmpty')) {
            $query->whereHas('rootMenuItems');
        }

        return $query->get()->map(function ($menu) {
            return [
                'id' => $menu->id,
                'title' => "{$menu->name} ({$menu->slug})",
                'name' => $menu->name,
                'slug' => $menu->slug,
            ];
        });
    }

    public function copyMenuItemsToMenu(Request $request): JsonResponse
    {
        $menuModel = Settings::getMenuClass();

        $data = $request->validate([
            'fromMenuId' => 'required',
            'toMenuId' => 'required',
            'fromLocale' => 'required',
            'toLocale' => 'required',
        ]);

        $fromMenuId = $data['fromMenuId'];
        $toMenuId = $data['toMenuId'];
        $fromLocale = $data['fromLocale'];
        $toLocale = $data['toLocale'];

        $fromMenu = $menuModel::find($fromMenuId);
        $toMenu = $menuModel::find($toMenuId);

        if (! $fromMenu || ! $toMenu) {
            return response()->json(['error' => 'menu_not_found'], 404);
        }

        $maxOrder = $fromMenu->rootMenuItems()->max('order');
        $i = 1;

        $recursivelyCloneMenuItems = function ($menuItems, $parentId = null) use (
            $toLocale,
            $toMenuId,
            $maxOrder,
            &$i,
            &$recursivelyCloneMenuItems
        ) {
            foreach ($menuItems as $menuItem) {
                $newMenuItem = $menuItem->replicate();
                $newMenuItem->locale = $toLocale;
                $newMenuItem->menu_id = $toMenuId;
                $newMenuItem->parent_id = $parentId;
                $newMenuItem->order = $maxOrder + $i++;
                $newMenuItem->save();

                if ($menuItem->children->count() > 0) {
                    $recursivelyCloneMenuItems($menuItem->children, $newMenuItem->id);
                }
            }
        };

        // Clone all and add to toMenu
        $rootMenuItems = $fromMenu->rootMenuItems()->where('locale', $fromLocale)->get();
        $recursivelyCloneMenuItems($rootMenuItems);

        return response()->json(['success' => true], 200);
    }

    /**
     * Creates new MenuItem.
     **/
    public function createMenuItem(MenuItemFormRequest $request): JsonResponse
    {
        $menuItemModel = Settings::getMenuItemClass();

        $data = $request->getValues();
        $data['order'] = $menuItemModel::max('id') + 1;

        $model = new $menuItemModel();
        foreach ($data as $key => $value) {
            $model->{$key} = $value;
        }
        $model->save();

        return response()->json(['success' => true], 200);
    }

    /**
     * Returns the menu item as JSON.
     **/
    public function getMenuItem($menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::find($menuItemId);

        return isset($menuItem)
            ? response()->json($menuItem, 200)
            : response()->json(['error' => 'item_not_found'], 400);
    }

    /**
     * Updates a MenuItem.
     **/
    public function updateMenuItem(MenuItemFormRequest $request, $menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::find($menuItemId);

        if (! isset($menuItem)) {
            return response()->json(['error' => 'menu_item_not_found'], 400);
        }
        $data = $request->getValues();

        $menuItem->data = [];
        foreach ($data as $key => $value) {
            $menuItem->{$key} = $value;
        }

        $menuItem->save();
        return response()->json(['success' => true], 200);
    }

    /**
     * Deletes a MenuItem.
     **/
    public function deleteMenuItem($menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::findOrFail($menuItemId);
        $menuItem->children()->delete();
        $menuItem->delete();
        return response()->json(['success' => true], 200);
    }

    /**
     * Get link types for locale.
     **/
    public function getMenuItemTypes(Request $request, $menuId): JsonResponse
    {
        $menu = Settings::getMenuClass()::find($menuId);
        if ($menu === null) {
            return response()->json(['error' => 'menu_not_found'], 404);
        }
        $locale = $request->get('locale');
        if ($locale === null) {
            return response()->json(['error' => 'locale_required'], 400);
        }

        $menuItemTypes = [];
        $menuItemTypesRaw = Settings::getMenuItemTypes();

        $formatAndAppendMenuItemType = function ($typeClass) use (&$menuItemTypes, $locale) {
            if (! class_exists($typeClass)) {
                return;
            }

            $data = [
                'name' => $typeClass::getName(),
                'type' => $typeClass::getType(),
                'fields' => Settings::getFieldsFromMenuItemTypeClass($typeClass) ?? [],
                'class' => $typeClass,
            ];

            if (method_exists($typeClass, 'getOptions')) {
                $options = $typeClass::getOptions($locale) ?? [];
                $data['options'] = array_map(function ($value, $key) {
                    return ['id' => (string) $key, 'label' => $value];
                }, array_values($options), array_keys($options));
            }

            $menuItemTypes[] = $data;
        };

        foreach ($menuItemTypesRaw as $typeClass) {
            $formatAndAppendMenuItemType($typeClass);
        }

        $menu = Settings::getMenus()[$menu->slug] ?? null;
        if ($menu !== null) {
            $menuTypeClasses = $menu['item_types'] ?? [];
            foreach ($menuTypeClasses as $menuTypeClass) {
                $formatAndAppendMenuItemType($menuTypeClass);
            }
        }

        return response()->json($menuItemTypes, 200);
    }

    /**
     * Duplicates a MenuItem.
     **/
    public function duplicateMenuItem($menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::find($menuItemId);

        if (empty($menuItem)) {
            return response()->json(['error' => 'menu_item_not_found'], 400);
        }

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
     * @param $menuItem
     */
    private function shiftMenuItemsWithHigherOrder($menuItem): void
    {
        $menuItems = Settings::getMenuItemClass()::where('order', '>', $menuItem->order)
            ->where('menu_id', $menuItem->menu_id)
            ->where('parent_id', $menuItem->parent_id)
            ->get();

        // Do individual updates to trigger observer(s)
        foreach ($menuItems as $menuItem) {
            $menuItem->order = $menuItem->order + 1;
            $menuItem->save();
        }
    }

    private function recursivelyOrderChildren($menuItem): void
    {
        if (count($menuItem['children']) > 0) {
            foreach ($menuItem['children'] as $i => $child) {
                $this->saveMenuItemWithNewOrder($i + 1, $child, $menuItem['id']);
            }
        }
    }

    private function saveMenuItemWithNewOrder($orderNr, $menuItemData, $parentId = null): void
    {
        $menuItem = Settings::getMenuItemClass()::find($menuItemData['id']);
        $menuItem->order = $orderNr;
        $menuItem->parent_id = $parentId;
        $menuItem->save();
        $this->recursivelyOrderChildren($menuItemData);
    }

    protected function recursivelyDuplicate($menuItem, $parentId = null, $order = null): void
    {
        $data = $menuItem->toArray();
        unset($data['id']);

        if ($parentId !== null) {
            $data['parent_id'] = $parentId;
        }

        if ($order !== null) {
            $data['order'] = $order;
        }

        $data['locale'] = $menuItem->locale;

        // Save the long way instead of ::create() to trigger observer(s)
        $menuItemClass = Settings::getMenuItemClass();
        $newMenuItem = new $menuItemClass();
        $newMenuItem->fill($data);
        $newMenuItem->save();

        $children = $menuItem->children;
        foreach ($children as $child) {
            $this->recursivelyDuplicate($child, $newMenuItem->id);
        }
    }
}
