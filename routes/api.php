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

Route::any('/items', 'MenuController@items');
Route::post('/save-items', 'MenuController@saveItems');
Route::post('/new-item', 'MenuController@createNew');
Route::get('/edit/{item}', 'MenuController@edit');
Route::post('/update/{item}', 'MenuController@update');
Route::post('/destroy/{item}', 'MenuController@destroy');
