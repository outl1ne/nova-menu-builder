<?php

use OptimistDigital\MenuBuilder\Models\Menu;
use Illuminate\Database\Eloquent\ModelNotFoundException;

/**
 * Returns the menu with given slug as a complete JSOn.
 *
 * @param string $slug Slug of the menu.
 * @return JSON
 * @throws ModelNotFoundException When menu can not be found.
 **/
function menu_builder_json(string $slug)
{
    $menu = Menu::whereSlug($slug)->firstOrFail();
    return $menu->optionsMenu()->toJson();
}
