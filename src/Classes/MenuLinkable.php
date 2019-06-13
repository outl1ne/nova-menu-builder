<?php

namespace OptimistDigital\MenuBuilder\Classes;

abstract class MenuLinkable extends MenuItemBase
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
}
