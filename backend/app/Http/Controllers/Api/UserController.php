<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select('id', 'nombre', 'apellido', 'email', 'localidad', 'calle')
        ->get();
        return response([
            "status" => 200,
            "message" => "List users",
            "data" => $users
        ],200);
    }

    public function show(User $user)
    {
        $user = User::select('id', 'nombre', 'apellido', 'email', 'localidad', 'calle')
        ->where('id', $user->id)
        ->get();
        return response([
            "status" => 200,
            "data" => $user
        ],200);
    }

    public function showProfile()
    {
        $user = User::select('id', 'nombre', 'apellido', 'email', 'localidad', 'calle')
        ->where('id', auth()->user()->id)
        ->get();
        return response([
            "status" => 200,
            "message" => "User profile",
            "data" => $user
        ],200);
    }

    public function updateProfile(Request $request, User $user)
    {
        $user->where('id', auth()->user()->id)->update($request->input()); 
        
        return response([
            "status" => 200,
            "message" => "Updated user successfully"
        ],200);
    }
}
