<?php

use Illuminate\Support\Facades\Route;
use Workup\MenuBuilder\Http\Controllers\ItemController;
use Workup\MenuBuilder\Http\Controllers\MenuController;
use Workup\MenuBuilder\Http\Controllers\EntityController;

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

Route::get('/menu/{menu}', [MenuController::class, 'getMenuItems']);
Route::post('/menu/{menu}', [MenuController::class, 'saveMenuItems']);

Route::get('/entity/{entity}', [EntityController::class, 'getTable']);

Route::post('/items', [ItemController::class, 'createMenuItem']);
Route::get('/items/{menuItem}', [ItemController::class, 'getMenuItem']);
Route::post('/items/{menuItem}', [ItemController::class, 'updateMenuItem']);
Route::delete('/items/{menuItem}', [ItemController::class, 'deleteMenuItem']);
Route::post('/items/{menuItem}/duplicate', [ItemController::class, 'duplicateMenuItem']);

Route::get('/menu-item-types/{menu}', [ItemController::class, 'getMenuItemTypes']);
