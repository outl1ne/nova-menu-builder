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
     * @OAS\Property(property="data",type="array")
     *
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'data' => $this->collection,
        ];
    }
}
