<?php

namespace OptimistDigital\MenuBuilder;

use Laravel\Nova\ResourceTool;

class BuilderResourceTool extends ResourceTool
{

    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name()
    {
        return __('Menu Items');
    }

    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component()
    {
        return 'nova-menu';
    }
}
