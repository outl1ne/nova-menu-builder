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
        return 'Text';
    }

    public static function getType(): string
    {
        return 'text';
    }
}
