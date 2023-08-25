<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    public function cart()
    {
        return $this->belongsToMany(Cart::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Orders::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Categories::class);
    }

}
