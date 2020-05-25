<?php

use OptimistDigital\MenuBuilder\MenuBuilder;
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
    function nova_get_menu($slug, $locale = null)
    {
        if (empty($slug)) return null;
        if (empty($locale)) $locale = array_keys(MenuBuilder::getLocales())[0] ?? null;
        $menu = Menu::where('slug', $slug)->where('locale', $locale)->get()->first();
        return !empty($menu) ? $menu->formatForAPI() : null;
    }
}
