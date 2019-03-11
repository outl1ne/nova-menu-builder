<?php

use OptimistDigital\MenuBuilder\Models\Menu;

if (!function_exists('menu_json')) {

    /**
     * Return menu items in json format
     *
     * @param   string  $slug
     *
     * @return  json
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
