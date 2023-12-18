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

    'table_name' => 'menus',
    'items_table_name' => 'menu_items',

    /*
    |--------------------------------------------------------------------------
    | Menus
    |--------------------------------------------------------------------------
    |
    | Set all the possible menus in a keyed array of arrays with the options
    | 'name' and optionally 'item_types' and unique.
    /  Unique is true by default
    |
    | For example: ['header' => ['name' => 'Header', 'unique' => true, 'item_types' => []]]
    |
    */

    'menus' => [
        // 'header' => [
        //     'name' => 'Header',
        //     'unique' => true,
        //     'max_depth' => 10,
        //     'item_types' => []
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

    'item_types' => [
        \Workup\Menus\MenuItemTypes\TextType::class,
        \Workup\Menus\MenuItemTypes\StaticURLType::class,
        \Workup\Menus\MenuItemTypes\RouteType::class,
        \Workup\Menus\MenuItemTypes\EntityType::class,
    ],

    /*
    |--------------------------------|
    | Optional configuration options |
    |--------------------------------|
    */
    'show_duplicate' => true,

    'collapsed_as_default' => false,

    /*
    |--------------------------------------------------------------------------
    | Resource
    |--------------------------------------------------------------------------
    |
    | Optionally override the original Menu resource.
    |
    */

    'resource' => Workup\Menus\Nova\Menu::class,

    /*
    |--------------------------------------------------------------------------
    | Menu Model
    |--------------------------------------------------------------------------
    |
    | Optionally override the original Menu model.
    |
    */

    'model' => Workup\Menus\Models\Menu::class,

    /*
    |--------------------------------------------------------------------------
    | MenuItem Model
    |--------------------------------------------------------------------------
    |
    | Optionally override the original Menu Item model.
    |
    */

    'item_model' => Workup\Menus\Models\MenuItem::class,

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
