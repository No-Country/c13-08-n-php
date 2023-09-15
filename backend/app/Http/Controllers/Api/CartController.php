<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function showCart(Request $request)
    {
        $info = $request->session()->get('cart', []); 
        $cookie = $request->cookie('laravel_session');
        if (count($info) >= 1 && count($info) != null) {
            $cart = Cart::join('products', 'carts.product_id', '=', 'products.id')
            ->select('products.nombre', 'products.descripcion', 'products.imagen', 'carts.cantidad', 
            DB::raw('products.precio * carts.cantidad as total'))
            ->where('carts.token', $info['token'])
            ->get();
            
            return response([
                "status" => 200,
                "cookie" => $cookie,
                "message" => "List cart items",
                "data" => $cart
            ], 200);
        } else {
            return response([
                "status" => 200,
                "cookie" => $cookie,
                "message" => "There are no products in the cart",
            ], 200);
        }
    }

    public function addToCart(Request $request, $productId)
    {
        $rules = [
            'cantidad' => 'required',
        ];
        $validator = Validator::make($request->input(),$rules);
        if($validator->fails()){
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors()->all()
            ],400);
        }
        
        $product = Products::find($productId); // Buscar producto por id
        if (!$product) {
            return response([
                "status" => 404,
                "message" => "Product not found"
            ], 404);
        }

        $cart = $request->session()->get('cart', []); // Consultar si hay token
        $cookie = $request->cookie('laravel_session');
        if (count($cart) >= 1 && count($cart) != null) {
            // verificar si en el carrito ya está el producto
            $info = Cart::where('token', $cart['token'])
            ->where('product_id', $productId)
            ->get();            
            if (count($info) >= 1 && count($info) != null) {
                // si está, sumar la cantidad
                $quantity = DB::table('carts')
                ->selectRaw('cantidad + '.$request->cantidad.' as cantidad')
                ->where('token', $cart['token'])
                ->where('product_id', $productId)
                ->get();
                
                foreach ($quantity as $cant) {
                    // ve la cantidad
                    $price = Cart::
                    select(DB::raw('precio * '.$cant->cantidad.' as total'))
                    ->where('id', $productId)
                    ->get();
                    foreach ($price as $price) {
                        Cart::where('token', $cart['token'])
                        ->where('product_id', $productId)
                        ->update(['cantidad' => $cant->cantidad, 'precio' => $price->total]);
                    }
                }
            } else {
                // agrega cantidad
                $price = Products::
                select(DB::raw('precio * '.$request->cantidad.' as total'))
                ->where('id', $productId)
                ->get();
                foreach ($price as $price) {
                    $product = new Cart([
                        'token' => $cart['token'],
                        'product_id' => $productId,
                        'cantidad' => $request->cantidad,
                        'precio' => $price->total
                    ]);
                    $product->save();
                }
            }
            
            return response([
                "status" => 200,
                "cookie" => $cookie,
                "message" => "Added product to cart successfully"
            ], 200);
        } else {
            $token = bin2hex(random_bytes(16)); // Crea un token de sesión
            $cart = $request->session()->get('cart', [
                'token' => $token
            ]); 
            session(['cart' => $cart]); // Guardar cambios
            
            $product = new Cart([
                'token' => $cart['token'],
                'product_id' => $productId,
                'cantidad' => $request->cantidad,
            ]);
            $product->save();
            return response([
                "status" => 200,
                "cookie" => $cookie,
                "message" => "Added product to cart successfully"
            ], 200);
        }
    }

    public function removeFromCart(Request $request, $productId)
    {
        $cart = $request->session()->get('cart', []); 
        $cookie = $request->cookie('laravel_session');
        if (count($cart) >= 1 && count($cart) != null) {
            $info = DB::table('carts')
            ->where('token', $cart['token'])
            ->where('product_id', $productId)
            ->get();
            if (count($info) >= 1 && count($info) != null) {
                Cart::where('token', $cart['token'])
                ->where('product_id', $productId)
                ->delete();

                return response([
                    "status" => 200,
                    "cookie" => $cookie,
                    "message" => "Removed product from cart successfully"
                ], 200);
            } else {
                return response([
                    "status" => 200,
                    "cookie" => $cookie,
                    "message" => "There is no such id in the cart"
                ], 200);
            } 
        } else {
            return response([
                "status" => 200,
                "cookie" => $cookie,
                "message" => "There are no products in the cart"
            ], 200);
        }
    }

    public function clearCart(Request $request)
    {
        $cart = $request->session()->get('cart', []); 
        $cookie = $request->cookie('laravel_session');
        if (count($cart) >= 1 && count($cart) != null) {
            $info = DB::table('carts')
            ->where('token', $cart['token'])
            ->get();
            if (count($info) >= 1 && count($info) != null) {
                Cart::where('token', $cart['token'])
                ->delete();
            } else {
                return response([
                    "status" => 200,
                    "cookie" => $cookie,
                    "message" => "There are no products in the cart"
                ], 200);
            }  
        }

        $request->session()->forget('cart'); //Vaciar el carrito 
        return response([
            "status" => 200,
            "cookie" => $cookie,
            "message" => "Cart cleared successfully"
        ], 200);
    }
}
