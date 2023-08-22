<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders_detail extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'products_id',
        'Cantidad',
        'Precio',
    ];

    public function order()
    {
        return $this->belongsToMany(Orders::class);
    }

    public function product()
    {
        return $this->belongsToMany(Products::class);
    }
}
