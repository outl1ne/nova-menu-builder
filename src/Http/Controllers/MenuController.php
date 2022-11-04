<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Http\Traits\MenuHelpers;

class MenuController extends Controller
{
    use MenuHelpers;

    /**
     * Return root menu items for one menu.
     **/
    public function index(Request $request, int $menuId): JsonResponse
    {
        $menu = MenuBuilder::getMenuClass()::find($menuId);
        if (empty($menu)) {
            return response()->json(['menu' => 'menu_not_found'], 400);
        }

        $locale = $request->get('locale');
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
}
