<?php

use Illuminate\Support\Facades\Route;
use Workup\MenuBuilder\Http\Controllers\FrontendController;

Route::get('/menus', [FrontendController::class, 'index']);
Route::get('/menu/{menu}', [FrontendController::class, 'show']);
