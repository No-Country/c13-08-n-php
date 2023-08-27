<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'estado',
        'direccion',
        'fecha_hora',
    ];

    public function products()
    {
        return $this->belongsToMany(Products::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
