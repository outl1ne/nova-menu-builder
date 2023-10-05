<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Workup\MenuBuilder\Settings;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class CopyMenuItemsToMenuController extends Controller
{
    /**
     * Copy menu items from one menu to another
     *
     * @param  Request  $request
     *
     * @return JsonResponse
     */
    public function __invoke(Request $request): JsonResponse
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
}
