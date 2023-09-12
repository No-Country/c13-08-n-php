<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'nombre',
        'apellido',
        'email',
        'contrasena',
        // 'google_id',
        // 'google_token',
    ];

    public static function updateOrCreateGoogleUser($googleUser)
    {
        return static::updateOrCreate(
            ['google_id' => $googleUser->id],
            [
                'nombre' => $googleUser->name,
                'email' => $googleUser->email,
                'google_token' => $googleUser->token,
            ]
        );
    }

    public function cart()
    {
        return $this->hasOne(Cart::class);
    }

    public function orders()
    {
        return $this->hasMany(Orders::class);
    }

    public function locations()
    {
        return $this->hasMany(Locations::class);
    }

    public function street()
    {
        return $this->hasMany(Street::class);
    }

    public function reviews()
    {
        return $this->belongsToMany(Reviews::class);
    }

}
