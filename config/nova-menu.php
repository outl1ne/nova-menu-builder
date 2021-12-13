<?php

return [
    /**
     * Table names
     */
    'menus_table_name' => 'nova_menu_menus',
    'menu_items_table_name' => 'nova_menu_menu_items',

    /**
     * Locales
     * Set all the available locales as either [key => name] pairs, a closure
     * or a callable (ie 'locales' => 'nova_get_locales' or
     * 'locales' => '\App\Nova\MenuBuilder\Configuration@getLocales')
     */
    'locales' => ['en_US' => 'English'],

    /**
     * Menu item types
     * Set all the available menu item types as an array.
     */
    'menu_item_types' => [
        \Workup\MenuBuilder\MenuItemTypes\MenuItemTextType::class,
        \Workup\MenuBuilder\MenuItemTypes\MenuItemStaticURLType::class,
        \Workup\MenuBuilder\MenuItemTypes\MenuItemRouteType::class,
        \Workup\MenuBuilder\MenuItemTypes\MenuItemEntityType::class,
    ],

    /**
     * Resource
     * Optionally override the original Menu resource.
     */
    'resource' => Workup\MenuBuilder\Nova\Resources\MenuResource::class,

    /**
     * Menu Model
     * Optionally override the original Menu model.
     */
    'menu_model' => Workup\MenuBuilder\Models\Menu::class,

    /**
     * MenuItem Model
     * Optionally override the original Menu Item model.
     */
    'menu_item_model' => Workup\MenuBuilder\Models\MenuItem::class,

    /**
     * Auto-load migrations
     * Allow auto-loading of migrations (without the need to publish them)
     */
    'auto_load_migrations' => true,

    /**
     * API prefix
     * Allow auto-loading of migrations (without the need to publish them)
     */
    'api_prefix' => 'api',
];
