<?php

namespace OptimistDigital\MenuBuilder\Http\Resources;

use Illuminate\Http\Request;
use Laravel\Nova\Http\Requests\NovaRequest;
use OptimistDigital\MenuBuilder\BuilderResourceTool;
use OptimistDigital\MenuBuilder\Models\Menu;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Resource;
use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\NovaLocaleField\LocaleField;

class MenuResource extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = Menu::class;


    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * @var mixed
     */
    public static $displayInNavigation = false;

    /**
     * Get the fields displayed by the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     * @throws \Exception
     */
    public function fields(Request $request)
    {
        $resourceLocale = static::$model::whereId($request->route('resourceId'))->value('locale');
        $locales = MenuBuilder::getLocales();

        $fields = [
            ID::make()->sortable(),

            Text::make(__('Name'), 'name')
                ->sortable()
                ->rules('required', 'max:255'),

            Text::make(__('Slug'), 'slug')
                ->sortable()
                ->creationRules('required', 'max:255', "unique:menus,slug,NULL,id,locale,$request->locale")
                ->updateRules('required', 'max:255', "unique:menus,slug,{{resourceId}},id,locale,$request->locale"),
        ];

        if (class_exists('\OptimistDigital\NovaLang\NovaLang')) {
            $fields[] = \OptimistDigital\NovaLang\NovaLangField\NovaLangField::make('Locale', 'locale', 'locale_parent_id')->onlyOnForms();
        } else {
            $fields[] = LocaleField::make('Locale', 'locale', 'locale_parent_id')->locales($locales)->onlyOnForms();
        }

        if (count($locales) > 1)
            $fields[] = LocaleField::make('Locale', 'locale', 'locale_parent_id')
                ->locales($locales)->exceptOnForms();
        else {
            $fields[] = Text::make('Locale', 'locale')->exceptOnForms();
        }

        $fields[] = BuilderResourceTool::make()->withMeta(['locale' => $resourceLocale]);
        return $fields;
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }

    /**
     * Get the displayable label of the resource.
     *
     * @return string
     */
    public static function label()
    {
        return 'Menus';
    }

    /**
     * Get the displayable singular label of the resource.
     *
     * @return string
     */
    public static function singularLabel()
    {
        return 'Menu';
    }

    /**
     * Get the URI key for the resource.
     *
     * @return string
     */
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
        if (class_exists('\OptimistDigital\NovaLang\NovaLang')) $query->where('menus.locale', nova_lang_get_active_locale());
        return $query;
    }
}
