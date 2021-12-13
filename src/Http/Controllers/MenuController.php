<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Http\Traits\MenuHelpers;

class MenuController extends Controller
{
    use MenuHelpers;

    /**
     * Return root menu items for one menu.
     *
     * @param Illuminate\Http\Request $request
     * @param $menuId
     * @return Illuminate\Http\Response
     **/
    public function index(Request $request, $menuId)
    {
        $locale = $request->get('locale');
        $menu = MenuBuilder::getMenuClass()::find($menuId);
        if (empty($menu)) return response()->json(['menu' => 'menu_not_found'], 400);
        if (empty($locale)) return response()->json(['menu' => 'locale_required_but_missing'], 400);

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
     *
     * @param Illuminate\Http\Request $request
     * @param $menuId
     * @return Illuminate\Http\Response
     **/
    public function store(Request $request, $menuId)
    {
        $items = $request->get('menuItems');

        $i = 1;
        foreach ($items as $item) {
            $this->saveMenuItemWithNewOrder($i, $item);
            $i++;
        }

        return response()->json(['success' => true], 200);
    }
}
