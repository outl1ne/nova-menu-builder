<?php

namespace OptimistDigital\MenuBuilder\Http\Resources;

use Illuminate\Http\Request;
use Laravel\Nova\Http\Requests\NovaRequest;
use OptimistDigital\MenuBuilder\BuilderResourceTool;
use OptimistDigital\MenuBuilder\Models\Menu;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Resource;
use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\NovaLocaleField\LocaleField;
use OptimistDigital\NovaLocaleField\Filters\LocaleFilter;

class MenuResource extends Resource
{
    public static $model = Menu::class;
    public static $search = ['name', 'slug'];
    public static $displayInNavigation = false;

    public function fields(Request $request)
    {
        $menusTableName = MenuBuilder::getMenusTableName();
        $resourceLocale = static::$model::whereId($request->route('resourceId'))->value('locale');
        $locales = MenuBuilder::getLocales();
        $hasManyDifferentLocales = Menu::select('locale')->distinct()->get()->count() > 1;

        $fields = [
            Text::make(__('Name'), 'name')
                ->sortable()
                ->rules('required', 'max:255'),

            Text::make(__('Slug'), 'slug')
                ->sortable()
                ->creationRules('required', 'max:255', "unique:$menusTableName,slug,NULL,id,locale,{$request->get('locale')}")
                ->updateRules('required', 'max:255', "unique:$menusTableName,slug,{{resourceId}},id,locale,{$request->get('locale')}"),
        ];

        if (MenuBuilder::hasNovaLang()) {
            $fields[] = \OptimistDigital\NovaLang\NovaLangField\NovaLangField::make('Locale', 'locale', 'locale_parent_id')->onlyOnForms();
        } else {
            $fields[] = LocaleField::make('Locale', 'locale', 'locale_parent_id')
                ->locales($locales)
                ->onlyOnForms();
        }

        if (count($locales) > 1) {
            $fields[] = LocaleField::make('Locale', 'locale', 'locale_parent_id')
                ->locales($locales)
                ->exceptOnForms();
        } else if ($hasManyDifferentLocales) {
            $fields[] = Text::make('Locale', 'locale')->exceptOnForms();
        }

        $fields[] = BuilderResourceTool::make()->withMeta(['locale' => $resourceLocale]);
        return $fields;
    }

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
        return 'nova-menu';
    }

    public function title()
    {
        return $this->name . ' (' . $this->slug . ')';
    }

    public static function indexQuery(NovaRequest $request, $query)
    {
        if (MenuBuilder::hasNovaLang()) {
            $query->where(MenuBuilder::getMenusTableName() . '.locale', nova_lang_get_active_locale());
        }
        return $query;
    }

    public function filters(Request $request)
    {
        return [
            LocaleFilter::make()
                ->locales(MenuBuilder::getLocales()),
        ];
    }
}
