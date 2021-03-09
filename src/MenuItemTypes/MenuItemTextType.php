<?php

namespace OptimistDigital\MenuBuilder\MenuItemTypes;

class MenuItemTextType extends BaseMenuItemType
{
    public static function getIdentifier(): string
    {
        return 'text';
    }

    public static function getName(): string
    {
        return trans('nova-menu-builder::menu_item_types.text');
    }

    public static function getType(): string
    {
        return 'text';
    }
}
