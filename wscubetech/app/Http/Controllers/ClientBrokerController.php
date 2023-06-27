<?php

namespace App\Http\Controllers;

use App\Models\ClientBroker;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ClientBrokerController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone_no' => 'required|string|size:13|unique:users,phone_no',
            'croreAmount' => 'required|integer',
            'lakhAmount' => 'required|integer|min:50',
            'client_int_property_m_service' => 'required|boolean',
            'client_int_soil_s_mandated_project' => 'required|boolean',
        ]);
        if (User::where('email', $request->email)->first()) {
            return response([
                'message' => 'Email already exists',
                'status' => 'failed'
            ], 200);
        }
        $password = Str::random(8);
        $user  = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_no' => $request->phone_no,
            'password' => Hash::make($password),
        ]);
        $clientbroker = ClientBroker::create([
            'user_id' => $user->id,
            'croreAmount' => $request->croreAmount,
            'lakhAmount' => $request->lakhAmount,
            'client_int_property_m_service' => $request->client_int_property_m_service,
            'client_int_soil_s_mandated_project' => $request->client_int_soil_s_mandated_project,
            'broker_id' => $request->broker_id,
        ]);
        
        $user->clientbroker()->save($clientbroker);
        $token = $user->createToken($request->email)->plainTextToken;
        

       
        return response([
            'pass' => $password,
            'data' => $user,
            'token' => $token,
            'message' => 'Register Success',
            'status' => 'success'
        ], 200);
    }

    public function registerfinancial(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone_no' => 'required|string|size:13|unique:users,phone_no',
            'croreAmount' => 'required|integer',
            'lakhAmount' => 'required|integer|min:50',
            'client_int_property_m_service' => 'required|boolean',
            'client_int_soil_s_mandated_project' => 'required|boolean',
        ]);
        if (User::where('email', $request->email)->first()) {
            return response([
                'message' => 'Email already exists',
                'status' => 'failed'
            ], 200);
        }
        $password = Str::random(8);
        $user  = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_no' => $request->phone_no,
            'password' => Hash::make($password),
        ]);
        $clientbroker = ClientBroker::create([
            'user_id' => $user->id,
            'croreAmount' => $request->croreAmount,
            'lakhAmount' => $request->lakhAmount,
            'client_int_property_m_service' => $request->client_int_property_m_service,
            'client_int_soil_s_mandated_project' => $request->client_int_soil_s_mandated_project,
            'broker_financial_id' => $request->broker_financial_id,
        ]);
        
        $user->clientbroker()->save($clientbroker);
        $token = $user->createToken($request->email)->plainTextToken;
        

       
        return response([
            'pass' => $password,
            'data' => $user,
            'token' => $token,
            'message' => 'Register Success',
            'status' => 'success'
        ], 200);
    }

}
