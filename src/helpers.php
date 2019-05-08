<?php

use OptimistDigital\MenuBuilder\Models\Menu;

if (!function_exists('nova_get_menus')) {
    function nova_get_menus()
    {
        return Menu::all()
            ->load('rootMenuItems')
            ->map(function ($menu) {
                return $menu->formatForAPI();
            });
    }
}

if (!function_exists('nova_get_menu')) {
    function nova_get_menu($menuSlug)
    {
        if (empty($menuSlug)) return null;

        $menu = Menu::whereSlug($menuSlug)->get()->first();
        if (!isset($menu)) return null;

        return $menu->formatForAPI();
    }
}
