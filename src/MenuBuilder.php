<?php

namespace OptimistDigital\MenuBuilder;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class MenuBuilder extends Tool
{
    protected static $defaultLinkableModels = [
        \OptimistDigital\MenuBuilder\Classes\MenuItemStaticURL::class,
        \OptimistDigital\MenuBuilder\Classes\MenuItemText::class,
    ];

    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('nova-menu', __DIR__ . '/../dist/js/tool.js');
        Nova::style('nova-menu', __DIR__ . '/../dist/css/tool.css');
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function renderNavigation()
    {
        return view('nova-menu::navigation');
    }

    public static function getLocales(): array
    {
        $localesConfig = config('nova-menu.locales', ['en' => 'English']);
        if (is_callable($localesConfig)) return call_user_func($localesConfig);
        if (is_array($localesConfig)) return $localesConfig;
        return ['en' => 'English'];
    }


    public static function getModels()
    {
        $configuredLinkableModels = config('nova-menu.linkable_models', []);
        return array_merge(
            static::$defaultLinkableModels,
            $configuredLinkableModels
        );
    }

    public static function hasNovaLang()
    {
        return class_exists('\OptimistDigital\NovaLang\NovaLang');
    }

    public static function getMenusTableName()
    {
        return config('nova-menu.menus_table_name', 'nova_menu_menus');
    }

    public static function getMenuItemsTableName()
    {
        return config('nova-menu.menu_items_table_name', 'nova_menu_menu_items');
    }
}
