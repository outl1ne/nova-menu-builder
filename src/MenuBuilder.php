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

    public static function getFieldsFromMenuLinkable(string $menuLinkableClass): array
    {
        $templateFields = [];

        $handleField = function (&$field) {
            if (!empty($field->attribute) && ($field->attribute !== 'ComputedField')) {
                if (empty($field->panel)) {
                    $field->attribute = 'data->' . $field->attribute;
                } else {
                    $sanitizedPanel = nova_menu_builder_sanitize_panel_name($field->panel);
                    $field->attribute = 'data->' . $sanitizedPanel . '->' . $field->attribute;
                }
            }

            return $field;
        };

        if (isset($menuLinkableClass)) {
            $rawFields = $menuLinkableClass::getFields();
            foreach ($rawFields as $field) {
                // Handle Panel
                if ($field instanceof \Laravel\Nova\Panel) {
                    array_map(
                        fn ($_field) => ($templateFields[] = $handleField($_field)),
                        $field->data
                    );
                    continue;
                }

                // Handle Field
                $templateFields[] = $handleField($field);
            }
        }

        return $templateFields;
    }

    public static function getRulesFromMenuLinkable(string $menuLinkableClass)
    {
        $menusTableName = MenuBuilder::getMenusTableName();

        return array_merge([
            'menu_id' => "required|exists:$menusTableName,id",
            'name' => 'required',
            'class' => 'required',
            'target' => 'required|in:_self,_blank',
        ], $menuLinkableClass::getRules());
    }
}
