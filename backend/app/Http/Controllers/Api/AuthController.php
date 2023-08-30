<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $rules = [
            'nombre' => 'required|string|max:150',
            'apellido' => 'required|string|max:150',
            'email' => 'required|email|unique:users',
            'contrasena' => 'required|string|min:8|confirmed'
        ];
        $validator = Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ],400);
        }
        $user = User::create([
            'nombre' => $request->nombre, 
            'apellido' => $request->apellido,
            'email' => $request->email,
            'contrasena' => Hash::make($request->contrasena)
        ]);
        return response()->json([
            'status' => true,
            'message' => 'User created successfully',
            'token' => $user->createToken('API_TOKEN')->plainTextToken
        ],200);
    }
    
    public function login(Request $request)
    {
        $rules = [
            'email' => 'required|string|email|max:255',
            'contrasena' => 'required|string'
        ];
        $validator = Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ],400);
        }

        $user = User::select('id', 'nombre', 'apellido', 'email', 'contrasena')
        ->where('email', '=', $request->email)->first();

        if(isset($user->id)){
            if(Hash::check($request->contrasena, $user->contrasena)){
                return response()->json([
                    'status' => true,
                    'message' => 'User logged in successfully',
                    'data' => $user,
                    'token' => $user->createToken('API_TOKEN')->plainTextToken
                ],200);
            } else {
                return response()->json([
                    'status' => false,
                    'message' => 'The password is incorrect',
                ],401);
            }
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Unregistered user',
            ],401);
        }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => true,
            'message' => 'User logged out successfully'
        ],200);
    }
}
