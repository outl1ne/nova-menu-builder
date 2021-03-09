<?php

namespace OptimistDigital\MenuBuilder\MenuItemTypes;

class MenuItemStaticURLType extends BaseMenuItemType
{
    public static function getIdentifier(): string
    {
        return 'static-url';
    }

    public static function getName(): string
    {
        return trans('nova-menu-builder::menu_item_types.static_url');
    }

    public static function getType(): string
    {
        return 'static-url';
    }

    public static function getRules(): array
    {
        return [
            'value' => 'required',
        ];
    }
}
