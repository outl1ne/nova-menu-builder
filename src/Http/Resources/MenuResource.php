<?php

namespace  Workup\MenuBuilder\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Workup\MenuBuilder\MenuBuilder;

class MenuResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'children' => $this->hasMany(MenuBuilder::getMenuItemClass())
                ->where('parent_id', null)
                ->where('is_active', true)
                ->orderBy('parent_id')
                ->orderBy('order')
                ->orderBy('label')
//                ->where('locale', $locale)
                ->get()
                ->map(fn($menuItem) => $this->formatMenuItem($menuItem))
        ];
    }

    public function formatMenuItem($menuItem): array
    {
        return [
            'id' => $menuItem->id,
            'label' => $menuItem->label,
            'slug' => $menuItem->slug,
            'type' => $menuItem->type,
            'path' => $menuItem->path,
            'url' => $menuItem->customUrl,
            'target' => $menuItem->target,
            'data' => $menuItem->customData,
            'children' => empty($menuItem->children) ? [] :
                $menuItem->children->map(fn($item) => $this->formatMenuItem($item))
        ];
    }
}
