<?php

namespace Outl1ne\MenuBuilder;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;
use Outl1ne\MenuBuilder\Traits\Menuable;

class MenuBuilder extends Tool
{
    use Menuable;

    public function boot()
    {
        Nova::script('nova-menu', __DIR__ . '/../dist/js/entry.js');
        Nova::style('nova-menu', __DIR__ . '/../dist/css/entry.css');

        $menuBuilderUriKey = static::getMenuResource()::uriKey();
        Nova::provideToScript([
            'menuBuilderUriKey' => $menuBuilderUriKey,
        ]);
    }

    public function menu(Request $request)
    {
        if ($this->hideMenu) {
            return null;
        }

        // Outl1ne\MenuBuilder\MenuBuilder::getMenuResource()::authorizedToViewAny(request())
        return MenuSection::make($this->title ?: __('novaMenuBuilder.sidebarTitle'))
            ->path('/menus')
            ->icon($this->icon);
    }

    /** @noinspection PhpUnhandledExceptionInspection */
    public static function getLocales(): array
    {
        $localesConfig = config('nova-menu.locales');

        if (is_callable($localesConfig)) {
            return call_user_func($localesConfig);
        } elseif (is_array($localesConfig)) {
            return $localesConfig;
        } elseif (Str::contains($localesConfig, '@')) {
            [$class, $method] = Str::parseCallback($localesConfig);
            return app()->make($class)->{$method}();
        }

        return ['en' => 'English'];
    }

    public static function getFieldsFromMenuItemTypeClass(string $menuItemTypeClass): array
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

        if (isset($menuItemTypeClass) && method_exists($menuItemTypeClass, 'getFields')) {
            $rawFields = $menuItemTypeClass::getFields();
            foreach ($rawFields as $field) {
                // Handle Panel
                if ($field instanceof \Laravel\Nova\Panel) {
                    array_map(
                        function ($_field) use ($handleField, &$templateFields) {
                            $templateFields[] = $handleField($_field);
                        },
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



    // In-package helpers
    public static function getMenuResource()
    {
        return config('nova-menu.resource', \Outl1ne\MenuBuilder\Nova\Resources\MenuResource::class);
    }

    public static function getMenusTableName()
    {
        return config('nova-menu.menus_table_name', 'nova_menu_menus');
    }

    public static function getMenuItemsTableName()
    {
        return config('nova-menu.menu_items_table_name', 'nova_menu_menu_items');
    }

    public static function getMenuClass()
    {
        return config('nova-menu.menu_model', \Outl1ne\MenuBuilder\Models\Menu::class);
    }

    public static function getMenuItemClass()
    {
        return config('nova-menu.menu_item_model', \Outl1ne\MenuBuilder\Models\MenuItem::class);
    }

    public static function getMenuItemTypes()
    {
        return config('nova-menu.menu_item_types', []);
    }

    public static function getMenus()
    {
        return config('nova-menu.menus', []);
    }

    public static function getMenuConfig($slug)
    {
        return config("nova-menu.menus.{$slug}", []);
    }

    public static function showDuplicate()
    {
        return config("nova-menu.show_duplicate", true);
    }

    public static function collapsedAsDefault()
    {
        return config("nova-menu.collapsed_as_default", true);
    }
}
