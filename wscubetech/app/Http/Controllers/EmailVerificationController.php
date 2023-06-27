<?php

namespace App\Http\Controllers;

use App\Models\EmailVerification;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailVerificationController extends Controller
{
    public function sendOtp($user)
    {
        $otp = rand(100000,999999);
        $time = time();

        EmailVerification::updateOrCreate(
            ['email' => $user->email],
            [
            'email' => $user->email,
            'otp' => $otp,
            'created_at' => $time
            ]
        );
        $data['email'] = $user->email;
        $data['title'] = 'Mail Verification';

        $data['body'] = 'Your OTP is:- '.$otp;

        Mail::send('mailVerification',['data'=>$data],function($message) use ($data){
            $message->to($data['email'])->subject($data['title']);
        });
    }
    
    public function verification()
    {
        $loggeduser = auth()->user();
        $user = User::where('id', $loggeduser->id)->first();
        if (!$user || $user->is_verified == 1) {
            return response([
                'message' => 'you are already verify your email',
                'status' => 'failed'
            ], 200);
        }

        $this->sendOtp($user); //OTP SEND

        return response([
            'message' => 'Your OTP Succesfully send your email',
            'status' => 'success'
        ], 200);
    }

    public function verifiedOtp(Request $request)
    {
        $loggeduser = auth()->user();
        $otpData = EmailVerification::where('otp',$request->otp)->first();
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
                    'is_verified' => 1
                ]);
                return response([
                    'message' => 'Mail has been verified',
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
        $otpData = EmailVerification::where('email',$user->email)->first();

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
    public function EmailOtpStatus()
    {
        $user = auth()->user();
        $otpData = EmailVerification::where('email',$user->email)->first();

        $currentTime = time();
        $time = $otpData->created_at;

        if($currentTime >= $time && $time >= $currentTime - (90+5)){//90 seconds
            return response()->json(['success' => false,'msg'=> 'Please try after some time']);
        }
        else{
            return response()->json(['success' => true,'msg'=> 'You Send Your Email Otp again']);
        }

    }
    public function CheckStatus(){
        $user = auth()->user();
        if($user->is_mobile_verified == 0 || $user->is_verified == 0){
            return response()->json(['status' => 'failed','msg'=> 'please verify your account']);
        }
        else{
            return response()->json(['status' => 'success','msg'=> 'You Are Successfully Verify Your Account']);
        }

    }
}
