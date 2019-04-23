<?php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\Models\MenuItem;

class Menu extends Model
{
    public function hasChildren()
    {
        return count($this->rootMenuItems) > 0;
    }

    public function menuItems()
    {
        return $this->rootMenuItems();
    }

    public function rootMenuItems()
    {
        return $this
            ->hasMany(MenuItem::class)
            ->where('parent_id', null)
            ->orderby('parent_id')
            ->orderby('order')
            ->orderby('name');
    }
}
