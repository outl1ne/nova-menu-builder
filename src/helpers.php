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
    function nova_get_menu($slug, $locale)
    {
        if (empty($slug) || empty($locale)) return null;
        $menu = Menu::where('slug', $slug)->where('locale', $locale)->get()->first();
        return !empty($menu) ? $menu->formatForAPI() : null;
    }
}
