<?php

use OptimistDigital\MenuBuilder\Models\Menu;

if (!function_exists('nova_get_menus')) {
    function nova_get_menus()
    {
        $formatMenuItem = function ($menuItem) use (&$formatMenuItem) {
            return [
                'id' => $menuItem->id,
                'menuId' => $menuItem->menu_id,
                'type' => $menuItem->class::getIdentifier(),
                'value' => $menuItem->value,
                'target' => $menuItem->target,
                'parameters' => $menuItem->parameters,
                'parentId' => $menuItem->parent_id,
                'order' => $menuItem->order,
                'enabled' => $menuItem->enabled,
                'children' => empty($menuItem->children) ? [] : $menuItem->children->map($formatMenuItem),
            ];
        };

        return Menu::all()
            ->load('rootMenuItems')
            ->map(function ($menu) use ($formatMenuItem) {
                return [
                    'id' => $menu->id,
                    'name' => $menu->name,
                    'slug' => $menu->slug,
                    'menuItems' => collect($menu->rootMenuItems)->map($formatMenuItem),
                ];
            });
    }
}
