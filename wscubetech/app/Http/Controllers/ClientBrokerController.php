<?php

namespace App\Http\Controllers;

use App\Models\ClientBroker;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ClientBrokerController extends Controller
{
   

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone_no' => 'required|string|unique:users,phone_no',
            'croreAmount' => 'required|integer',
            'address' => 'required|string',
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
            'address' => $request->address,
            'password' => Hash::make($password),
        ]);
        $clientbroker = ClientBroker::create([
            'user_id' => $user->id,
            'croreAmount' => $request->croreAmount,
            'lakhAmount' => $request->lakhAmount,
            'client_int_property_m_service' => $request->client_int_property_m_service,
            'client_int_soil_s_mandated_project' => $request->client_int_soil_s_mandated_project,
            $request->brokers_type => $request->id_broker_or_financial
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
    public function sendClientCredential()
    {
        $loggeduser = auth()->user();
        $data['email'] = $loggeduser->email;
        Mail::send('reset',['data'=>$data],function($message) use ($data){
            $message->to($data['email']);
        });
        return response([
            'msg' => 'Please check Your email and login Your account',
            'status' => 'success'
        ], 200);
    }
}
