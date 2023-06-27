<?php

namespace App\Http\Controllers;

use App\Models\BrokerFinancial;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class BrokerFinancialController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'contact_person' => 'required',
            'phone_no' => 'required|string|size:13|unique:users,phone_no',
            'password' => 'required|confirmed',
            'interested_in' => 'required|array',
            'interested_in.*' => 'string|in:Fractional,Property Management,Sole selling projects with FIRST/ASSET',
            'who_you_are' => 'required|array',
            'who_you_are.*' => 'string|in:Mutual Fund Distributors,IFA,Wealth Managers,Insurance Agents',
            'no_of_clients' => 'required|string|in:<50,50-100,100-200,>200',
            'assets_under_management' => 'required|string|in:<50cr,50cr-100cr,100cr-200cr,>200cr',
        ]);
        if (User::where('email', $request->email)->first()) {
            return response([
                'message' => 'Email already exists',
                'status' => 'failed'
            ], 200);
        }
        $user  = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'contact_person' => $request->contact_person,
            'phone_no' => $request->phone_no,
            'password' => Hash::make($request->password),
        ]);
        $brokerfinancial = BrokerFinancial::create([
            'user_id' => $user->id,
            'interested_in' => implode(",", $request->interested_in),
            'who_you_are' => implode(",",$request->who_you_are),
            'no_of_clients' => $request->no_of_clients,
            'assets_under_management' => $request->assets_under_management,
        ]);
        
        $user->brokerfinancial()->save($brokerfinancial);
        $token = $user->createToken($request->email)->plainTextToken;
        

       
        return response([
            'data' => $user,
            'token' => $token,
            'message' => 'Register Success',
            'status' => 'success'
        ], 200);
    }
}
