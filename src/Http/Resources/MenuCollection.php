<?php

namespace  Workup\MenuBuilder\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class MenuCollection extends ResourceCollection
{
    /**
     * Indicates if the resource's collection keys should be preserved.
     */
    public bool $preserveKeys = true;

    /**
     * The resource that this resource collects.
     */
    public $collects = MenuResource::class;

    /**
     * @OAS\Property(property="data",type="integer")
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
