<?php

namespace  Workup\MenuBuilder\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class MenuItemCollection extends ResourceCollection
{
    /**
     * Indicates if the resource's collection keys should be preserved.
     */
    public bool $preserveKeys = true;

    /**
     * The resource that this resource collects.
     */
    public $collects = MenuItemResource::class;

    /**
     * Transform the resource collection into an array.
     */
    public function toArray($request): array
    {
        return $this->collection;
    }
}
