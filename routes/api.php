<?php

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


Route::get('/menus', 'MenuController@getMenus');
Route::post('/menus/copy', 'MenuController@copyMenuItemsToMenu');

Route::get('/menu/{menu}', 'MenuController@getMenuItems');
Route::post('/menu/{menu}', 'MenuController@saveMenuItems');

Route::post('/items', 'MenuController@createMenuItem');
Route::get('/items/{menuItem}', 'MenuController@getMenuItem');
Route::post('/items/{menuItem}', 'MenuController@updateMenuItem');
Route::delete('/items/{menuItem}', 'MenuController@deleteMenuItem');
Route::post('/items/{menuItem}/duplicate', 'MenuController@duplicateMenuItem');

Route::get('/menu-item-types/{menu}', 'MenuController@getMenuItemTypes');
