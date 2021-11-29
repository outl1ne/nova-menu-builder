<?php

namespace Workup\MenuBuilder\MenuItemTypes;

use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Models\MenuItem;

class MenuItemEntityType extends MenuItemSelectType
{
    public static function getType(): string
    {
        return 'entity-select';
    }

    /**
     * Get the menu link identifier that can be used to tell different custom
     * links apart (ie 'page' or 'product').
     *
     * @return string
     **/
    public static function getIdentifier(): string
    {
        return 'entity-url';
    }

    /**
     * Get menu link name shown in  a dropdown in CMS when selecting link type
     * ie ('Product Link').
     *
     * @return string
     **/
    public static function getName(): string
    {
        return 'Entity URL';
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
        return MenuBuilder::getEntityModel()::get()
            ->pluck('id', 'slug')
            ->mapWithKeys(function ($id, $slug) {
                return [
                    $id => \Illuminate\Support\Str::plural($slug)
                ];
            })
            ->toArray();
    }

    /**
     * Get the subtitle value shown in CMS menu items list.
     **/
    public static function getDisplayValue(MenuItem $model, $locale): string
    {
        return $model->value . ' ' . $model->data . ' ' . $locale;
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
     */
    public static function getValue($value, ?array $data, $locale): string
    {
        return "/index/$value";
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

    /**
     * Get the rules for the resource.
     *
     * @return array A key-value map of attributes and rules.
     */
    public static function getRules(): array
    {
        /**
         * @todo fix validation.
         * Enabling this rule, Vue tell us that $data->{item} must be filled... also if it is filled!
         */
        return [
//            'item_type' => 'required|integer',
//            'entity_id' => 'required|integer',
//            'entity_item_id' => 'required|integer',
        ];
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
     */
    public static function getData($data = null): array
    {
        return [
            'api_path' => 'cippa',
            'custom' => 'sticazzi',
        ];
    }
}
