<?php

namespace Workup\MenuBuilder;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Illuminate\Support\Str;
use Workup\Core\Services\Nova\Helper;

class MenuBuilder extends Tool
{

    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    {
        Nova::script('nova-menu-builder', __DIR__ . '/../dist/js/menu-builder.js');
        Nova::style('nova-menu-builder', __DIR__ . '/../dist/css/menu-builder.css');

        Nova::provideToScript([
            'menuBuilder' => $this->config(),
        ]);
    }

    /**
     * Build the view that renders the navigation links for the tool.
     *
     * @return \Illuminate\View\View
     */
    public function renderNavigation()
    {
        return view('nova-menu-builder::menu-navigation');
    }

    /** @noinspection PhpUnhandledExceptionInspection */
    public static function getLocales(): array
    {
        $localesConfig = config('rubinred.locales');

        if (is_callable($localesConfig)) {
            return call_user_func($localesConfig);
        }

        if (is_array($localesConfig)) {
            return $localesConfig;
        }

        if (Str::contains($localesConfig, '@')) {
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
                    $sanitizedPanel = Helper::sanitizePanelName($field->panel);
                    $field->attribute = 'data->' . $sanitizedPanel . '->' . $field->attribute;
                }
            }

            return $field;
        };

        if (method_exists($menuItemTypeClass, 'getFields')) {
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

    public static function getRulesFromMenuLinkable(?string $menuLinkableClass)
    {
        $menusTableName = static::getMenusTableName();

        $menuItemRules = $menuLinkableClass ? $menuLinkableClass::getRules() : [];
        $dataRules = [];
        foreach ($menuItemRules as $key => $rule) {
            if ($key !== 'value' && !Str::startsWith($key, 'data->')) $key = "data->{$key}";
            $dataRules[$key] = $rule;
        }

        return array_merge([
            'menu_id' => "required|exists:$menusTableName,id",
            'label' => 'required|min:1',
            'locale' => 'required',
            'class' => 'required',
            'target' => 'required|in:_self,_blank'
        ], $dataRules);
    }



    // In-package helpers
    public static function getResourceClass()
    {
        return config('nova-menu-builder.resource', \Workup\Menus\Nova\Menu::class);
    }

    public static function getMenusTableName()
    {
        return config('nova-menu-builder.table_name', 'menus');
    }

    public static function getMenuItemsTableName()
    {
        return config('nova-menu-builder.items_table_name', 'menu_items');
    }

    public static function getMenuClass()
    {
        return config('nova-menu-builder.model', \Workup\Menus\Models\Menu::class);
    }

    public static function getMenuItemClass()
    {
        return config('nova-menu-builder.item_model', \Workup\Menus\Models\MenuItem::class);
    }

    public static function getMenuItemTypes()
    {
        return config('nova-menu-builder.item_types', []);
    }

    public static function getEntityModel()
    {
        return config('nova-menu-builder.item_entity_model', \Workup\Larastub\Models\Entity::class);
    }

    public static function getRouteModel()
    {
        return config('nova-menu-builder.item_route_model', \Workup\Pages\Models\Page::class);
    }

    protected function config()
    {
        return [
            'menuBuilderUriKey' => static::getResourceClass()::uriKey(),
            'permissions' => request()->user()
                ->getAllPermissions()
                ->filter(fn ($permission) => str_contains($permission, '.menus'))
                ->pluck('name'),
        ];
    }
}
