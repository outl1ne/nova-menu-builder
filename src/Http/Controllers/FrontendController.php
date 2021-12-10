<?php

namespace Workup\MenuBuilder\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Workup\MenuBuilder\MenuBuilder;
use Workup\MenuBuilder\Http\Resources\MenuResource;
use  Workup\MenuBuilder\Http\Resources\MenuCollection;

class FrontendController extends Controller
{
    public function index()
    {
        return new MenuCollection(MenuBuilder::getMenuClass()::all());
    }

    public function show(int $menu)
    {
        return new MenuResource(MenuBuilder::getMenuClass()::findOrFail($menu));
    }
}
