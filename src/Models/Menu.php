<?php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\Models\MenuItem;

class Menu extends Model
{
    public static function boot()
    {
        parent::boot();

        static::saving(function ($model) {
            $model->slug = str_slug($model->name);
        });
    }

    public function items()
    {
        return $this->hasMany(MenuItem::class);
    }

    public function parentItems()
    {
        return $this->hasMany(MenuItem::class)->whereNull('parent_id');
    }

    public function optionsMenu()
    {
        return $this->parentItems()
            ->orderby('parent_id')
            ->orderby('order')
            ->orderby('name')
            ->get();
    }

    public function optionsMenuEnabled()
    {
        return $this->parentItems()->where('enabled', 1)
            ->orderby('parent_id')
            ->orderby('order')
            ->orderby('name')
            ->get();
    }
}
