<?php

namespace  Workup\MenuBuilder\Http\Resources;

use Workup\MenuBuilder\MenuBuilder;
use Illuminate\Http\Resources\Json\JsonResource;

class MenuItemResource extends JsonResource
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
            'label' => $this->label,
            'slug' => $this->slug,
            'type' => $this->type,
            'path' => $this->path,
            'url' => $this->customUrl,
            'target' => $this->target,
            'data' => $this->customData,
            'children' => empty($this->children) ? [] :
                $this->children->map(fn($item) => $this->formatMenuItem($item))
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
