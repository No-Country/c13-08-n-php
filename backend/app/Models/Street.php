<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Street extends Model
{
    use HasFactory;

    public function locations()
    {
        return $this->hasMany(Locations::class);
    }

}
