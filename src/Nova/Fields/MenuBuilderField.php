<?php

namespace Outl1ne\MenuBuilder\Nova\Fields;

use Laravel\Nova\Fields\Field;
use Outl1ne\MenuBuilder\MenuBuilder;

class MenuBuilderField extends Field
{
    public $component = 'menu-builder-field';

    public function __construct($name, $attribute = null, callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $menuModel = MenuBuilder::getMenuClass();

        $this->withMeta([
            'locales' => MenuBuilder::getLocales(),
            'maxDepth' => 10,
            'menuCount' => $menuModel::count(),
            'showDuplicate' => MenuBuilder::showDuplicate(),
            'collapsedAsDefault' => MenuBuilder::collapsedAsDefault(),
        ]);
    }

    public function maxDepth($maxDepth = 10)
    {
        return $this->withMeta(['maxDepth' => $maxDepth]);
    }
}
