<?php

return [
    /**
     * Table names
     */
    'table_name' => 'menus',
    'items_table_name' => 'menu_items',

    /**
     * Menu item types
     * Set all the available menu item types as an array.
     */
    'item_types' => [
        \Workup\Menus\MenuItemTypes\TextType::class,
        \Workup\Menus\MenuItemTypes\StaticURLType::class,
        \Workup\Menus\MenuItemTypes\RouteType::class,
        // \Workup\Menus\MenuItemTypes\MenuItemEntityType::class,
    ],

    /**
     * Resource
     * Optionally override the original Menu resource.
     */
    'resource' => Workup\Menus\Nova\Menu::class,

    /**
     * Menu Model
     * Optionally override the original Menu model.
     */
    'model' => Workup\Menus\Models\Menu::class,

    /**
     * MenuItem Model
     * Optionally override the original Menu Item model.
     */
    'item_model' => Workup\Menus\Models\MenuItem::class,
];
