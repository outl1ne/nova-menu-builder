<?php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\MenuBuilder;

class Menu extends Model
{
    protected $fillable = ['locale_parent_id'];

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);
        $this->setTable(MenuBuilder::getMenusTableName());
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($menu) {
            // Is a locale parent template
            if ($menu->locale_parent_id === null) {
                // Find child templates
                $childMenu = $menu::where('locale_parent_id', '=', $menu->id)->get();
                if (count($childMenu) === 0) return;

                // Pick the first template randomly and let it become the parent
                $childMenu[0]->update(['locale_parent_id' => null]);
                $newLocaleParentId = $childMenu[0]->id;

                // Update others
                for ($i = 1; $i < count($childMenu); $i++) {
                    $childMenu[$i]->update(['locale_parent_id' => $newLocaleParentId]);
                }
            }
        });
    }

    public function rootMenuItems()
    {
        return $this
            ->hasMany(MenuBuilder::getMenuItemsModel())
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
