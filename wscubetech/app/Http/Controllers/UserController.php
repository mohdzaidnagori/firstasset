<?php

namespace App\Http\Controllers;

use App\Models\Broker;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\ClientBroker;
use App\Models\BrokerFinancial;
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
             $token = $user->createToken($request->email)->plainTextToken;
            if ($user->is_verified == 1 && $user->is_mobile_verified == 1) {
                return response([
                    'token' => $token,
                    'message' => 'Login Success',
                    'status' => 'success'
                ], 201);
            } else {
                return response([
                    'token' => $token,
                    'message' => 'Please verify your email address and mobile number',
                    'status' => 'warn'
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
    public function brokerClinetList($type)
    {
        $loggedUser = auth()->user();
        $userIds = [];

        if ($type === 'Broker') {
            $broker = Broker::where('user_id',$loggedUser->id)->first();
            $clients = ClientBroker::where('broker_id', $broker->id)->get();
        } elseif ($type === 'BrokerFinancial') {
            $broker = BrokerFinancial::where('user_id',$loggedUser->id)->first();
            $clients = ClientBroker::where('broker_financial_id', $loggedUser->id)->get();
        } else {
             //Handle the case when $type is neither 'Broker' nor 'BrokerFinancial'
            return [];
        }

        // Extract user_id values using pluck
        $userIds = $clients->pluck('user_id')->toArray();

        // Query the User model to get user data based on user_ids
       $users = User::whereIn('id', $userIds)->get();

        return response([
            'client' => $clients,
            'message' => 'data load successfully',
            'status' => 'success'
        ], 200);
    }
    
}
