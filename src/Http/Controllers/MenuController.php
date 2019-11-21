<?php

namespace OptimistDigital\MenuBuilder\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Collection;
use OptimistDigital\MenuBuilder\Models\Menu;
use OptimistDigital\MenuBuilder\Models\MenuItem;
use OptimistDigital\MenuBuilder\Http\Requests\NewMenuItemRequest;
use OptimistDigital\MenuBuilder\MenuBuilder;

class MenuController extends Controller
{
    /**
     * Return menu items for given menu
     *
     * @param Request $request
     *
     * @return Collection|json
     */
    public function items(Request $request)
    {
        if (!$request->has('menu')) {
            abort(503);
        }

        return Menu::find($request->get('menu'))
            ->rootMenuItems
            ->filter(function ($item) {
                return class_exists($item->class);
            });
    }

    /**
     * Save menu items when reordering
     *
     * @param   Request  $request
     *
     * @return  json
     */
    public function saveItems(Request $request)
    {
        $menu = Menu::find((int) $request->get('menu'));
        $items = $request->get('items');
        $i = 1;
        foreach ($items as $item) {
            $this->saveMenuItem($i, $item);
            $i++;
        }

        return response()->json([
            'success' => true,
        ]);
    }

    /**
     * Creates a new MenuItem from request.
     *
     * @param NewMenuItemRequest $request
     * @return JSON
     **/
    public function createNew(NewMenuItemRequest $request)
    {
        $data = $request->all();
        $data['order'] = MenuItem::max('id') + 1;
        MenuItem::create($data);

        return response()->json([
            'success' => true,
        ]);
    }

    /**
     * Returns the menu item to edit in JSON.
     *
     * @param MenuItem $item
     * @return JSON
     **/
    public function edit(MenuItem $item)
    {
        return $item->toJson();
    }

    /**
     * Update the given menu item
     *
     * @param \OptimistDigital\MenuBuilder\Models\MenuItem $item
     * @param NewMenuItemRequest $request
     *
     * @return  json
     */
    public function update(MenuItem $item, NewMenuItemRequest $request)
    {
        $item->update($request->all());

        return response()->json([
            'success' => true,
        ]);
    }

    /**
     * Deletes the MenuItem and its children MenuItems.
     *
     * @param MenuItem $item
     * @return JSON
     **/
    public function destroy(MenuItem $item)
    {
        $item->children()->delete();
        $item->delete();

        return response()->json([
            'success' => true,
        ]);
    }

    /**
     * Save the menu item
     *
     * @param int $order
     * @param array $item
     * @param int $parentId
     *
     */
    private function saveMenuItem($order, $item, $parentId = null)
    {
        $menuItem = MenuItem::find($item['id']);
        $menuItem->order = $order;
        $menuItem->parent_id = $parentId;
        $menuItem->save();

        $this->checkChildren($item);
    }

    /**
     * Recurisve save menu items childrens
     *
     * @param array $item
     *
     */
    private function checkChildren($item)
    {
        if (count($item['children']) > 0) {
            $i = 1;
            foreach ($item['children'] as $child) {
                $this->saveMenuItem($i, $child, $item['id']);
                $i++;
            }
        }
    }

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
     * @param MenuItem $item
     * @return string
     */
    public function duplicate(MenuItem $item)
    {
        $this->recursivelyDuplicate($item, $item->parent_id);
        return response()->json([
            'success' => true,
        ]);
    }

    protected function recursivelyDuplicate(MenuItem $item, $parentId = null) {
        $data = $item->toArray();
        $data['order'] = MenuItem::max('id') + 1;
        unset($data['id']);
        if ($parentId != null) $data['parent_id'] = $parentId;
        $newItem = MenuItem::create($data);
        /** @var Collection $children */
        $children = $newItem->children()->get();
        foreach ($children as $child) $this->recursivelyDuplicate($child, $newItem->id);
    }
}
