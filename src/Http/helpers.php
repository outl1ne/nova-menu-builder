<?php

use Infinety\MenuBuilder\Http\Models\Menu;

if (!function_exists('menu_builder')) {
    /**
     * @param $slug
     */
    function menu_builder($slug, $parentClass = null, $childClass = null, $parentTag = null, $childTag = null)
    {
        $menu = Menu::whereSlug($slug)->first();
        if (!$menu) {
            return '';
        }

        return $menu->render($parentTag, $childTag, $parentClass, $childClass);
    }
}

if (!function_exists('menu_json')) {
    /**
     * @param $slug
     * @return mixed
     */
    function menu_json($slug)
    {
        $menu = Menu::whereSlug($slug)->first();
        if (!$menu) {
            return '';
        }

        return $menu->optionsMenu()->toJson();
    }
}
