<?php

namespace App\Http\Controllers;

use App\Models\CommercialRent;
use App\Models\CommercialSale;
use App\Models\Fractional;
use App\Models\ResidentialRent;
use App\Models\ResidentialSale;
use App\Models\Sole;
use Illuminate\Http\Request;

class PropertyListController extends Controller
{
    public function getPropertyData()
    {
        $loggedUser = auth()->user();

        if ($loggedUser->is_admin) {
            // If admin, fetch all data from each table
            $commercialRents = CommercialRent::all();
            $commercialSales = CommercialSale::all();
            $residentialRents = ResidentialRent::all();
            $residentialSales = ResidentialSale::all();
        } else {
            // If not admin, fetch data only for the authenticated user
            $commercialRents = CommercialRent::where('user_id', $loggedUser->id)->get();
            $commercialSales = CommercialSale::where('user_id', $loggedUser->id)->get();
            $residentialRents = ResidentialRent::where('user_id', $loggedUser->id)->get();
            $residentialSales = ResidentialSale::where('user_id', $loggedUser->id)->get();
        }

        // Merge all data into a single array
        $userData = [
            'commercial_rents' => $commercialRents,
            'commercial_sales' => $commercialSales,
            'residential_rents' => $residentialRents,
            'residential_sales' => $residentialSales,
        ];

        // Prepare the response
        $response = $userData;

        return response()->json($response, 200);
    }
    public function getCommercial_rentData(Request $request)
    {
        try {
            $searchText = $request->input('search');
            $orderBy = $request->input('orderBy', 'defaultField'); // Default field to sort by
    
            $query = CommercialRent::where('isApproval', true)->where('isActive',true)
                ->where(function ($query) use ($searchText) {
                    $query->where('property_name', 'like', "%$searchText%");
                });
    
            // Apply sorting based on the provided orderBy parameter
            if ($orderBy === 'property_name') {
                $query->orderBy('property_name');

            }
            $commercialRents = $query->get();

            $query1 = CommercialSale::where('isApproval', true)->where('isActive',true)
            ->where(function ($query1) use ($searchText) {
                $query1->where('property_name', 'like', "%$searchText%");
            });

        // Apply sorting based on the provided orderBy parameter
        if ($orderBy === 'property_name') {
            $query1->orderBy('property_name');

        }
        $commercialSales = $query1->get();


        $query2 = ResidentialSale::where('isApproval', true)->where('isActive',true)
            ->where(function ($query2) use ($searchText) {
                $query2->where('property_name', 'like', "%$searchText%");
            });

        // Apply sorting based on the provided orderBy parameter
        if ($orderBy === 'property_name') {
            $query2->orderBy('property_name');

        }
        $residentialSales = $query2->get();


        $query3 = ResidentialRent::where('isApproval', true)->where('isActive',true)
            ->where(function ($query3) use ($searchText) {
                $query3->where('property_name', 'like', "%$searchText%");
            });

        // Apply sorting based on the provided orderBy parameter
        if ($orderBy === 'property_name') {
            $query3->orderBy('property_name');

        }
        $residentialRents = $query3->get();
            
            // ... Repeat similar filtering and sorting for other property types
            
            $allData = array_merge(
                $commercialRents->toArray(),
                $commercialSales->toArray(),
                $residentialSales->toArray(),
                $residentialRents->toArray()
            );
    
            $response =  $allData;
    
            return response()->json(['data' => $response, 'status' => 'success', 'message' => 'Data Load successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 200);
        }
    }

    public function CommercialRentupdateData(Request $request)
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
                'security_deposite' => 'required|integer',
                'furnished' => 'required',
                'maintenance_monthly' => 'required|integer',
                'expected_price' => 'required',
                'available_from' => 'required|string',
                'maintenance_monthly' => 'required|integer',
                'description' => 'required|string',
                'images.*' => 'image|max:2048',
            ]);

            $loggedUser = auth()->user();
            $commercialRent = CommercialRent::findOrFail($request->id);

            // Retrieve the previous images URLs from the database and decode them from JSON to an array
            $previousImages = json_decode($commercialRent->images, true);

            // Process the newly uploaded images
            if ($request->hasFile('images')) {
                $imageCount = 0;

                foreach ($request->file('images') as $image) {
                    if ($imageCount >= 10) {
                        break; // Exit the loop if maximum image count is reached
                    }
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $image->move(public_path('images'), $filename);

                    // Save the image URL to the array
                    $previousImages[] = $filename;
                    $imageCount++;
                }
            }

            // Convert the array of image paths to a serialized JSON string
            $imagesJson = json_encode($previousImages);

            // Add the images attribute to the validated data
            $validatedData['images'] = $imagesJson;

            $commercialRent->update($validatedData);

            return response()->json(['status' => 'success', 'message' => 'Data updated successfully'], 200);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            // Validation failed
            $errors = $exception->errors();
            return response()->json(['status' => 'failed', 'errors' => $errors, 'message' => 'Validation failed'], 200);
        } catch (\Throwable $th) {
            // Other exceptions occurred
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 200);
        }
    }
    public function CommercialImageView($id, $type)
    {
        if ($type === 'c_rents') {
            $commercialRent = CommercialRent::find($id);
        }
        if ($type === 'c_sales') {
            $commercialRent = CommercialSale::find($id);
        }
        if ($type === 'r_rents') {
            $commercialRent = ResidentialRent::find($id);
        }
        if ($type === 'r_sales') {
            $commercialRent = ResidentialSale::find($id);
        }
        if ($type === 'fractional') {
            $commercialRent = Fractional::find($id);
        }
        if ($type === 'sole') {
            $commercialRent = Sole::find($id);
        }


        if (!$commercialRent) {
            return response()->json(['error' => 'Commercial rent record not found'], 404);
        }

        $images = json_decode($commercialRent->images, true);

        return response()->json(['images' => $images], 200);
    }

    public function deleteImage(Request $request, $id, $index, $type)
    {
        if ($type === 'c_rents') {
            $commercialRent = CommercialRent::find($id);
        }
        if ($type === 'c_sales') {
            $commercialRent = CommercialSale::find($id);
        }
        if ($type === 'r_rents') {
            $commercialRent = ResidentialRent::find($id);
        }
        if ($type === 'r_sales') {
            $commercialRent = CommercialSale::find($id);
        }
        if ($type === 'fractional') {
            $commercialRent = Fractional::find($id);
        }
        if ($type === 'sole') {
            $commercialRent = Sole::find($id);
        }



        if (!$commercialRent) {
            return response()->json(['message' => 'Commercial Rent not found'], 404);
        }

        $images = json_decode($commercialRent->images, true) ?? [];

        // Check if the index exists in the images array
        if (isset($images[$index])) {
            unset($images[$index]);

            // Reindex the array to prevent gaps in the keys
            $images = array_values($images);

            // Update the images array in the database
            $commercialRent->images = $images;
            $commercialRent->save();

            return response()->json(['message' => 'Image deleted successfully']);
        }

        return response()->json(['message' => 'Image not found in the array'], 404);
    }


    function CommercialSaleupdateData(Request $request)
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

            $loggedUser = auth()->user();
            $commercialSale = CommercialSale::findOrFail($request->id);


            // Ensure that the user owns the CommercialRent record before updating
            if ($commercialSale->user_id !== $loggedUser->id) {
                return response()->json(['status' => 'failed', 'message' => 'Unauthorized'], 403);
            }




            // Retrieve the previous images URLs from the database and decode them from JSON to an array
            $previousImages = json_decode($commercialSale->images, true);

            // Process the newly uploaded images
            if ($request->hasFile('images')) {
                $imageCount = 0;

                foreach ($request->file('images') as $image) {
                    if ($imageCount >= 10) {
                        break; // Exit the loop if maximum image count is reached
                    }
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $image->move(public_path('images'), $filename);

                    // Save the image URL to the array
                    $previousImages[] = $filename;
                    $imageCount++;
                }
            }

            // Convert the array of image paths to a serialized JSON string
            $imagesJson = json_encode($previousImages);

            // Add the images attribute to the validated data
            $validatedData['images'] = $imagesJson;
            $commercialSale->update($validatedData);
            return response()->json(['status' => 'success', 'message' => 'Data updated successfully'], 200);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            // Validation failed
            $errors = $exception->errors();
            return response()->json(['status' => 'failed', 'errors' => $errors, 'message' => 'Validation failed'], 200);
        } catch (\Throwable $th) {
            // Other exceptions occurred
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 200);
        }
    }
    public function isActive(Request $request, $id, $type)
    {
        if ($type === 'c_rents') {
            $commercialRent = CommercialRent::find($id);
        }
        if ($type === 'c_sales') {
            $commercialRent = CommercialSale::find($id);
        }
        if ($type === 'r_sales') {
            $commercialRent = ResidentialSale::find($id);
        }
        if ($type === 'r_rents') {
            $commercialRent = ResidentialRent::find($id);
        }

        if (!$commercialRent) {
            return response()->json(['message' => 'Property not found'], 404);
        }
        // Toggle the value of isActive
        $isActive = !$commercialRent->isActive;

        // Update the isActive field of the commercialSale model
        $commercialRent->update([
            'isActive' => $isActive,
        ]);


        return response()->json(['message' => 'Active Update Successfully']);
    }
    public function isApproved(Request $request, $id, $type)
    {
        if ($type === 'c_rents') {
            $commercialRent = CommercialRent::find($id);
        }
        if ($type === 'c_sales') {
            $commercialRent = CommercialSale::find($id);
        }
        if ($type === 'r_sales') {
            $commercialRent = ResidentialSale::find($id);
        }
        if ($type === 'r_rents') {
            $commercialRent = ResidentialRent::find($id);
        }

        if (!$commercialRent) {
            return response()->json(['message' => 'Property not found'], 404);
        }
        // Toggle the value of isActive
        $isApproval = !$commercialRent->isApproval;

        // Update the isActive field of the commercialSale model
        $commercialRent->update([
            'isApproval' => $isApproval,
        ]);


        return response()->json(['message' => 'Approvel Update Successfully']);
    }
    public function ResidentialRentupdateData(Request $request)
    {

        try {
            $validatedData = $request->validate([
                'property_name' => 'required|string',
                'locality' => 'required',
                'property_address' => 'required',
                'type' => 'required',
                'Bedrooms' => 'required|integer',
                'Bathrooms' => 'required|integer',
                'Balconies' => 'required|integer',
                'carpet_area' => 'required|integer',
                'parking' => 'required|integer',
                'swimming_pool' => 'required|boolean',
                'gym' => 'required|boolean',
                'are_peds' => 'required|boolean',
                'are_non_veg' => 'required|boolean',
                'are_bachlore' => 'required|boolean',
                'facing' => 'required|string',
                'furnished' => 'required',
                'available_from' => 'required|string',
                'expected_price' => 'required|integer',
                'security_deposite' => 'required|integer',
                'description' => 'required|string',
                'images.*' => 'image|max:2048',
            ]);

            $commercialRent = ResidentialRent::findOrFail($request->id);
            $previousImages = json_decode($commercialRent->images, true);

            // Process the newly uploaded images
            if ($request->hasFile('images')) {
                $imageCount = 0;

                foreach ($request->file('images') as $image) {
                    if ($imageCount >= 10) {
                        break; // Exit the loop if maximum image count is reached
                    }
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $image->move(public_path('images'), $filename);

                    // Save the image URL to the array
                    $previousImages[] = $filename;
                    $imageCount++;
                }
            }

            // Convert the array of image paths to a serialized JSON string
            $imagesJson = json_encode($previousImages);

            // Add the images attribute to the validated data
            $validatedData['images'] = $imagesJson;
            $commercialRent->update($validatedData);

            return response()->json(['status' => 'success', 'message' => 'Data updated successfully'], 200);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            // Validation failed
            $errors = $exception->errors();
            return response()->json(['status' => 'failed', 'errors' => $errors, 'message' => 'Validation failed'], 200);
        } catch (\Throwable $th) {
            // Other exceptions occurred
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 200);
        }
    }


    function ResidentialSaleupdateData(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'property_name' => 'required|string',
                'locality' => 'required',
                'property_address' => 'required',
                'type' => 'required',
                'Bedrooms' => 'required|integer',
                'Bathrooms' => 'required|integer',
                'Balconies' => 'required|integer',
                'carpet_area' => 'required|integer',
                'parking' => 'required|integer',
                'swimming_pool' => 'required|boolean',
                'gym' => 'required|boolean',
                'facing' => 'required|string',
                'furnished' => 'required',
                'available_from' => 'required|string',
                'currently_leased_out' => 'required|boolean',
                'status' => 'required|string',
                'expected_price' => 'required|integer',
                'description' => 'required|string',
                'images.*' => 'required|image|max:2048',
            ]);

            $loggedUser = auth()->user();
            $commercialSale = ResidentialSale::findOrFail($request->id);


            // Ensure that the user owns the CommercialRent record before updating
            if ($commercialSale->user_id !== $loggedUser->id) {
                return response()->json(['status' => 'failed', 'message' => 'Unauthorized'], 403);
            }




            // Retrieve the previous images URLs from the database and decode them from JSON to an array
            $previousImages = json_decode($commercialSale->images, true);

            // Process the newly uploaded images
            if ($request->hasFile('images')) {
                $imageCount = 0;

                foreach ($request->file('images') as $image) {
                    if ($imageCount >= 10) {
                        break; // Exit the loop if maximum image count is reached
                    }
                    $filename = time() . '_' . $image->getClientOriginalName();
                    $image->move(public_path('images'), $filename);

                    // Save the image URL to the array
                    $previousImages[] = $filename;
                    $imageCount++;
                }
            }

            // Convert the array of image paths to a serialized JSON string
            $imagesJson = json_encode($previousImages);

            // Add the images attribute to the validated data
            $validatedData['images'] = $imagesJson;
            $commercialSale->update($validatedData);
            return response()->json(['status' => 'success', 'message' => 'Data updated successfully'], 200);
        } catch (\Illuminate\Validation\ValidationException $exception) {
            // Validation failed
            $errors = $exception->errors();
            return response()->json(['status' => 'failed', 'errors' => $errors, 'message' => 'Validation failed'], 200);
        } catch (\Throwable $th) {
            // Other exceptions occurred
            return response()->json(['status' => 'failed', 'message' => $th->getMessage()], 200);
        }
    }
    public function singlePropertyView($id,$type)
    {
        if($type === 'c_rents'){
            $property_data =  CommercialRent::find($id);
        }
        if($type === 'c_sales'){
            $property_data =  CommercialSale::find($id);
        }
        if($type === 'r_rents'){
            $property_data =  ResidentialRent::find($id);
        }
        if($type === 'r_sales'){
            $property_data =  ResidentialSale::find($id);
        }
        return response()->json(['data' => $property_data, 'status' => 'success', 'message' => 'Data saved successfully'], 200);
    }
}
