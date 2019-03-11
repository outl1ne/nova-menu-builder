<?php

namespace OptimistDigital\MenuBuilder\Classes;

class MenuItemStaticURL extends MenuLinkable
{
    public static function menuLinkIdentifier(): string
    {
        return 'static-url';
    }

    public static function menuLinkType(): string
    {
        return 'static-url';
    }

    public static function menuLinkName(): string
    {
        return 'Static URL';
    }

    public static function menuLinkOptions(): array
    {
        return [];
    }
}
