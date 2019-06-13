<?php

namespace OptimistDigital\MenuBuilder;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class MenuBuilder extends Tool
{
    protected static $linkableModels = [
        \OptimistDigital\MenuBuilder\Classes\MenuItemStaticURL::class,
        \OptimistDigital\MenuBuilder\Classes\MenuItemText::class,
    ];

    protected static $locales = [
        'en_US' => 'English'
    ];

    public function __construct(array $data = null)
    {
        if (empty($data)) return;

        if (isset($data['locales']) && is_array($data['locales'])) {
            self::$locales = $data['locales'];
        }

        if (isset($data['linkable_models']) && is_array($data['linkable_models'])) {
            foreach ($data['linkable_models'] as $model) {
                self::$linkableModels[] = $model;
            }
        }
    }

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

    public static function getLocales()
    {
        return self::$locales;
    }

    public static function getModels()
    {
        return self::$linkableModels;
    }
}
