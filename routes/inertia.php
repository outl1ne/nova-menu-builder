<?php

use Illuminate\Support\Facades\Route;
use Workup\MenuBuilder\Http\Controllers\InertiaController;

Route::get('/', [InertiaController::class, 'index']);

//Route::get('/menu/{menu}', [InertiaController::class, 'show']);
