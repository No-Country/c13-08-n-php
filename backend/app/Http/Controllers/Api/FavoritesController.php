<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorites;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FavoritesController extends Controller
{
    public function index()
    {
        $favorites = Favorites::join('products', 'favorites.product_id', '=', 'products.id')
        ->join('users', 'favorites.user_id', '=', 'users.id')
        ->select('favorites.id', 'users.email', 'products.nombre as product')
        ->get();
        return response([
            "status" => 200,
            "message" => "List favorites",
            "data" => $favorites
        ],200);
    }

    public function checkFavorite(Request $request, Favorites $favorites)
    {
        $query = DB::table('favorites')
        ->where('user_id', auth()->user()->id)
        ->where('product_id', $request->product_id)
        ->get();
        
        if (count($query) >= 1 && count($query) != null) {
            DB::table('favorites')->where('user_id', auth()->user()->id)
            ->where('product_id', $request->product_id)->delete();
            return response([
                "status" => 200,
                "message" => "Removed favorite successfully"
            ],200);
        } else {
            $request->validate([
                'product_id' => 'required',
            ]);
            $favorites = new Favorites([
                'user_id' => auth()->user()->id,
                'product_id' => $request->product_id
            ]);
            $favorites->save();
            return response([
                "status" => 200,
                "message" => "Check favorite successfully",
                "data" => $favorites
            ],200);
        }
    }

    public function showbyUser()
    {
        $query = Favorites::where('user_id', auth()->user()->id)
        ->get();

        if (count($query) >= 1 && count($query) != null) {
            $favorite = Favorites::join('products', 'favorites.product_id', '=', 'products.id')
            ->join('users', 'favorites.user_id', '=', 'users.id')
            ->select('favorites.id', 'users.email', 'products.nombre as product')
            ->where('favorites.user_id', auth()->user()->id)
            ->orderBy('favorites.id', 'desc')
            ->get();
            return response([
                "status" => 200,
                "message" => "List favorites of user",
                "data" => $favorite
            ],200);
        } else {
            return response([
                "status" => 200,
                "message" => "No favorites"
            ],200);
        }        
    }
}
