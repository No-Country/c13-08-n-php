<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $rules = [
            'nombre' => 'required|string|max:150',
            'apellido' => 'required|string|max:150',
            'correo' => 'required|email|unique:users',
            'contrasena' => 'required|string|min:8'
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
            'correo' => $request->correo,
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
            'correo' => 'required|string|email|max:100',
            'contrasena' => 'required|string'
        ];
        $validator = Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()->all()
            ],400);
        }
        if(!Auth::attempt($request->only('correo','contrasena'))){
            return response()->json([
                'status' => false,
                'errors' => ['Action unauthorized']
            ],401);
        }
        $user = User::where('correo',$request->correo)->first();
        return response()->json([
            'status' => true,
            'message' => 'User logged in successfully',
            'data' => $user,
            'token' => $user->createToken('API_TOKEN')->plainTextToken
        ],200);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return response()->json([
            'status' => true,
            'message' => 'User logged out successfully'
        ],200);
    }
}
