<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use App\Models\Products;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Tests\Integration\Queue\Order;

class CartController extends Controller
{
    public function index(Request $request)
    {
        global $request;
        $cart = $request->session()->get('cart', []);

        return response([
            "status" => 200,
            "message" => "List cart items",
            "data" => $cart
        ], 200);
    }

    public function addToCart(Request $request, $productId)
    {

        $product = Products::find($productId); // Buscar producto por id

        if (!$product) {
            return response([
                "status" => 404,
                "message" => "Product not found"
            ], 404);
        }


        $cart = $request->session()->get('cart', []); // Buscar Carrito


        $cart[] = $product; // Agregar producto


        $request->session()->put('cart', $cart); // Guardar cambios

        return response([
            "status" => 200,
            "message" => "Added product to cart successfully",
            "data" => $product
        ], 200);
    }

    public function removeFromCart(Request $request, $productId)
    {

        $cart = $request->session()->get('cart', []); //buscar el carrito


        $cart = array_filter($cart, function ($item) use ($productId) { //Buscar y eliminar
            return $item->id !== $productId;
        });

        $request->session()->put('cart', $cart); //guardar cambios

        return response([
            "status" => 200,
            "message" => "Removed product from cart successfully"
        ], 200);
    }

    public function clearCart(Request $request)
    {
        $request->session()->forget('cart'); //Vaciar el carrito

        return response([
            "status" => 200,
            "message" => "Cart cleared successfully"
        ], 200);
    }

    public function checkout(Request $request)
    {

        if (!auth()->check()) {
            return response([
                "status" => 401,
                "message" => "You must be logged in to complete the checkout"
            ], 401);
        }


        $cart = $request->session()->get('cart', []);


        if (empty($cart)) {
            return response([
                "status" => 400,
                "message" => "Your cart is empty. Add items to your cart before checking out."
            ], 400);
        }

        //proceso de compra
        try{
            // Iniciar una transacción de base de datos
            DB::beginTransaction();

            //un nuevo pedido en la base de datos
            $order = new Order();
            $order->user_id = auth()->user()->id; // Asociar el pedido al usuario autenticado
            $order->save();

            // Asociar productos del carrito al pedido
            foreach ($cart as $item) {
                $order->products()->attach($item['product_id'], ['cantidad' => $item['cantidad']]);
            }

            DB::commit();
        }catch (Exception $e) {
            echo "Se produjo una excepción: " . $e->getMessage();
        }

        $request->session()->forget('cart');

        return response([
            "status" => 200,
            "message" => "Checkout successful. Your order has been placed."
        ], 200);
    }

}
