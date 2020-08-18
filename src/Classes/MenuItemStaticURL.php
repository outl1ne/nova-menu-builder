<?php

namespace OptimistDigital\MenuBuilder\Classes;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Panel;

class MenuItemStaticURL extends MenuLinkable
{
    public static function getIdentifier(): string
    {
        return 'static-url';
    }

    public static function getName(): string
    {
        return 'Static URL';
    }

    public static function getType(): string
    {
        return 'static-url';
    }

    public static function getRules(): array
    {
        $rules = parent::getRules();

        $rules['value'] = 'required';

        return $rules;
    }

    public static function fields(Request $request): array
    {
        return [];
    }
}
