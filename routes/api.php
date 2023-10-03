<?php

use Illuminate\Support\Facades\Route;
use Workup\MenuBuilder\Http\Controllers\ItemController;
use Workup\MenuBuilder\Http\Controllers\MenuController;
use Workup\MenuBuilder\Http\Controllers\EntityController;
use Workup\MenuBuilder\Http\Controllers\MenuItemController;
use Workup\MenuBuilder\Http\Controllers\DuplicateItemController;
use Workup\MenuBuilder\Http\Controllers\CopyMenuItemsToMenuController;

Route::post('/menus/copy', CopyMenuItemsToMenuController::class);

Route::get('/menus', [MenuController::class, 'index']);
Route::get('/menu/{menu}', [MenuController::class, 'show']);
Route::post('/menu/{menu}', [MenuController::class, 'store']);

Route::get('/entity/{entity}', EntityController::class);

Route::post('/items', [ItemController::class, 'store']);
Route::get('/items/{menuItem}', [ItemController::class, 'show']);
Route::post('/items/{menuItem}', [ItemController::class, 'update']);
Route::delete('/items/{menuItem}', [ItemController::class, 'destroy']);

Route::post('/items/{menuItem}/duplicate', DuplicateItemController::class);

Route::get('/menu-item-types/{menu}', MenuItemController::class);
