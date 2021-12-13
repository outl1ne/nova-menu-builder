<?php

namespace Workup\MenuBuilder\MenuItemTypes;

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

    /**
     * Get the subtitle value shown in CMS menu items list.
     **/
    public static function getDisplayValue(\Workup\MenuBuilder\Models\MenuItem $model, $locale): string
    {
        return "Path: $model->slug - Url: $model->url";
    }

    public static function getType(): string
    {
        return 'static-url';
    }

    public static function getRules(): array
    {
        /**
         * @todo fix validation.
         * Enabling this rule, Vue tell us that $data->url must be filled... also if it is filled!
         */
        return [
//            'url' => 'required|url',
        ];
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
