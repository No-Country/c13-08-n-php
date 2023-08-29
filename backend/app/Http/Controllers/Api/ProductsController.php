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
        ->paginate(8);
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
        ->where('products.id', $products->id)
        ->paginate(8);
        return response([
            "status" => 200,
            "data" => $product
        ],200);
    }
    
    public function filterPanes()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('category_id', 1)
        ->paginate(8);
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
        ->paginate(8);
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
        ->paginate(8);
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
        ->paginate(8);
        return response([
            "status" => 200,
            "message" => "List products",
            "data" => $products
        ],200);
    }

    public function filterCampo()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('nombre', 'LIKE', 'Campo%')
        ->paginate(8);
        return response([
            "status" => 200,
            "message" => "Products campo",
            "data" => $products
        ]);
    }

    public function filterMolde()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('nombre', 'LIKE', 'Molde%')
        ->paginate(8);
        return response([
            "status" => 200,
            "message" => "Products molde",
            "data" => $products
        ]);
    }

    public function filterSemibaguette()
    {
        $products = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
        ->where('nombre', 'LIKE', 'Semi%')
        ->paginate(8);
        return response([
            "status" => 200,
            "message" => "Products semibaguette",
            "data" => $products
        ]);
    }

    public function search(Request $request)
    {
        if ($request->prod) {
            $product = Products::select('id', 'nombre', 'descripcion', 'precio', 'stock', 'imagen')
            ->where('nombre', 'LIKE', '%'.$request->prod.'%')
            ->paginate(8);
            return response([
                "status" => 200,
                "data" => $product
            ]);
        } else {
            return response([
                "status" => 400,
                "message" => "Enter a valid parameter"
            ]);
        }
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
