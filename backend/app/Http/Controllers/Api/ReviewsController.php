<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Reviews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewsController extends Controller
{
    public function index()
    {
        $reviews = Reviews::
        join('products', 'reviews.product_id', '=', 'products.id')
        ->join('users', 'reviews.user_id', '=', 'users.id')
        ->select('reviews.id', 'users.nombre', 'users.apellido', 'products.nombre as product', 'reviews.rating', 'reviews.comentario')
        ->get();
        return response([
            "status" => 200,
            "message" => "Reviews",
            "data" => $reviews
        ],200);
    }

    public function store(Request $request)
    {
        $request->validate([
            'product_id' => 'required',
            'rating' => 'required',
            'comentario' => 'required',
        ]);
        $reviews = new Reviews([
            'product_id' => $request->product_id,
            'user_id' => auth()->user()->id, 
            'rating' => $request->rating,
            'comentario' => $request->comentario,
        ]);
        $reviews->save();
        return response([
            "status" => 200,
            "message" => "Created review successfully",
            "data" => $reviews
        ],200);
    }

    public function show(Reviews $reviews)
    {
        $review = Reviews::
        join('products', 'reviews.product_id', '=', 'products.id')
        ->join('users', 'reviews.user_id', '=', 'users.id')
        ->select('reviews.id', 'users.nombre', 'users.apellido', 'products.nombre as product', 'reviews.rating', 'reviews.comentario')
        ->where('reviews.id', $reviews->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $review
        ],200);
    }

    public function showbyProduct($id)
    {
        $query = DB::table('reviews')->select('product_id')
        ->where('product_id', $id)
        ->get();
        
        if (count($query) >= 1) {
            $reviews = Reviews::
            join('products', 'reviews.product_id', '=', 'products.id')
            ->join('users', 'reviews.user_id', '=', 'users.id')
            ->select('products.nombre as product', 'reviews.id', 'users.nombre', 'users.apellido', 'reviews.rating', 'reviews.comentario')
            ->where('reviews.product_id', $id)
            ->orderBy('reviews.id', 'desc')
            ->get();
            return response([
                "status" => 200,
                "message" => "List reviews",
                "data" => $reviews
            ],200);
        } else {
            return response([
                "status" => 200,
                "message" => "No reviews"
            ],200);
        }
    }

    public function updatebyUser(Request $request, Reviews $reviews)
    {
        $query = DB::table('reviews')->select('id', 'user_id', 'product_id')
        ->where('id', $reviews->id)
        ->where('user_id', auth()->user()->id)
        ->get();

        if (count($query) >= 1) {
            $reviews->update($request->input());
            return response([
                "status" => 200,
                "message" => "Updated review successfully",
                "data" => $reviews
            ],200);
        } else {
            return response([
                "status" => 200,
                "message" => "Action unauthorized"
            ],200);
        }
    }
}
