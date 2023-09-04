<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Orders;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    public function create()
    {
        $query = DB::table('users')
        ->select('id', 'localidad', 'calle')
        ->where('id', auth()->user()->id)
        ->get();

        foreach ($query as $user) {
            $locality = $user->localidad;
            $calle = $user->calle;
        }
        
        if ($locality != null && $calle != null) {
            $orders = new Orders([
                'user_id' => auth()->user()->id, 
                'direccion' => $calle,
                'fecha_hora' => now('America/Argentina/Buenos_Aires'),
            ]);
            $orders->save();
            return response([
                "status" => 200,
                "message" => "Created orders successfully",
                "data" => $orders
            ],200);
        } else {
            return response([
                "status" => 200,
                "message" => "Add a new address"
            ],200);
        }
    }

    public function showbyUser()
    {
        $query = Orders::where('user_id', auth()->user()->id)
        ->get();
        
        if (count($query) >= 1 && count($query) != null) {
            $orders = Orders::join('users', 'orders.user_id', '=', 'users.id')
            ->select('orders.id', 'users.nombre', 'users.apellido', 'users.email', 'orders.estado', 'orders.direccion', 'orders.fecha_hora')
            ->where('orders.user_id', auth()->user()->id)
            ->orderBy('orders.id', 'desc')
            ->get();
            return response([
                "status" => 200,
                "message" => "List orders of user",
                "data" => $orders
            ],200);
        } else {
            return response([
                "status" => 200,
                "message" => "No orders"
            ],200);
        }
    }

    public function updateStatus(Orders $orders)
    {
        if ($orders->estado == 'pendiente') {
            $orders->update(['estado' => 'entregado']);
            return response([
                "status" => 200,
                "message" => "Status entregado"
            ],200);
        } else {
            $orders->update(['estado' => 'pendiente']);
            return response([
                "status" => 200,
                "message" => "Status pendiente"
            ],200);
        }
    }
}
