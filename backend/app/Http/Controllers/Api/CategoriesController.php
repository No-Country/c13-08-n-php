<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Categories::get();
        return response([
            "status" => 200,
            "message" => "List categories",
            "data" => $categories
        ],200);
    }

    public function create(Request $request)
    {
        $request->validate([
            'Nombre' => 'request',
            'Descripcion' => 'request',
        ]);
        $category = new Categories($request->input());
        $category->save();
        return response([
            "status" => 200,
            "message" => "Created category successfully",
            "data" => $category
        ],200);
    }

    public function show(Categories $categories)
    {
        $category = Categories::where('id', $categories->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $category
        ],200);
    }

    public function update(Request $request, Categories $category)
    {
        $category->update($request->input());
        return response([
            "status" => 200,
            "message" => "Updated category successfully",
            "data" => $category
        ],200);
    }

    public function destroy(Categories $category)
    {
        $category->delete();
        return response([
            "status" => 200,
            "message" => "Deleted category successfully"
        ],200);
    }
}
