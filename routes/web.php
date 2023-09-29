<?php

use App\Http\Controllers\CallToActionController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ThemeController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::get('/', [ThemeController::class, 'readCookie'])->name('read-cookie');
Route::post('/', [ThemeController::class, 'updateTheme'])->name('update-theme');
Route::post('/hire-me', [CallToActionController::class, 'submit'])->name('hireMe');