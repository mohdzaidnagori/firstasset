<?php

namespace App\Http\Controllers;

use App\Models\Broker;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{


    public function  login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            if ($user->is_verified == 1 && $user->is_mobile_verified == 1) {
                $token = $user->createToken($request->email)->plainTextToken;
                return response([
                    'token' => $token,
                    'message' => 'Login Success',
                    'status' => 'success'
                ], 201);
            } else {
                return response([
                    'message' => 'Please verify your email address and mobile number',
                    'status' => 'failed'
                ], 201);
            }
        }
        return response([
            'message' => 'Your email and password is incorrect',
            'status' => 'failed'
        ], 401);
    }

    public function  logout()
    {

        auth()->user()->tokens()->delete();
        return response([
            'message' => 'Logout Success',
            'status' => 'success'
        ], 200);
    }
    public function loggeduser()
    {
        $loggeduser = auth()->user();
        $userData = null;

    if ($loggeduser->clientuser !== null) {
        $userType = 'ClientUser';
        $userData = $loggeduser->clientuser;
    } elseif ($loggeduser->clientbroker !== null) {
        $userType = 'ClientBroker';
        $userData = $loggeduser->clientbroker;
    } elseif ($loggeduser->brokerfinancial !== null) {
        $userType = 'BrokerFinancial';
        $userData = $loggeduser->brokerfinancial;
    } elseif ($loggeduser->broker !== null) {
        $userType = 'Broker';
        $userData = $loggeduser->broker;
    }

    return response([
        'data' => $loggeduser,
        'user_type' => $userType,
        'user_data' => $userData,
        'message' => 'Logged in user data',
        'status' => 'success'
    ], 200);
    }
}
