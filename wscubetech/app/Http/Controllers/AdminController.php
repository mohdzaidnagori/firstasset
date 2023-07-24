<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($user->is_admin) {
                $token = $user->createToken('admin-token', ['admin']);

                return response()->json([
                    'status'=> 'success',
                    'message' => 'Login Success',
                    'token' => $token->plainTextToken,
                    'token_type' => 'Bearer',
                ],200);
            }
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }
    public function  logout()
    {
        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout Success',
            'status' => 'success'
        ], 200);
    }
}
