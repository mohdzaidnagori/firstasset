<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BrokerController;
use App\Http\Controllers\BrokerFinancialController;
use App\Http\Controllers\ClientBrokerController;
use App\Http\Controllers\ClientUserController;
use App\Http\Controllers\CommercialRentController;
use App\Http\Controllers\CommercialSaleController;
use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\GetUserController;
use App\Http\Controllers\MobileVerificationController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\ResidentialRentController;
use App\Http\Controllers\ResidentialSaleController;
use App\Http\Controllers\UserController;
use App\Models\EmailVerification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/broker-register', [BrokerController::class, 'register']);
Route::post('/login', [UserController::class, 'login']);
Route::post('/send_reset_password_email', [PasswordResetController::class, 'send_reset_password_email']);
Route::post('/reset-password', [PasswordResetController::class, 'reset']);
Route::post('/brokerfinancial-register', [BrokerFinancialController::class, 'register']);
Route::post('/clientuser-register', [ClientUserController::class, 'register']);
Route::post('/clientbroker-register', [ClientBrokerController::class, 'register']);
Route::post('/broker_add_client', [ClientBrokerController::class, 'register']);


// all user fetch 



Route::middleware(['auth:sanctum', 'admin.token'])->group(function () {
    // Admin-protected routes
    Route::get('/admin/getalluser', [GetUserController::class, 'getAllUsersWithData']);
    Route::get('/getalluserbroker', [GetUserController::class, 'getAllUsersWithBroker']);
    Route::get('/getalluserbroker_f', [GetUserController::class, 'getAllUsersWithBrokerFinancial']);
    Route::get('/getalluserbroker_n', [GetUserController::class, 'getAllUsersWithBrokerN']);
    Route::get('/getalluserclient', [GetUserController::class, 'getAllUsersWithClient']);
    Route::get('/getalluserdirectclient', [GetUserController::class, 'getAllUsersWithDirectClient']);
    Route::get('/getalluserbrokerclient', [GetUserController::class, 'getAllUsersWithBrokerClient']);
    Route::get('/brokers/{id}', [GetUserController::class, 'getBrokerClients']);
    Route::get('/brokersfinancial/{id}', [GetUserController::class, 'getBrokerFinancialClients']);
    Route::post('/admin/logout', [AdminController::class, 'logout']);
});
Route::post('/admin/login', [AdminController::class, 'login']);


Route::middleware(['auth:sanctum'])->group(function () {
    Route::post('/logout', [UserController::class, 'logout']);
    Route::get('/loggeduser', [UserController::class, 'loggeduser']);
    Route::get('/changepassword', [UserController::class, 'change_password']);
    Route::post('/verify', [EmailVerificationController::class, 'verification']);
    Route::post('/verify-otp', [EmailVerificationController::class, 'verifiedOtp']);
    Route::post('/resend_email_otp', [EmailVerificationController::class, 'resendOtp']);
    Route::post('/email_status', [EmailVerificationController::class, 'EmailOtpStatus']);
    Route::post('/verify-mobile', [MobileVerificationController::class, 'verification']);
    Route::post('/verify-otp-mobile', [MobileVerificationController::class, 'verifiedOtp']);
    Route::post('/resend_mobile_otp', [MobileVerificationController::class, 'resendOtp']);
    Route::post('/mobile_status', [MobileVerificationController::class, 'MobileOtpStatus']);
    Route::post('/check-status', [EmailVerificationController::class, 'CheckStatus']);
    Route::get('/check_send_email', [ClientBrokerController::class, 'sendClientCredential']);
    Route::post('/add-commercial-sale', [CommercialSaleController::class, 'store']);
    Route::post('/add-commercial-rent', [CommercialRentController::class, 'store']);
    Route::post('/add-residential-sale', [ResidentialSaleController::class, 'store']);
    Route::post('/add-residential-rent', [ResidentialRentController::class, 'store']);
});

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
