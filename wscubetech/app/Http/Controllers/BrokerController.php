<?php

namespace App\Http\Controllers;

use App\Models\Broker;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class BrokerController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'contact_person' => 'required',
            'phone_no' => 'required|string|size:13|unique:users,phone_no',
            'password' => 'required|confirmed',
            'interested_in' => 'required|array',
            'interested_in.*' => 'string|in:Fractional,Property Management,Sole selling projects with FIRST/ASSET',
            'state' => 'required|string',
            'city' => 'required|string',
            'locality' => 'required|string',
            'property_types' => 'required|array',
            'property_types.*' => 'string|in:Commercial Space,Residential Apartment,Warehouses,Villa/Farm House,Agriculture Land/Farm Land',
            'ticket_size_sale' => 'required|string|in:<50L,50L-2cr,2cr-5cr,>5cr',
            'ticket_size_lease' => 'required|string|in:<25K,25K-50K,50K-1L,>1L',
            'transactional_value' => 'required|string|in:5cr-10cr,10cr-25cr,25cr-100cr,>100cr',
            'fractional_investment_size' => 'required|string|in:Up to 1.5cr,1.5cr-2.5cr,2.5cr-5cr,>5cr'
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }
    
       
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
        $broker = Broker::create([
            'user_id' => $user->id,
            'state' => $request->state,
            'city' => $request->city,
            'locality' => $request->locality,
            'interested_in' => implode(",", $request->interested_in),
            'property_types' => implode(",", $request->property_types),
            'ticket_size_sale' => $request->ticket_size_sale,
            'ticket_size_lease' => $request->ticket_size_lease,
            'transactional_value' => $request->transactional_value,
            'fractional_investment_size' => $request->fractional_investment_size,
        ]);
        
        $user->broker()->save($broker);
        $token = $user->createToken($request->email)->plainTextToken;
        

       
        return response([
            'data' => $user,
            'token' => $token,
            'message' => 'Register Success',
            'status' => 'success'
        ], 200);
    }
}
