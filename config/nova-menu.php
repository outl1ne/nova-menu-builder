<?php

return [
    /*
    |------------------|
    | Required options |
    |------------------|
    */


    /*
    |--------------------------------------------------------------------------
    | Table names
    |--------------------------------------------------------------------------
    */

    'menus_table_name' => 'nova_menu_menus',
    'menu_items_table_name' => 'nova_menu_menu_items',


    /*
    |--------------------------------------------------------------------------
    | Locales
    |--------------------------------------------------------------------------
    |
    | Set all the available locales as either [key => name] pairs, a closure
    | or a callable (ie 'locales' => 'nova_get_locales' or
    | 'locales' => '\App\Nova\MenuBuilder\Configuration@getLocales')
    |
    */

    'locales' => ['en_US' => 'English'],


    /*
    |--------------------------------------------------------------------------
    | Menus
    |--------------------------------------------------------------------------
    |
    | Set all the possible menus in a keyed array of arrays, a closure
    | or a callable (ie 'menus' => 'nova_get_menus' or
    | 'menus' => '\App\Nova\MenuBuilder\Configuration@getMenuTypes') with the
    | option 'name' and optionally 'menu_item_types' and unique.
    /  Unique is true by default
    |
    | For example: ['header' => ['name' => 'Header', 'unique' => true, 'menu_item_types' => []]]

    |
    */

    'menus' => [
        // 'header' => [
        //     'name' => 'Header',
        //     'unique' => true,
        //     'max_depth' => 10,
        //     'menu_item_types' => []
        // ]
    ],

    /*
    |--------------------------------------------------------------------------
    | Menu item types
    |--------------------------------------------------------------------------
    |
    | Set all the available menu item types as an array.
    |
    */

    'menu_item_types' => [
        \Workup\MenuBuilder\MenuItemTypes\MenuItemTextType::class,
        \Workup\MenuBuilder\MenuItemTypes\MenuItemStaticURLType::class,
        \Workup\MenuBuilder\MenuItemTypes\MenuItemRouteType::class,
        \Workup\MenuBuilder\MenuItemTypes\MenuItemEntityType::class,
    ],

    /*
    |--------------------------------|
    | Optional configuration options |
    |--------------------------------|
    */


    /*
    |--------------------------------------------------------------------------
    | Resource
    |--------------------------------------------------------------------------
    |
    | Optionally override the original Menu resource.
    |
    */

    'resource' => Workup\MenuBuilder\Nova\Resources\MenuResource::class,


    /*
    |--------------------------------------------------------------------------
    | Menu Model
    |--------------------------------------------------------------------------
    |
    | Optionally override the original Menu model.
    |
    */

    'menu_model' => Workup\MenuBuilder\Models\Menu::class,


    /*
    |--------------------------------------------------------------------------
    | MenuItem Model
    |--------------------------------------------------------------------------
    |
    | Optionally override the original Menu Item model.
    |
    */

    'menu_item_model' => Workup\MenuBuilder\Models\MenuItem::class,


    /*
    |--------------------------------------------------------------------------
    | Auto-load migrations
    |--------------------------------------------------------------------------
    |
    | Allow auto-loading of migrations (without the need to publish them)
    |
    */

    'auto_load_migrations' => true,


];
