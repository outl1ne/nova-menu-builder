<?php

namespace OptimistDigital\MenuBuilder\Classes;

class MenuItemStaticURL extends MenuLinkable
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
}
