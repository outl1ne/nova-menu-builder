<?php

namespace Workup\MenuBuilder\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Http\Resources\MenuItemCollection;

class MenuItemController extends Controller
{
    public function show(int $menu, string $slug)
    {
        $items = MenuBuilder::getMenuItemClass()::query()
            ->with('children')
            ->where('menu_id', $menu)
            ->where('slug', $slug)
            ->get();

        return new MenuItemCollection($items);
    }
}
