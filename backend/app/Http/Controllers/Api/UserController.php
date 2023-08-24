<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::get();
        return response([
            "status" => 200,
            "message" => "List users",
            "data" => $users
        ],200);
    }

    public function show(User $user)
    {
        $user = User::where('id', $user->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $user
        ],200);
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->input());
        return response([
            "status" => 200,
            "message" => "Updated user successfully",
            "data" => $user
        ],200);
    }
}
