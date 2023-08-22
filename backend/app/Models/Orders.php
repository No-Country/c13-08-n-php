<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    public function products()
    {
        return $this->belongsToMany(Products::class);
    }

    public function users()
    {
        return $this->belongsToMany(Users::class);
    }
}
