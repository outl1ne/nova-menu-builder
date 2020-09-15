<?php

namespace OptimistDigital\MenuBuilder\Nova\Resources;

use Laravel\Nova\Panel;
use Laravel\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\MenuBuilder\Models\Menu;
use OptimistDigital\MenuBuilder\Nova\Fields\MenuBuilderField;

class MenuResource extends Resource
{
    public static $model = Menu::class;
    public static $search = ['name', 'slug'];
    public static $displayInNavigation = false;

    public static function label()
    {
        return 'Menus';
    }

    public static function singularLabel()
    {
        return 'Menu';
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

        return [
            Text::make(__('Name'), 'name')
                ->sortable()
                ->rules('required', 'max:255'),

            Text::make(__('Slug'), 'slug')
                ->sortable()
                ->creationRules('required', 'max:255', "unique:$menusTableName,slug,NULL,id")
                ->updateRules('required', 'max:255', "unique:$menusTableName,slug,{{resourceId}},id"),

            Panel::make('Menu items', [
                MenuBuilderField::make('Menu items', 'menu_items')
                    ->hideWhenCreating()
                    ->readonly(),
            ]),
        ];
    }
}
