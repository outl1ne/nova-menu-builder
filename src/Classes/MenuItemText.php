<?php

namespace OptimistDigital\MenuBuilder\Classes;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Panel;

class MenuItemText extends MenuLinkable
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

    public static function getDisplayValue($value = null, array $parameters = null, array $data = null)
    {
        return '';
    }

    public static function getValue($value = null, array $parameters = null)
    {
        return null;
    }

    public static function getOptions($locale): array
    {
        return [];
    }

    public static function fields(Request $request): array
    {
        return [];
    }
}
