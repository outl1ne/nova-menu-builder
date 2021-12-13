<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Http\Traits\MenuHelpers;

class DuplicateItemController extends Controller
{
    use MenuHelpers;

    /**
     * Duplicates a MenuItem.
     *
     * @param $menuItem
     * @return Illuminate\Http\Response
     **/
    public function __invoke($menuItemId)
    {
        $menuItem = MenuBuilder::getMenuItemClass()::find($menuItemId);

        if (empty($menuItem)) return response()->json(['error' => 'menu_item_not_found'], 400);

        $this->shiftMenuItemsWithHigherOrder($menuItem);
        $this->recursivelyDuplicate($menuItem, $menuItem->parent_id, $menuItem->order + 1);

        return response()->json(['success' => true], 200);
    }
}
