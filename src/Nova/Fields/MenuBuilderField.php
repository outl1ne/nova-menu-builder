<?php

namespace Workup\MenuBuilder\Nova\Fields;

use Laravel\Nova\Fields\Field;
use Workup\MenuBuilder\Settings;

class MenuBuilderField extends Field
{
    public $component = 'menu-builder-field';

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        $menuModel = Settings::getMenuClass();

        $this->withMeta([
            'locales' => Settings::getLocales(),
            'maxDepth' => 10,
            'menuCount' => $menuModel::count(),
            'showDuplicate' => Settings::showDuplicate(),
            'collapsedAsDefault' => Settings::collapsedAsDefault(),
            'novaPath' => config('nova.path'),
        ]);

         parent::__construct($name, $attribute, $resolveCallback);
    }

    public function maxDepth($maxDepth = 10)
    {
        return $this->withMeta(['maxDepth' => $maxDepth]);
    }
}
