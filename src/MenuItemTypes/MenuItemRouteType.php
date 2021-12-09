<?php

namespace Workup\MenuBuilder\MenuItemTypes;

use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Models\MenuItem;

class MenuItemRouteType extends MenuItemSelectType
{
    public static function getType(): string
    {
        return 'route-select';
    }

    /**
     * Get the menu link identifier that can be used to tell different custom
     * links apart (ie 'page' or 'product').
     *
     * @return string
     **/
    public static function getIdentifier(): string
    {
        return 'route-url';
    }

    /**
     * Get menu link name shown in  a dropdown in CMS when selecting link type
     * ie ('Product Link').
     *
     * @return string
     **/
    public static function getName(): string
    {
        return 'Route URL';
    }

    /**
     * Get list of options shown in a select dropdown.
     *
     * Should be a map of [key => value, ...], where key is a unique identifier
     * and value is the displayed string.
     *
     * @return array
     **/
    public static function getOptions($locale): array
    {
        return MenuBuilder::getRouteModel()::all()
            ->pluck('name', 'id')
            ->toArray();
    }

    /**
     * Get the subtitle value shown in CMS menu items list.
     **/
    public static function getDisplayValue(MenuItem $model, $locale): string
    {
        return "Route";
    }

    /**
     * Get the rules for the resource.
     *
     * @return array A key-value map of attributes and rules.
     */
    public static function getRules(): array
    {
        return [
//            'value' => 'required',
        ];
    }
}
