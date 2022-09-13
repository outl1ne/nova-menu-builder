<?php

namespace Outl1ne\MenuBuilder\MenuItemTypes;

class MenuItemStaticURLType extends BaseMenuItemType
{
    public static function getIdentifier(): string
    {
        return 'static-url';
    }

    public static function getName(): string
    {
        return 'Static URL';
    }

    public static function getType(): string
    {
        return 'static-url';
    }

    public static function getRules(): array
    {
        return [
            'value' => 'required|max:255',
        ];
    }
}
