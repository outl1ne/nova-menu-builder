<?php

use Outl1ne\MenuBuilder\MenuBuilder;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/


Route::get('/menus', [MenuBuilder::getMenuController(), 'getMenus']);
Route::post('/menus/copy', [MenuBuilder::getMenuController(), 'copyMenuItemsToMenu']);

Route::get('/menu/{menu}', [MenuBuilder::getMenuController(), 'getMenuItems']);
Route::post('/menu/{menu}', [MenuBuilder::getMenuController(), 'saveMenuItems']);

Route::post('/items', [MenuBuilder::getMenuController(), 'createMenuItem']);
Route::get('/items/{menuItem}', [MenuBuilder::getMenuController(), 'getMenuItem']);
Route::post('/items/{menuItem}', [MenuBuilder::getMenuController(), 'updateMenuItem']);
Route::delete('/items/{menuItem}', [MenuBuilder::getMenuController(), 'deleteMenuItem']);
Route::post('/items/{menuItem}/duplicate', [MenuBuilder::getMenuController(), 'duplicateMenuItem']);

Route::get('/menu-item-types/{menu}', [MenuBuilder::getMenuController(), 'getMenuItemTypes']);