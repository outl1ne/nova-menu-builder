<?php

namespace Workup\MenuBuilder\Models;

use Illuminate\Support\Str;
use Workup\MenuBuilder\MenuBuilder;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\Model;
use Workup\MenuBuilder\MenuItemTypes\MenuItemEntityType;
use Workup\MenuBuilder\MenuItemTypes\MenuItemRouteType;

class MenuItem extends Model
{
    protected $fillable = [
        'menu_id',
        'slug',
        'parent_id',
        'item_type',
        'entity_id',
        'entity_item_id',
        'is_index',
        'label',
        'locale',
        'path',
        'value',
        'class',
        'data',
        'target',
        'order',
        'is_active',
    ];

    protected $with = [
        'children'
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_index' => 'boolean',
        'data' => 'array'
    ];

    protected $appends = [
        'enabledClass',
        'displayValue',
        'fields',
    ];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->setTable(MenuBuilder::getMenuItemsTableName());
    }

    public function menu()
    {
        return $this->belongsTo(MenuBuilder::getMenuClass());
    }

    public function children()
    {
        return $this->hasMany(static::class, 'parent_id')->with('children')->orderBy('order');
    }

    public function itemsChildren($parentId)
    {
        return $this->whereParentId($parentId);
    }

    public function getEnabledClassAttribute()
    {
        return ($this->is_active) ? 'enabled' : 'disabled';
    }

    public function scopeRoot($query)
    {
        return $query->whereNull('parent_id');
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', 1);
    }

    public function getDisplayValueAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getDisplayValue($this, $this->locale);
        }
        return $this->value;
    }

    public function getTypeAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getIdentifier($this->value);
        }
        return null;
    }

    public function getCustomUrlAttribute()
    {
        if ($this->item_type === MenuItemRouteType::class) {
            return MenuBuilder::getRouteModel()::findOrFail($this->url)->path;
        }

        if ($this->item_type === MenuItemEntityType::class) {
            $entitySlug = Str::plural(MenuBuilder::getEntityModel()::findOrFail($this->entity_id)->slug);
            $route_path = $this->is_index ? "/api/$entitySlug" : "/api/$entitySlug/$this->entity_item_id";
            if (! app('router')->getRoutes()->match(app('request')->create($route_path))) {
                return 'error';
            }
            return $route_path;
        }

        return $this->value;
    }

    public function getCustomDataAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getData($this->data);
        }
        return $this->data;
    }

    public function getFieldsAttribute()
    {
        $fields = MenuBuilder::getFieldsFromMenuItemTypeClass($this->class);
        foreach ($fields as $field) {
            $field->resolve($this);
        }
        return $fields;
    }
}
