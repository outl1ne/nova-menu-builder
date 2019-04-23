<?php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\Models\MenuItem;

class Menu extends Model
{
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
