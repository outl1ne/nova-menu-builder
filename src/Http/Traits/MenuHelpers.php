<?php

namespace Workup\MenuBuilder\Http\Traits;

use Workup\MenuBuilder\Settings;

trait MenuHelpers
{
    /**
     * Increase order number of every menu item that has higher order number than ours by one
     *
     * @param $menuItem
     */
    private function shiftMenuItemsWithHigherOrder($menuItem): void
    {
        $menuItems = Settings::getMenuItemClass()
            ::where('order', '>', $menuItem->order)
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
        $newMenuItem = new $menuItemClass;
        $newMenuItem->fill($data);
        $newMenuItem->save();

        $children = $menuItem->children;
        foreach ($children as $child) {
            $this->recursivelyDuplicate($child, $newMenuItem->id);
        }
    }
}
