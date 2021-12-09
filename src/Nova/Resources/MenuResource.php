<?php

namespace Workup\MenuBuilder\Nova\Resources;

use Laravel\Nova\Panel;
use Laravel\Nova\Resource;
use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Select;
use Laravel\Nova\Fields\Slug;
use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Nova\Fields\MenuBuilderField;

class MenuResource extends Resource
{
    public static $model = \Workup\MenuBuilder\Models\Menu::class;
    public static $search = ['name', 'slug'];
    public static $displayInNavigation = false;

    public function __construct($resource)
    {
        $this->resource = $resource;
        static::$model = MenuBuilder::getMenuClass();
    }

    public static function label()
    {
        return __('novaMenuBuilder.menuResourceLabel');
    }

    public static function singularLabel()
    {
        return __('novaMenuBuilder.menuResourceSingularLabel');
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
            Text::make(__('novaMenuBuilder.nameFieldName'), 'name')
                ->sortable()
                ->rules('required', 'max:255'),

            Slug::make(__('novaMenuBuilder.slugFieldName'), 'slug')
                ->from('name')
                ->rules('required', 'max:255', "unique_menu:$menusTableName,slug,NULL,id"),

            Panel::make(__('novaMenuBuilder.menuItemsPanelName'), [
                MenuBuilderField::make('', 'menu_items')
                    ->hideWhenCreating()
                    ->maxDepth(10)
                    ->readonly(),
            ])
        ];
    }
}
