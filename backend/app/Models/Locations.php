<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Locations extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function street()
    {
        return $this->belongsTo(Street::class);
    }


}
