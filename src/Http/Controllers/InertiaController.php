<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;

class InertiaController extends Controller
{
    /**
     * Return root menu items for one menu.
     **/
    public function index(): Response
    {
        return Inertia::render('NovaMenu', ['basePath' => 'menus']);
    }

    /**
     * Save menu items.
     **/
    public function show(Request $request): JsonResponse
    {
        $items = $request->get('menuItems');

        $i = 1;
        foreach ($items as $item) {
            $this->saveMenuItemWithNewOrder($i, $item);
            $i++;
        }

        return response()->json(['success' => true], 200);
    }

}
