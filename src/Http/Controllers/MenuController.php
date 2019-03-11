<?php

namespace Infinety\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Infinety\MenuBuilder\Models\Menu;
use Infinety\MenuBuilder\Models\MenuItem;
use Infinety\MenuBuilder\Http\Requests\NewMenuItemRequest;

class MenuController extends Controller
{
    protected static $linkableModels = [
        \Infinety\MenuBuilder\Classes\MenuItemStaticURL::class
    ];

    public static function linkableModels(array $models)
    {
        static::$linkableModels = [\Infinety\MenuBuilder\Classes\MenuItemStaticURL::class];
        foreach ($models as $model) {
            static::$linkableModels[] = $model;
        }
    }

    /**
     * Return menu items for given menu
     *
     * @param   Request  $Request
     *
     * @return  Collection | json
     */
    public function items(Request $request)
    {
        if (!$request->has('menu')) {
            abort(503);
        }

        return Menu::find($request->get('menu'))->optionsMenu();
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
        $menu = Menu::find((int)$request->get('menu'));
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
     * Create new menu item
     *
     * @param   NewMenuItemRequest  $request
     *
     * @return  json
     */
    public function createNew(NewMenuItemRequest $request)
    {
        $data = $request->all();
        $data['order'] = MenuItem::max('id') + 1;
        $menuItem = MenuItem::create($data);

        return response()->json([
            'success' => true,
        ]);
    }

    /**
     * Get menu item to edit
     *
     * @param   \Infinety\MenuBuilder\Models\MenuItem  $item
     *
     * @return  json
     */
    public function edit(MenuItem $item)
    {
        return $item->toJson();
    }

    /**
     * Update the given menu item
     *
     * @param   \Infinety\MenuBuilder\Models\MenuItem  $item
     * @param   NewMenuItemRequest  $request
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
     * Destroy current menu item and all his childrens
     *
     * @param   \Infinety\MenuBuilder\Models\MenuItem  $item
     *
     * @return  json
     */
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
     * @param   int  $order
     * @param   array  $item
     * @param   int  $parentId
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
     * @param   array  $item
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

    public function getLinkTypes()
    {
        $linkTypes = [];
        foreach (self::$linkableModels as $linkClassString) {
            $linkModel = new $linkClassString;
            $linkTypes[] = [
                'name' => $linkModel->menuLinkName(),
                'type' => $linkModel->menuLinkType(),
                'class' => $linkClassString,
                'options' => $linkModel->menuLinkOptions()
            ];
        }
        return response()->json($linkTypes, 200);
    }
} 
 

