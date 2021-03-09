<?php

namespace OptimistDigital\MenuBuilder\Nova\Resources;

use Laravel\Nova\Panel;
use Laravel\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Select;
use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\MenuBuilder\Nova\Fields\MenuBuilderField;

class MenuResource extends Resource
{
    public static $model = \OptimistDigital\MenuBuilder\Models\Menu::class;
    public static $search = ['name', 'slug'];
    public static $displayInNavigation = false;

    public function __construct($resource)
    {
        $this->resource = $resource;
        static::$model = MenuBuilder::getMenuClass();
    }

    public static function label()
    {
        return trans('nova-menu-builder::resources.menu.label');
    }

    public static function singularLabel()
    {
        return trans('nova-menu-builder::resources.menu.singular_label');
    }

    public static function uriKey()
    {
        return 'nova-menus';
    }

    public function title()
    {
        return $this->name . ' (' . $this->slug . ')';
    }

    public function fields(Request $request)
    {
        $menusTableName = MenuBuilder::getMenusTableName();
        $menuOptions = collect(MenuBuilder::getMenus())
            ->mapWithKeys(function ($menu, $key) {
                return [$key => $menu['name']];
            })
            ->toArray();

        return [
            Text::make(trans('nova-menu-builder::resources.menu.fields.name'), 'name')
                ->sortable()
                ->rules('required', 'max:255'),

            Select::make(trans('nova-menu-builder::resources.menu.fields.slug'), 'slug')
                ->options($menuOptions)
                ->onlyOnForms()
                ->creationRules('required', 'max:255', "unique_menu:$menusTableName,slug,NULL,id")
                ->updateRules('required', 'max:255', "unique_menu:$menusTableName,slug,{{resourceId}},id"),

            Text::make(trans('nova-menu-builder::resources.menu.fields.slug'), 'slug', function ($key) {
                $menu = MenuBuilder::getMenus()[$key] ?? null;
                return ($menu === null) ? "<s>{$key}</s>" : $menu['name'];
            })
                ->hideWhenCreating()
                ->hideWhenUpdating()
                ->asHtml(),

            Panel::make(trans('nova-menu-builder::resources.menu.fields.items'), [
                MenuBuilderField::make('', 'menu_items')
                    ->hideWhenCreating()
                    ->readonly(),
            ])
        ];
    }
}
