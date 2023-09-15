<?php
  
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Orders_detail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersDetailController extends Controller
{
    public function checkout(Request $request)
    {
        $cart = $request->session()->get('cart', []);
        if (count($cart) >= 1 && count($cart) != null) {
            // verificar si en el carrito ya está el producto
            $info = DB::table('carts')
            ->select('*')
            ->where('token', $cart['token'])
            ->get();
            if (count($info) >= 1 && count($info) != null) {
                // si está, verifica si hay orden
                $user_id = DB::table('orders')
                ->select(DB::raw('MAX(id) as maxim'))
                ->where('user_id', auth()->user()->id)
                ->where('estado', 'pendiente')
                ->get();
        
                if (count($user_id) >= 1 && count($user_id) != null) {
                    foreach ($user_id as $user_id) {
                        $usuario = $user_id->maxim;
                    }
                    foreach ($info as $products) {
                        $prod = DB::table('products')
                        ->select(DB::raw('stock - '.$products->cantidad.' as stock'))
                        ->where('id', $products->product_id)
                        ->get();
                        
                        foreach ($prod as $stock) {
                            DB::table('products')
                            ->where('id', $products->product_id)
                            ->update(['stock' => $stock->stock]);
                        }
                        
                        $order = new Orders_detail([
                            'order_id' => $usuario,
                            'products_id' => $products->product_id,
                            'cantidad' => $products->cantidad,
                            'precio' => $products->precio,
                        ]);
                        $order->save();
                    }

                    $request->session()->forget('cart'); //Vaciar el carrito 

                    return response([
                        "status" => 200,
                        "message" => "Created order detail successfully"
                    ],200);
                } else {
                    return response([
                        "status" => 200,
                        "message" => "Create a purchase order"
                    ], 200);
                }
            } else {
                return response([
                    "status" => 200,
                    "message" => "There are no products in the cart"
                ], 200);
            }
            
        } else {
            return response([
                "status" => 200,
                "message" => "No info in the cart"
            ], 200);
        }
    }

    public function showbyOrder(Orders_detail $details)
    {
        $orderdetails = Orders_detail::join('products', 'orders_details.products_id', '=', 'products.id')
        ->select('orders_details.order_id', 'products.nombre', 'orders_details.cantidad', 'orders_details.precio')
        ->where('orders_details.order_id', $details->id)
        ->get();
        return response([
            "status" => 200,
            "message" => "Order details list",
            "data" => $orderdetails
        ],200);
    }
}
