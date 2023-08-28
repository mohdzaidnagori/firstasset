<?php

namespace App\Http\Controllers;

use App\Models\CommercialSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;


class CommercialSaleController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'property_name' => 'required|string',
                'locality' => 'required',
                'property_address' => 'required',
                'type' => 'required',
                'carpet_area' => 'required|integer',
                'parking' => 'required|integer',
                'washrooms' => 'required|integer',
                'pantry_cafeteria' => 'required|boolean',
                'facing' => 'required|string',
                'status' => 'required|string',
                'currently_leased_out' => 'required|boolean',
                'furnished' => 'required',
                'maintenance_monthly' => 'required|integer',
                'expected_price' => 'required',
                'available_from' => 'required|string',
                'maintenance_monthly' => 'required|integer',
                'description' => 'required|string',
                'images.*' => 'image|max:2048',
            ]);
            $loggeduser = auth()->user();

            // Merge the user_id with the validated data
            $validatedData['user_id'] = $loggeduser->id;
            $validatedData['user_name'] = $loggeduser->name;

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

            CommercialSale::create($validatedData);
            $data['email'] = 'zaidnagori010@gmail.com'; // Change to the company's email address
            $data['mobile'] = $loggeduser->phone_no;
            $data['useremail'] = $loggeduser->email;
            $data['name'] = $loggeduser->name;
            $data['title'] = 'Successfuly created new property ' .$request->property_name;


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
