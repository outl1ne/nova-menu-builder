<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\MenuBuilder;

class EntityController extends Controller
{
    /**
     * Returns the menu item as JSON.
     *
     * @param $entityId
     * @return Illuminate\Http\Response
     **/
    public function __invoke($entityId)
    {
        $entity = MenuBuilder::getEntityModel()::find($entityId);

        return isset($entity)
            ? response()->json(Str::plural($entity->slug), 200)
            : response()->json(['error' => 'entity_not_found'], 400);
    }
}
