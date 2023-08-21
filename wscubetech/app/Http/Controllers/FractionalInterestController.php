<?php

namespace App\Http\Controllers;

use App\Models\FractionalInterest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FractionalInterestController extends Controller
{
    public function FractionalIntrestedView()
    {
        $fractions = FractionalInterest::where('isActive', true)->orderBy('created_at', 'desc')->get();
        return response()->json(['data' => $fractions, 'status' => 'success', 'message' => 'Data saved successfully'], 200);
    }
    public function CreateFractionalIntrested(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'property_location' => 'required',
                'property_name' => 'required|string',
                'property_description' => 'nullable|string',
                'name' => 'required|string',
                'email' => 'required',
                'phone' => 'required',
                'type' => 'required'
            ]);


            FractionalInterest::create($validatedData);

            $data['email'] = 'zaidnagori010@gmail.com'; // Change to the company's email address
            $data['mobile'] = $request->phone;
            $data['useremail'] = $request->email;
            $data['type'] = $request->type;
            $data['title'] = 'Intrested';
            $data['name'] = $request->name;
            $data['property_name'] = $request->property_name;



            Mail::send('ClientIntrested', ['data' => $data], function ($message) use ($data) {
                $message->to($data['email'])->subject($data['email']); // Set subject here
            });

            return response()->json(['status' => 'success', 'message' => 'Data saved successfully'], 200);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            // Validation failed
            $errors = $exception->errors();
            return response()->json(['status' => 'failed', 'errors' => $errors, 'message' => 'Validation failed'], 200);
        } catch (\Throwable $th) {
            // Other exceptions occurred
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 200);
        }
    }

  

    public function deleteFractional($id)
    {
        try {
            $fraction = FractionalInterest::findOrFail($id);
            $fraction->update(['isActive' => false]);

            return response()->json(['status' => 'success', 'message' => 'Fractional record deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Error deleting Fractional record'], 500);
        }
    }
}
