<?php

namespace Marshmallow\MenuBuilder\MenuItemTypes;

abstract class MenuItemSelectType extends BaseMenuItemType
{
    public static function getType(): string
    {
        return 'select';
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
        return [];
    }

    /**
     * Get the rules for the resource.
     *
     * @return array A key-value map of attributes and rules.
     */

    public static function getRules(): array
    {
        return [
            'value' => 'required',
        ];
    }
}
