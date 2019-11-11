<?php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\MenuBuilder\Models\MenuItem;

class Menu extends Model
{
    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->setTable(MenuBuilder::getMenusTableName());
    }

    public function rootMenuItems()
    {
        return $this
            ->hasMany(MenuItem::class)
            ->where('parent_id', null)
            ->orderBy('parent_id')
            ->orderBy('order')
            ->orderBy('name');
    }

    public function formatForAPI()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'locale' => $this->locale,
            'menuItems' => collect($this->rootMenuItems)->map(function ($item) {
                return $this->formatMenuItem($item);
            }),
        ];
    }

    public function formatMenuItem($menuItem)
    {
        return [
            'id' => $menuItem->id,
            'name' => $menuItem->name,
            'type' => $menuItem->type,
            'value' => $menuItem->customValue,
            'target' => $menuItem->target,
            'parameters' => $menuItem->parameters,
            'enabled' => $menuItem->enabled,
            'children' => empty($menuItem->children) ? [] : $menuItem->children->map(function ($item) {
                return $this->formatMenuItem($item);
            }),
        ];
    }
}
