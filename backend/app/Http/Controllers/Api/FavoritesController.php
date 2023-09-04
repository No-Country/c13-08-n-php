<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorites;
use Illuminate\Http\Request;

class FavoritesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $favorites = Favorites::select('id', 'user_id', 'product_id')
        ->get();
        return response([
            "status" => 200,
            "message" => "List favorites",
            "data" => $favorites
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $request->validate([
            'user_id' => 'request',
            'product_id' => 'request',
        ]);
        $favorites = new Favorites($request->input());
        $favorites->save();
        return response([
            "status" => 200,
            "message" => "Created favorite successfully",
            "data" => $favorites
        ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Favorites $favorites)
    {
        $favorite = Favorites::select('id', 'user_id', 'product_id')
        ->where('id', $favorites->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $favorite
        ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Favorites $favorites)
    {
        $favorites->update($request->input());
        return response([
            "status" => 200,
            "message" => "Updated favorite successfully",
            "data" => $favorites
        ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Favorites $favorites)
    {
        $favorites->delete();
        return response([
            "status" => 200,
            "message" => "Deleted favorite successfully"
        ],200);
    }
}
