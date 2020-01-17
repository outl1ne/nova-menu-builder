<?php

namespace OptimistDigital\MenuBuilder\Classes;

abstract class MenuItemText extends MenuItemBase
{
    public static function getIdentifier(): string
    {
        return 'text';
    }

    public static function getName(): string
    {
        return 'Text';
    }

    public static function getType(): string
    {
        return 'text';
    }

    public static function getDisplayValue($value = null, array $parameters = null)
    {
        return '';
    }

    public static function getValue($value = null, array $parameters = null)
    {
        return null;
    }

    public static function getRules(): array
    {
        $rules = parent::getRules();

        $rules['value'] = '';

        return $rules;
    }
}
