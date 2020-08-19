<?php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\MenuBuilder;

class MenuItem extends Model
{
    protected $fillable = ['menu_id', 'name', 'value', 'class', 'parameters', 'target', 'parent_id', 'order', 'enabled', 'data'];

    protected $with = ['children'];

    protected $casts = [
        'enabled' => 'boolean',
        'parameters' => 'array',
        'data' => 'array',
    ];

    protected $appends = ['enabledClass', 'displayValue', 'fields'];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->setTable(MenuBuilder::getMenuItemsTableName());
    }

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id')->with('children')->orderBy('order');
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

    public function getDisplayValueAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getDisplayValue($this->value, $this->parameters, $this->data);
        }
        return $this->value;
    }

    public function getTypeAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getIdentifier($this->value, $this->parameters);
        }
        return null;
    }

    public function getCustomValueAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getValue($this->value, $this->parameters);
        }
        return $this->value;
    }

    public function getCustomDataAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getData($this->data, $this->parameters);
        }
        return $this->data;
    }

    public function getFieldsAttribute()
    {
        $fields = $this->class::getFields($this->class);
        foreach ($fields as $field) {
            $field->resolve($this);
        }
        return $fields;
    }
}
