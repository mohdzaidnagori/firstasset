<?php

namespace App\Http\Controllers;

use Twilio\Rest\Client;
use App\Models\MobileVerification;
use App\Models\User;
use Exception;

use Illuminate\Http\Request;

class MobileVerificationController extends Controller
{
    public function sendOtp($user)
    {
        $otp = rand(100000, 999999);
        $time = time();

        MobileVerification::updateOrCreate(
            ['phone_no' => $user->phone_no],
            [
                'phone_no' => $user->phone_no,
                'otp' => $otp,
                'created_at' => $time
            ]
        );
        $mobileVerification = new MobileVerification();
        $mobileVerification->sendSMS($user->phone_no,$otp);
    }

    public function verification()
    {
        $loggeduser = auth()->user();
        $user = User::where('id', $loggeduser->id)->first();
        if (!$user || $user->is_mobile_verified == 1) {
            return response([
                'message' => 'you are already verify your mobile number',
                'status' => 'failed'
            ], 200);
        }

        $this->sendOtp($user); //OTP SEND

        return response([
            'message' => 'Your OTP Succesfully send your mobile number',
            'status' => 'success'
        ], 200);
    }

   

    public function verifiedOtp(Request $request)
    {
        $loggeduser = auth()->user();
        $otpData = MobileVerification::where('otp',$request->otp)->first();
        if(!$otpData){
            return response([
                'message' => 'You entered wrong OTP',
                'status' => 'failed'
            ], 200);
        }
        else{

            $currentTime = time();
            $time = $otpData->created_at;

            if($currentTime >= $time && $time >= $currentTime - (90+5)){//90 seconds
                User::where('id',$loggeduser->id)->update([
                    'is_mobile_verified' => 1
                ]);
                return response([
                    'message' => 'Your Mobile Number is verified',
                    'status' => 'success'
                ], 200);
            }
            else{
                return response([
                    'message' => 'Your OTP has been Expired',
                    'status' => 'failed'
                ], 200);
            }

        }
    }

    public function resendOtp()
    {
        $user = auth()->user();
        $otpData = MobileVerification::where('phone_no',$user->phone_no)->first();

        $currentTime = time();
        $time = $otpData->created_at;

        if($currentTime >= $time && $time >= $currentTime - (90+5)){//90 seconds
            return response()->json(['success' => false,'msg'=> 'Please try after some time']);
        }
        else{

            $this->sendOtp($user);//OTP SEND
            return response()->json(['success' => true,'msg'=> 'OTP has been sent']);
        }

    }
    public function MobileOtpStatus()
    {
        $user = auth()->user();
        $otpData = MobileVerification::where('phone_no',$user->phone_no)->first();

        $currentTime = time();
        $time = $otpData->created_at;

        if($currentTime >= $time && $time >= $currentTime - (90+5)){//90 seconds
            return response()->json(['success' => false,'msg'=> 'Please try after some time']);
        }
        else{

            return response()->json(['success' => true,'msg'=> 'You Can Send your Mobile Otp']);
        }

    }
    
}
