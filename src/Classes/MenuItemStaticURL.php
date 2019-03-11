<?php

namespace OptimistDigital\MenuBuilder\Classes;

class MenuItemStaticURL extends MenuLinkable
{
    public function menuLinkType(): string
    {
        return 'static-url';
    }

    public function menuLinkName(): string
    {
        return 'Static URL';
    }

    public function menuLinkOptions(): array
    {
        return [];
    }
}
