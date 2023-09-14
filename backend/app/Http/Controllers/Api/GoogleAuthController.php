<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;

class GoogleAuthController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();
        $user = User::updateOrCreate(
            ['google_id' => $googleUser->id],
            [
                'nombre' => $googleUser->name,
                'apellido' => $googleUser->name,
                'email' => $googleUser->email,
                'google_token' => $googleUser->token,
            ]
        );
        Auth::login($user);
        return redirect('/'); // redirección
    }

    public function getGoogleLoginUrl()
    {
        $url = Socialite::driver('google')->stateless()->redirect()->getTargetUrl();
        return response()->json(['url' => $url]);
    }
}
