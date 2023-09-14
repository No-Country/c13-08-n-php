<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Orders;
use App\Models\Products;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class CartController extends Controller
{
    public function showCart(Request $request)
    {
        $info = session()->get('cart', []); 

        if (count($info) >= 1 && count($info) != null) {
            $cart = Cart::join('products', 'carts.product_id', '=', 'products.id')
            ->select('products.nombre', 'products.descripcion', 'products.imagen', 'carts.cantidad', 
            DB::raw('products.precio * carts.cantidad as total'))
            ->where('carts.token', $info['token'])
            ->get();
            
            return response([
                "status" => 200,
                "message" => "List cart items",
                "data" => $cart
            ], 200);
        } else {
            return response([
                "status" => 200,
                "message" => "There are no products in the cart"
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
                    Cart::where('token', $cart['token'])
                    ->where('product_id', $productId)
                    ->update(['cantidad' => $cant->cantidad]);
                }
            } else {
                // si no está, se agrega
                $product = new Cart([
                    'token' => $cart['token'],
                    'product_id' => $productId,
                    'cantidad' => $request->cantidad,
                ]);
                $product->save();
            }
            
            return response([
                "status" => 200,
                "message" => "Added product to cart successfully"
            ], 200);
        } else {
            $token = bin2hex(random_bytes(16)); // Crea un token de sesión
            $cart = $request->session()->get('cart', [
                'token' => $token
            ]); 
            $request->session()->put('cart', $cart); // Guardar cambios

            $product = new Cart([
                'token' => $cart['token'],
                'product_id' => $productId,
                'cantidad' => $request->cantidad,
            ]);
            $product->save();
            return response([
                "status" => 200,
                "message" => "Added product to cart successfully"
            ], 200);
        }
    }

    public function removeFromCart(Request $request, $productId)
    {
        $cart = $request->session()->get('cart', []); 
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
                    "message" => "Removed product from cart successfully"
                ], 200);
            } else {
                return response([
                    "status" => 200,
                    "message" => "There is no such id in the cart"
                ], 200);
            } 
        } else {
            return response([
                "status" => 200,
                "message" => "There are no products in the cart"
            ], 200);
        }
    }

    public function clearCart(Request $request)
    {
        $cart = $request->session()->get('cart', []); 
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
                    "message" => "There are no products in the cart"
                ], 200);
            }  
        }

        $request->session()->forget('cart'); //Vaciar el carrito 
        return response([
            "status" => 200,
            "message" => "Cart cleared successfully"
        ], 200);
    }

    // public function checkout(Request $request)
    // {
    //     if (!auth()->check()) {
    //         return response([
    //             "status" => 401,
    //             "message" => "You must be logged in to complete the checkout"
    //         ], 401);
    //     }

    //     $cart = $request->session()->get('cart', []);

    //     if (empty($cart)) {
    //         return response([
    //             "status" => 400,
    //             "message" => "Your cart is empty. Add items to your cart before checking out."
    //         ], 400);
    //     }

    //     //proceso de compra
    //     try{
    //         // Iniciar una transacción de base de datos
    //         DB::beginTransaction();

    //         //un nuevo pedido en la base de datos
    //         $order = new Orders();
    //         $order->user_id = auth()->user()->id; // Asociar el pedido al usuario autenticado
    //         $order->save();

    //         // Asociar productos del carrito al pedido
    //         foreach ($cart as $item) {
    //             $order->products()->attach($item['product_id'], ['cantidad' => $item['cantidad']]);
    //         }

    //         DB::commit();
    //     }catch (Exception $e) {
    //         echo "Se produjo una excepción: " . $e->getMessage();
    //     }

    //     $request->session()->forget('cart');

    //     return response([
    //         "status" => 200,
    //         "message" => "Checkout successful. Your order has been placed."
    //     ], 200);
    // }
}
