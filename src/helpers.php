<?php

use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\MenuBuilder\Models\Menu;

if (!function_exists('nova_get_menus')) {
    function nova_get_menus($locale = null)
    {
        return Menu::all()
            ->load('rootMenuItems')
            ->map(function ($menu) use ($locale) {
                return $menu->formatForAPI($locale);
            });
    }
}

if (!function_exists('nova_get_menu_by_slug')) {
    function nova_get_menu_by_slug($slug, $locale = null)
    {
        if (empty($slug)) return null;
        if (empty($locale)) $locale = array_keys(MenuBuilder::getLocales())[0] ?? null;
        $menu = Menu::where('slug', $slug)->get()->first();
        return !empty($menu) ? $menu->formatForAPI($locale) : null;
    }
}

// ------------------------------
// nova_menu_builder_sanitize_panel_name
// ------------------------------

if (!function_exists('nova_menu_builder_sanitize_panel_name')) {
    function nova_menu_builder_sanitize_panel_name($name)
    {
        $removedSpecialChars = preg_replace("/[^A-Za-z0-9 ]/", '', $name);
        $snakeCase = preg_replace("/\s+/", '_', $removedSpecialChars);
        return strtolower($snakeCase);
    }
}
