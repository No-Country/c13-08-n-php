<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;

    public function products()
    {
        return $this->belongsToMany(Products::class);
    }

    protected $fillable = [
        'Nombre',
        'Descripcion',
    ];

}
