<?php

namespace App\Http\Controllers;

use App\Models\ResidentialRent;
use Illuminate\Http\Request;

class ResidentialRentController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'locality' => 'required',
                'type' => 'required',
                'property_address' => 'required',
                'property_name' => 'required',
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
                'availability_date' => 'nullable|date',
                'currently_rented_out' => 'nullable|boolean',
                'who_are_bachlelor' => 'required|boolean',
                'who_eat_non_veg' => 'required|boolean',
                'with_pets' => 'required|boolean',
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

            ResidentialRent::create($validatedData);

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
