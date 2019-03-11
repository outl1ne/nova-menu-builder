<?php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\Models\Menu;

class MenuItem extends Model
{
    protected $fillable = ['menu_id', 'name', 'value', 'class', 'parameters', 'target', 'parent_id', 'order', 'enabled'];

    protected $with = ['children'];

    protected $casts = [
        'enabled' => 'boolean',
    ];

    protected $appends = ['enabledClass', 'displayValue'];

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id')->with('children');
    }

    public function itemsChildren($parentId)
    {
        return $this->whereParentId($parentId);
    }

    public function getEnabledClassAttribute()
    {
        return ($this->enabled) ? 'enabled' : 'disabled';
    }

    public function scopeRoot($query)
    {
        return $query->whereNull('parent_id');
    }

    public function scopeEnabled($query)
    {
        return $query->where('enabled', 1);
    }

    public function getDisplayValueAttribute() {
        if (class_exists($this->class)) {
            return $this->class::menuLinkSubtitleDisplayValue($this->value);
        }
        return $this->value;
    }
}

 