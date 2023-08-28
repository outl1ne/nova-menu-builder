<?php

namespace Workup\MenuBuilder\Nova\Fields;

use Laravel\Nova\Fields\Field;
use Workup\MenuBuilder\MenuBuilder;

class MenuBuilderField extends Field
{
    public $component = 'menu-builder-field';

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        $menuModel = MenuBuilder::getMenuClass();

        $this->withMeta([
            'locales' => MenuBuilder::getLocales(),
            'maxDepth' => 10,
            'menuCount' => $menuModel::count(),
            'showDuplicate' => MenuBuilder::showDuplicate(),
            'collapsedAsDefault' => MenuBuilder::collapsedAsDefault(),
        ]);

        parent::__construct($name, $attribute, $resolveCallback);
    }

    public function maxDepth($maxDepth = 10)
    {
        return $this->withMeta(['maxDepth' => $maxDepth]);
    }
}
