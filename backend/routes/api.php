<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\GoogleAuthController;
use App\Http\Controllers\Api\OrdersController;
use App\Http\Controllers\Api\OrdersDetailController;
use App\Http\Controllers\Api\ProductsController;
use App\Http\Controllers\Api\ReviewsController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\FavoritesController;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;


//Auth and user Routes
Route::post('auth/register', [AuthController::class, 'register']);
Route::post('auth/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('users', [UserController::class, 'index']);
    Route::get('user/{user}', [UserController::class, 'show']);
    Route::get('user-profile', [UserController::class, 'showProfile']);
    Route::put('user-profile/update', [UserController::class, 'updateProfile']);
    Route::get('auth/logout', [AuthController::class, 'logout']);
});

//Categories Routes
Route::get('categories', [CategoriesController::class, 'index']);
Route::post('categories', [CategoriesController::class, 'create']);
Route::get('categories/{categories}', [CategoriesController::class, 'show']);
Route::put('categories/{category}', [CategoriesController::class, 'update']);
Route::delete('categories/{category}', [CategoriesController::class, 'destroy']);

//Products Routes
Route::get('products', [ProductsController::class, 'index']);
Route::post('products', [ProductsController::class, 'create']);
Route::get('products/{products}', [ProductsController::class, 'show']);
// Filtros
Route::get('product/panes', [ProductsController::class, 'filterPanes']);
Route::get('product/panes/campo', [ProductsController::class, 'filterCampo']);
Route::get('product/panes/molde', [ProductsController::class, 'filterMolde']);
Route::get('product/panes/semibaguette', [ProductsController::class, 'filterSemibaguette']);
Route::get('product/pizzas', [ProductsController::class, 'filterPizzas']);
Route::get('product/focaccias', [ProductsController::class, 'filterFocaccias']);
Route::get('product/combos', [ProductsController::class, 'filterCombos']);
// Búsqueda: product/search?prod=name
Route::post('product/search', [ProductsController::class, 'search']);
Route::put('products/{product}', [ProductsController::class, 'update']);
Route::delete('products/{product}', [ProductsController::class, 'destroy']);

//google login

Route::get('/auth/google/redirect',[GoogleAuthController::class, 'redirectToGoogle'])->name('login.google');
Route::get('/auth/google/callback',[GoogleAuthController::class, 'handleGoogleCallback']);
Route::get('/auth/google/url',[GoogleAuthController::class, 'getGoogleLoginUrl']);

Route::middleware('auth:sanctum')->group(function () {
    //Favorites Routes
    Route::get('favorites', [FavoritesController::class, 'index']);
    Route::post('favorites', [FavoritesController::class, 'checkFavorite']);
    Route::get('favorites/user', [FavoritesController::class, 'showbyUser']);

    //Review Routes
    Route::get('reviews', [ReviewsController::class, 'index']);
    Route::post('reviews', [ReviewsController::class, 'store']);
    Route::get('reviews/{reviews}', [ReviewsController::class, 'show']);
    Route::get('review-product/{reviews}', [ReviewsController::class, 'showbyProduct']);
    Route::put('reviews/{reviews}', [ReviewsController::class, 'updatebyUser']);

    //Cart Routes

    Route::get('cart', [CartController::class, 'index']);
    Route::post('cart/add/{productId}', [CartController::class, 'addToCart']);
    Route::post('cart/remove/{productId}', [CartController::class, 'removeFromCart']);
    Route::post('cart/clear', [CartController::class, 'clearCart']);
    Route::post('/cart/checkout', [CartController::class, 'checkout'])->middleware('auth');

    //Orders Routes

    Route::get('/orders', [OrdersController::class, 'index']);
    Route::post('/orders', [OrdersController::class, 'store']); //no esta en el controler
    Route::get('/orders/{id}', [OrdersController::class, 'show']);
    Route::put('/orders/{id}', [OrdersController::class, 'update']);
    Route::delete('/orders/{id}', [OrdersController::class, 'destroy']);

    Route::post('orders', [OrdersController::class, 'create']);
    Route::get('orders/user', [OrdersController::class, 'showbyUser']);
    Route::put('orders/{orders}', [OrdersController::class, 'updateStatus']);

    //OrderDetails Routes
    Route::get('/orderdetails', [OrdersDetailController::class, 'index']);
    Route::post('/orderdetails', [OrdersDetailController::class, 'store']);
    Route::get('/orderdetails/{id}', [OrdersDetailController::class, 'show']);
    Route::put('/orderdetails/{id}', [OrdersDetailController::class, 'update']);
    Route::delete('/orderdetails/{id}', [OrdersDetailController::class, 'destroy']);
});
