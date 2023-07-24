<?php

namespace App\Http\Controllers;

use App\Models\ResidentialSale;
use Illuminate\Http\Request;


class ResidentialSaleController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'sale_type' => 'required',
                'locality' => 'required',
                'type' => 'required',
                'property_address' => 'required',
                'property_name' => 'required',
                'expected_sale_price' => 'required|numeric',
                'booking_amount' => 'nullable|numeric',
                'possession_status' => 'required',
                'available_from' => 'nullable|date',
                'furnished_status' => 'required',
                'floor_number' => 'required',
                'total_floor' => 'required|integer',
                'washrooms' => 'required|integer',
                'Bedroom' => 'required',
                'Balconies' => 'required',
                'Bathrooms' => 'required',
                'pantry_cafeteria' => 'nullable|boolean',
                'carpet_area' => 'required|integer',
                'super_area' => 'required|integer',
                'age_of_construction' => 'nullable',
                'currently_leased_out' => 'nullable|boolean',
                'description' => 'nullable|string',
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

            ResidentialSale::create($validatedData);

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
