<?php

namespace Workup\MenuBuilder;

use Laravel\Nova\Nova;
use Laravel\Nova\Tool;
use Illuminate\Http\Request;
use Laravel\Nova\Menu\MenuSection;
use Workup\MenuBuilder\Traits\Menuable;

class MenuBuilderTool extends Tool
{
    use Menuable;

    public function boot()
    {
        Nova::script('nova-menu-builder', __DIR__ . '/../dist/js/entry.js');
        Nova::style('nova-menu-builder', __DIR__ . '/../dist/css/entry.css');

        Nova::provideToScript(['menuBuilder' => $this->config()]);
    }

    public function menu(Request $request)
    {
        if ($this->hideMenu) {
            return null;
        }

        return MenuSection::make($this->title ?: __('novaMenuBuilder.sidebarTitle'))
            ->path('/menus')
            ->icon($this->icon);
    }

    protected function config(): array
    {
        return [
            'menuBuilderUriKey' => Settings::getMenuResource()::uriKey(),
            'permissions' => request()->user()
                ->getAllPermissions()
                ->filter(fn ($permission) => str_contains($permission, '.menus'))
                ->pluck('name'),
        ];
    }
}
