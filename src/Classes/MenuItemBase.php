<?php

namespace OptimistDigital\MenuBuilder\Classes;

abstract class MenuItemBase
{
    /**
     * Get the menu link identifier that can be used to tell different custom
     * links apart (ie 'page' or 'product').
     *
     * @return string
     **/
    abstract public static function getIdentifier(): string;

    /**
     * Get menu link name shown in CMS when selecting link type.
     * ie ('Product Link').
     *
     * @return string
     **/
    abstract public static function getName(): string;

    /**
     * Get menu link type.
     * 
     * Only 'select' is supported for custom MenuLinkables.
     *
     * @return string select|static-url|text
     **/
    abstract public static function getType(): string;

    /**
     * Get the subtitle value shown in CMS menu items list.
     *
     * @param string $value
     * @return string
     **/
    public static function getDisplayValue(string $value): string
    {
        return $value;
    }

    /**
     * Get the value of the link visible to the front-end.
     * 
     * Can be anything. It is up to you how you will handle parsing it.
     *
     * @param string $value The key from options list that was selected.
     * @param array $parameters The JSON parameters added to the item.
     * @return any
     **/
    public static function getValue(string $value, array $parameters = null)
    {
        return $value;
    }

    public static function getRules(): array
    {
        return [
            'menu_id' => 'required|exists:menus,id',
            'name' => 'required',
            'class' => 'required',
            'target' => 'required|in:_self,_blank',
            'value' => 'required'
        ];
    }
}
