<?php

namespace App\Http\Controllers;

use App\Models\CommercialRent;
use Illuminate\Http\Request;

class CommercialRentController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'sale_lease' => 'required',
            'locality' => 'required',
            'type' => 'required',
            'property_address' => 'required',
            'expected_monthly_rent' => 'required|numeric',
            'security_amount' => 'required|numeric',
            'maintenance_charge' => 'required',
            'furnished_status' => 'required',
            'floor_number' => 'required',
            'total_floor' => 'required|integer',
            'washrooms' => 'required|integer',
            'pantry_cafeteria' => 'nullable|boolean',
            'carpet_area_sqft' => 'required|integer',
            'super_area_sqft' => 'required|integer',
            'availability' => 'required',
            'availability_date' => 'nullable|date',
            'age_of_construction' => 'required',
            'currently_rented_out' => 'nullable|boolean',
            'rented_out_to' => 'nullable|string',
            'monthly_rent_amount' => 'nullable|numeric',
            'description' => 'nullable|string',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
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

        return response()->json(['path' => $images, 'message' => 'Data saved successfully'], 201);
    }
}
