<?php

use OptimistDigital\MenuBuilder\Models\Menu;

if (!function_exists('nova_get_menus')) {
    function nova_get_menus()
    {
        return Menu::all()->load('rootMenuItems');
    }
}
