<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Products::get();
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
        $product = Products::where('id', $products->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $product
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
