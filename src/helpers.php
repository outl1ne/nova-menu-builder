<?php

use OptimistDigital\MenuBuilder\MenuBuilder;

if (!function_exists('nova_get_menus')) {
    function nova_get_menus($locale = null)
    {
        if ($locale !== null) {
            return MenuBuilder::getMenuClass()::all()->map(function ($menu) use ($locale) {
                return $menu->formatForAPI($locale);
            });
        }

        $locales = array_keys(MenuBuilder::getLocales());

        return MenuBuilder::getMenuClass()::all()->map(function ($menu) use ($locales) {
            return array_map(function ($locale) use ($menu) {
                return $menu->formatForAPI($locale);
            }, $locales);
        })->flatten(1)->toArray();
    }
}

if (!function_exists('nova_get_menu_by_slug')) {
    function nova_get_menu_by_slug($slug, $locale = null)
    {
        if (empty($slug)) return null;
        if (empty($locale)) $locale = array_keys(MenuBuilder::getLocales())[0] ?? null;
        $menu = MenuBuilder::getMenuClass()::where('slug', $slug)->first();
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
