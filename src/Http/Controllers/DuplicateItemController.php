<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Workup\MenuBuilder\Settings;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\Http\Traits\MenuHelpers;

class DuplicateItemController extends Controller
{
    use MenuHelpers;

    /**
     * Duplicates a MenuItem.
     **/
    public function __invoke($menuItemId): JsonResponse
    {
        $menuItem = Settings::getMenuItemClass()::find($menuItemId);

        if (empty($menuItem)) {
            return response()->json(['error' => 'menu_item_not_found'], 400);
        }

        $this->shiftMenuItemsWithHigherOrder($menuItem);

        $this->recursivelyDuplicate($menuItem, $menuItem->parent_id, $menuItem->order + 1);

        return response()->json(['success' => true], 200);
    }
}
