<?php

namespace OptimistDigital\MenuBuilder\MenuItemTypes;

abstract class BaseMenuItemType
{
    /**
     * Get the menu link identifier that can be used to tell different custom
     * links apart (ie 'page-link' or 'image-link').
     *
     * @return string
     **/
    abstract public static function getIdentifier(): string;

    /**
     * Get menu link name shown in CMS when selecting link type.
     * ie ('Product Link' or 'Image Link').
     *
     * @return string
     **/
    abstract public static function getName(): string;

    /**
     * Get menu link type.
     *
     * Choose 'custom' if you only want to render custom fields.
     *
     * @return string text|select|static-url
     **/
    abstract public static function getType(): string;

    /**
     * Get the subtitle value shown in CMS menu items list.
     *
     * @param $value
     * @param $data The data from item fields.
     * @param $locale
     * @return string
     */
    public static function getDisplayValue($value, ?array $data, $locale)
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
     * @param $value The key from options list that was selected.
     * @param $data The data from item fields.
     * @param $locale
     * @return mixed
     */
    public static function getValue($value, ?array $data, $locale)
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
     * @return mixed
     */
    public static function getData($data = null)
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
