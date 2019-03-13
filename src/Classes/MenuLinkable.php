<?php

namespace OptimistDigital\MenuBuilder\Classes;

abstract class MenuLinkable
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
     * @return string select|static-url
     **/
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
    public static function getOptions(): array
    {
        return [];
    }

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
}
