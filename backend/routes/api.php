<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Path: routes\api.php

Route::get('/users', 'App\Http\Controllers\UserController@index');
Route::post('/users', 'App\Http\Controllers\UserController@store');
Route::get('/users/{id}', 'App\Http\Controllers\UserController@show');
Route::put('/users/{id}', 'App\Http\Controllers\UserController@update');
Route::delete('/users/{id}', 'App\Http\Controllers\UserController@destroy');

//Products Routes
Route::get('/products', 'App\Http\Controllers\ProductsController@index');
Route::post('/products', 'App\Http\Controllers\ProductsController@store');
Route::get('/products/{id}', 'App\Http\Controllers\ProductsController@show');
Route::put('/products/{id}', 'App\Http\Controllers\ProductsController@update');
Route::delete('/products/{id}', 'App\Http\Controllers\ProductsController@destroy');

//Orders Routes
Route::get('/orders', 'App\Http\Controllers\OrdersController@index');
Route::post('/orders', 'App\Http\Controllers\OrdersController@store');
Route::get('/orders/{id}', 'App\Http\Controllers\OrdersController@show');
Route::put('/orders/{id}', 'App\Http\Controllers\OrdersController@update');
Route::delete('/orders/{id}', 'App\Http\Controllers\OrdersController@destroy');

//OrderDetails Routes
Route::get('/orderdetails', 'App\Http\Controllers\OrdersDetailController@index');
Route::post('/orderdetails', 'App\Http\Controllers\OrdersDetailController@store');
Route::get('/orderdetails/{id}', 'App\Http\Controllers\OrdersDetailController@show');
Route::put('/orderdetails/{id}', 'App\Http\Controllers\OrdersDetailController@update');
Route::delete('/orderdetails/{id}', 'App\Http\Controllers\OrdersDetailController@destroy');
