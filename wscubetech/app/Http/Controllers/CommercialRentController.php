<?php

namespace App\Http\Controllers;

use App\Models\CommercialRent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CommercialRentController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'locality' => 'required',
                'type' => 'required',
                'property_address' => 'required',
                'property_name' => 'required|string',
                'expected_monthly_rent' => 'required|numeric',
                'security_amount' => 'required|numeric',
                'maintenance_charge' => 'required',
                'furnished_status' => 'required',
                'floor_number' => 'required',
                'booking_amount' => 'nullable',
                'total_floor' => 'required|integer',
                'washrooms' => 'required|integer',
                'pantry_cafeteria' => 'nullable|boolean',
                'carpet_area_sqft' => 'required|integer',
                'super_area_sqft' => 'required|integer',
                'availability_date' => 'nullable|date',
                'currently_rented_out' => 'nullable|boolean',
                'description' => 'nullable|string',
                'latitude' => 'nullable',
                'longitude' => 'nullable',
                'images.*' => 'image|max:2048',
            ]);
            $loggeduser = auth()->user();

            // Merge the user_id with the validated data
            $validatedData['user_id'] = $loggeduser->id;

            if ($request->hasFile('images')) {
                $images = [];
                $imageCount = 0;

                foreach ($request->file('images') as $image) {
                    if ($imageCount >= 10) {
                        break; // Exit the loop if maximum image count is reached
                    }
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $image->move(public_path() . '/images/', $filename);

                    // Save the image URL to the array
                    $images[] = $filename;
                    $imageCount++;
                }

                // Convert the array of image paths to a serialized JSON string
                $imagesJson = json_encode($images);

                // Add the images attribute to the validated data
                $validatedData['images'] = $imagesJson;
            }

            CommercialRent::create($validatedData);
            $data['email'] = 'zaidnagori010@gmail.com'; // Change to the company's email address
            $data['mobile'] = $loggeduser->phone_no;
            $data['useremail'] = $loggeduser->email;
            $data['name'] = $loggeduser->name;
            $data['title'] = 'Successfuly created new property ' .$request->property_name;


            $data['name'] = $loggeduser->name;

            Mail::send('welcomeNewUser', ['data' => $data], function ($message) use ($data) {
                $message->to($data['email'])->subject($data['email']); // Set subject here
            });

            return response()->json(['status' => 'success', 'path' => $images, 'message' => 'Data saved successfully'], 200);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            // Validation failed
            $errors = $exception->errors();
            return response()->json(['status' => 'failed', 'errors' => $errors, 'message' => 'Validation failed'], 200);
        } catch (\Throwable $th) {
            // Other exceptions occurred
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 200);
        }
    }
}
