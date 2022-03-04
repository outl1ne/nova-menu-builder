<?php

namespace Workup\MenuBuilder\Http\Controllers\Frontend;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Http\Resources\MenuItemCollection;

class MenuItemController extends Controller
{

    /**
     * Menu List Endpoint
     *
     * @OA\Get(
     *     path="/api/menus/{id}/{slug}",
     *     summary="Get a detail of the required menu starting from a child slug.",
     *     tags={"Menu"},
     *     description="This endpoint returns a detail of the required menu starting from a child slug.",
     *     @OA\Parameter(
     *         name="x-site-id",
     *         description="Site ID useful to detect right request configuration.",
     *         required=true,
     *         in="header",
     *         @OA\Schema(type="string"),
     *     ),
     *     @OA\Parameter(
     *         name="id",
     *         description="The ID of the Menu.",
     *         required=true,
     *         in="path",
     *         @OA\Schema(type="integer"),
     *     ),
     *     @OA\Parameter(
     *         name="slug",
     *         description="The slug of the Menu Item.",
     *         required=true,
     *         in="path",
     *         @OA\Schema(type="string"),
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Item not found",
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Bad Request in querystring",
     *     ),
     *     @OA\Response(
     *          response=200,
     *          description="Successful request",
     *          @OA\JsonContent(
     *            type="object",
     *            @OA\Property(
     *                property="id",
     *                description="The ID of the Menu.",
     *                type="integer"
     *            ),
     *            @OA\Property(
     *                property="name",
     *                description="The Name of the Menu.",
     *                type="string"
     *            ),
     *            @OA\Property(
     *                property="slug",
     *                description="The Slug of the Menu.",
     *                type="string"
     *            ),
     *            @OA\Property(
     *                property="data",
     *                description="The response data.",
     *                type="array",
     *                @OA\Items(
     *                     @OA\Property(
     *                         property="id",
     *                         description="The ID of the Menu Item.",
     *                         type="integer"
     *                     ),
     *                     @OA\Property(
     *                         property="slug",
     *                         description="The Slug of the Menu Item.",
     *                         type="string"
     *                     ),
     *                     @OA\Property(
     *                         property="type",
     *                         description="The Type of the Menu Item.",
     *                         type="string"
     *                     ),
     *                     @OA\Property(
     *                         property="path",
     *                         description="The Path of the Menu Item.",
     *                         type="string"
     *                     ),
     *                     @OA\Property(
     *                         property="url",
     *                         description="The URL of the Menu Item.",
     *                         type="string"
     *                     ),
     *                     @OA\Property(
     *                         property="target",
     *                         description="The Target of the Menu Item.",
     *                         type="string"
     *                     ),
     *                     @OA\Property(
     *                         property="data",
     *                         description="Optional data of the Menu Item.",
     *                         type="array",
     *                         @OA\Items()
     *                    ),
     *                     @OA\Property(
     *                         property="children",
     *                         description="Subitems of the Menu Item.",
     *                         type="array",
     *                         @OA\Items()
     *                    )
     *                )
     *            )
     *      )
     *  )
     * )
     */
    public function show(int $menu, string $slug)
    {
        $items = MenuBuilder::getMenuItemClass()::query()
            ->with('children')
            ->where('menu_id', $menu)
            ->where('slug', $slug)
            ->where('locale', 'like', request()->getPreferredLanguage() . '%')
            ->get();

        return new MenuItemCollection($items);
    }
}
