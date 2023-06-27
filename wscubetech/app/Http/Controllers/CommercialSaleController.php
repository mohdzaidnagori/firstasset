<?php

namespace App\Http\Controllers;

use App\Models\CommercialSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CommercialSaleController extends Controller
{
    public function store(Request $request){
        $validatedData = $request->validate([
            'sale_type' => 'required|string',
            'locality' => 'required|string',
            'type' => 'required|string',
            'property_name' => 'required|string',
            'property_address' => 'required|string',
            'expected_sale_price' => 'required|numeric',
            'booking_amount' => 'nullable|numeric',
            'possession_status' => 'required|string',
            'available_from' => 'nullable|date',
            'age_of_construction' => 'nullable|string',
            'furnished_status' => 'required|string',
            'floor_number' => 'nullable|string',
            'total_floor' => 'nullable|integer',
            'washrooms' => 'nullable|integer',
            'pantry_cafeteria' => 'nullable|boolean',
            'carpet_area' => 'nullable|integer',
            'super_area' => 'nullable|integer',
            'currently_leased_out' => 'nullable|boolean',
            'description' => 'nullable|string',
            'images.*' => 'image|mimes:jpeg,png,jpg|max:2048',
        ]);
        $loggeduser = auth()->user();
        $commercialSell = new CommercialSale();
        $commercialSell->sale_type = $validatedData['sale_type'];
        $commercialSell->locality = $validatedData['locality'];
        $commercialSell->type = $validatedData['type'];
        $commercialSell->property_name = $validatedData['property_name'];
        $commercialSell->property_address = $validatedData['property_address'];
        $commercialSell->expected_sale_price = $validatedData['expected_sale_price'];
        $commercialSell->booking_amount = $validatedData['booking_amount'];
        $commercialSell->possession_status = $validatedData['possession_status'];
        $commercialSell->available_from = $validatedData['available_from'];
        $commercialSell->age_of_construction = $validatedData['age_of_construction'];
        $commercialSell->furnished_status = $validatedData['furnished_status'];
        $commercialSell->floor_number = $validatedData['floor_number'];
        $commercialSell->total_floor = $validatedData['total_floor'];
        $commercialSell->washrooms = $validatedData['washrooms'];
        $commercialSell->pantry_cafeteria = $validatedData['pantry_cafeteria'];
        $commercialSell->carpet_area = $validatedData['carpet_area'];
        $commercialSell->super_area = $validatedData['super_area'];
        $commercialSell->currently_leased_out = $validatedData['currently_leased_out'];
        $commercialSell->description = $validatedData['description'];
        $commercialSell->user_id = $loggeduser->id;

        if ($request->hasFile('images')) {
            $images = [];
            $imageCount = 0;
    
            foreach ($request->file('images') as $image) {
                if ($imageCount >= 10) {
                    break; // Exit the loop if maximum image count is reached
                }
    
                $filename = time() . '_' . $image->getClientOriginalName();
                $image->move(public_path().'/images/',$filename);

                // Save the image URL to the array
                $images[] = $filename;
                $imageCount++;
            }
    
            // Convert the array of image paths to a serialized JSON string
            $imagesJson = json_encode($images);
    
            // Assign the serialized JSON string to the `images` property
            $commercialSell->images = $imagesJson;
        }
       
        $commercialSell->save();
        return response()->json([ 'path' => $images,'message' => 'Data saved successfully'], 201);
    }
    
}
