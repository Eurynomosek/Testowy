<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\InventoryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [WelcomeController::class, 'index'])->name('index');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware(['can:isAdmin'])->group(function () {
        Route::get('products/{product}/download', [ProductController::class, 'downloadImage'])->name('products.downloadImage');
        Route::resource('products', ProductController::class);

        Route::resource('users', UserController::class)->only([
            'index', 'edit', 'update', 'destroy'
        ]);
    });
    Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
    Route::post('/cart/{product}', [CartController::class, 'store'])->name('cart.store');
    Route::delete('/cart/{product}', [CartController::class, 'destroy'])->name('cart.destroy');

    Route::get('/home', [HomeController::class, 'index'])->name('home');
});

//Route::get('/products', [ProductController::class, 'index'])->name('products.index')->middleware('auth');
//Route::get('/products/create', [ProductController::class, 'create'])->name('products.create')->middleware('auth');
//Route::post('/products', [ProductController::class, 'store'])->name('products.store')->middleware('auth');
//Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show')->middleware('auth');
//Route::get('/products/edit/{product}', [ProductController::class, 'edit'])->name('products.edit')->middleware('auth');
//Route::post('/products/{product}', [ProductController::class, 'update'])->name('products.update')->middleware('auth');
//Route::delete('/products/{product}', [ProductController::class, 'destroy'])->name('products.destroy')->middleware('auth');

Route::get('/inventory', [InventoryController::class, 'index'])->name('inventory.index')->middleware('auth');
Route::post('/inventory/search', [InventoryController::class, 'search'])->name('inventory.search')->middleware('auth');

Auth::routes(['verify' => true]);
