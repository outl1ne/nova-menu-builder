<?php

use OptimistDigital\MenuBuilder\Models\Menu;

if (!function_exists('nova_get_menus')) {
    function nova_get_menus()
    {
        $formatMenuItem = function ($menuItem) use (&$formatMenuItem) {
            return [
                'id' => $menuItem->id,
                'type' => $menuItem->type,
                'value' => $menuItem->customValue,
                'target' => $menuItem->target,
                'parameters' => $menuItem->parameters,
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
                    'locale' => $menu->locale,
                    'menuItems' => collect($menu->rootMenuItems)->map($formatMenuItem),
                ];
            });
    }
}
