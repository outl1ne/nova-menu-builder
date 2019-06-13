<?php

namespace OptimistDigital\MenuBuilder\Classes;

abstract class MenuItemText
{
    public static function getIdentifier(): string
    {
        return 'Text';
    }

    public static function getName(): string
    {
        return 'Text';
    }

    public static function getType(): string
    {
        return 'text';
    }

    public static function getOptions($locale): array
    {
        return [];
    }

    public static function getDisplayValue(?string $value): ?string
    {
        return $value;
    }

    public static function getValue(?string $value, array $parameters = null)
    {
        return $value;
    }
}
