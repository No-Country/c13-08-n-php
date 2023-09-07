<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Orders_detail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class OrdersDetailController extends Controller
{
    public function create(Request $request)
    {
        $rules = [
            "order_id" => 'required',
            "product_id" => 'required',
            'cantidad' => 'required',
            'precio' => 'required'
        ];
        foreach ($request->data as $products) {
            $validator = Validator::make($products,$rules);
            if($validator->fails()){
                return response()->json([
                    'status' => 400,
                    'errors' => $validator->errors()->all()
                ],400);
            }
        }

        foreach ($request->data as $products) {
            $prod = DB::table('products')
            ->selectRaw('stock - '.$products['cantidad'].' as stock')
            ->where('id', $products['product_id'])
            ->get();
            
            foreach ($prod as $stock) {
                DB::table('products')
                ->where('id', $products['product_id'])
                ->update(['stock' => $stock->stock]);
            }
            
            $order = new Orders_detail([
                'order_id' => $products['order_id'],
                'products_id' => $products['product_id'],
                'cantidad' => $products['cantidad'],
                'precio' => $products['precio'],
            ]);
            $order->save();
        }

        return response([
            "status" => 200,
            "message" => "Created order detail successfully"
        ],200);
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
