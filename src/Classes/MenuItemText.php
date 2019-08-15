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

    public static function getDisplayValue(?string $value): string
    {
        return '';
    }

    public static function getValue(?string $value, array $parameters = null)
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
