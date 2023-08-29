<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Products::
        join('categories', 'products.category_id', '=', 'categories.id')
        ->select('products.id', 'products.nombre', 'products.descripcion', 'products.precio', 'products.stock', 'products.imagen', 'categories.nombre as categoria')
        ->get();
        return response([
            "status" => 200,
            "message" => "List products",
            "data" => $products
        ],200);
    }

    public function create(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'descripcion' => 'required',
            'precio' => 'required',
            'stock' => 'required',
            'imagen' => 'required',
            'category_id' => 'required',
        ]);
        $product = new Products($request->input());
        $product->save();
        return response([
            "status" => 200,
            "message" => "Created product successfully",
            "data" => $product
        ],200);
    }

    public function show(Products $products)
    {
        $product = Products::
        join('categories', 'products.category_id', '=', 'categories.id')
        ->select('products.id', 'products.nombre', 'products.descripcion', 'products.precio', 'products.stock', 'products.imagen', 'categories.nombre as categoria')
        ->where('id', $products->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $product
        ],200);
    }
    
    public function filterPanes()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('category_id', 1)
        ->get();
        return response([
            "status" => 200,
            "message" => "List products",
            "data" => $products
        ],200);
    }

    public function filterPizzas()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('category_id', 2)
        ->get();
        return response([
            "status" => 200,
            "message" => "List products",
            "data" => $products
        ],200);
    }

    public function filterFocaccias()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('category_id', 3)
        ->get();
        return response([
            "status" => 200,
            "message" => "List products",
            "data" => $products
        ],200);
    }

    public function filterCombos()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('category_id', 4)
        ->get();
        return response([
            "status" => 200,
            "message" => "List products",
            "data" => $products
        ],200);
    }

    public function update(Request $request, Products $product)
    {
        $product->update($request->input());
        return response([
            "status" => 200,
            "message" => "Updated product successfully",
            "data" => $product
        ],200);
    }

    public function destroy(Products $product)
    {
        $product->delete();
        return response([
            "status" => 200,
            "message" => "Deleted product successfully"
        ],200);
    }
}
