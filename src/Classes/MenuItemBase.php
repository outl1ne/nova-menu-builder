<?php

namespace OptimistDigital\MenuBuilder\Classes;

use Illuminate\Http\Request;
use OptimistDigital\MenuBuilder\MenuBuilder;

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
     * @param null $value
     * @param array|null $parameters The JSON parameters added to the item.
     * @param array|null $data
     * @return string
     */
    public static function getDisplayValue($value = null, array $parameters = null, array $data = null)
    {
        return $value;
    }

    /**
     * Get the value of the link visible to the front-end.
     *
     * Can be anything. It is up to you how you will handle parsing it.
     *
     * This will only be called when using the nova_get_menu()
     * and nova_get_menus() helpers or when you call formatForAPI()
     * on the Menu model.
     *
     * @param null $value The key from options list that was selected.
     * @param array|null $parameters The JSON parameters added to the item.
     * @return any
     */
    public static function getValue($value = null, array $parameters = null)
    {
        return $value;
    }

    /**
     * Get data of the link visible to the front-end.
     *
     * Can be anything. It is up to you how you will handle parsing it.
     *
     * This will only be called when using the nova_get_menu()
     * and nova_get_menus() helpers or when you call formatForAPI()
     * on the Menu model.
     *
     * @param null $data Field values
     * @param array|null $parameters The JSON parameters added to the item.
     * @return any
     */
    public static function getData($data = null, array $parameters = null)
    {
        return $data;
    }

    /**
     * Get the rules for the resource.
     *
     * @return array A key-value map of attributes and rules.
     */

    public static function getRules(): array
    {
        return [];
    }

    /**
     * Get the fields displayed by the resource.
     *
     * @return array An array of fields.
     */
    public static function getFields(): array
    {
        return [];
    }
}
