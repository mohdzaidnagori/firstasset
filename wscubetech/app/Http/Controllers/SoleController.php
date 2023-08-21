<?php

namespace App\Http\Controllers;

use App\Models\Sole;
use Illuminate\Http\Request;

class SoleController extends Controller
{
    public function SoleView()
    {
        $soles = Sole::where('isActive',true)->orderBy('created_at', 'desc')->get();
        return response()->json(['data' => $soles, 'status' => 'success', 'message' => 'Data saved successfully'], 200);
    }
    public function SoleViewbyId($id)
    {
        $soles =  Sole::find($id);
        return response()->json(['data' => $soles, 'status' => 'success', 'message' => 'Data saved successfully'], 200);
    }
    public function CreateSole(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'carpet_area' => 'required',
                'configration' => 'required|string',
                'floor' => 'required|string',
                'location_map' => 'required|string',
                'address' => 'required\string',
                'rera_date' => 'required|string',
                'project_name' => 'required|string',
                'price_range' => 'required|string',
                'description' => 'nullable|string',
                'units' => 'required|string',
                'rera_number' => 'string',
                'images.*' => 'image|max:2048',
            ]);

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

            Sole::create($validatedData);

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

    public function UpdateSole(Request $request)
    {

        try {
            $validatedData = $request->validate([
                'carpet_area' => 'required',
                'configration' => 'required|string',
                'floor' => 'required|string',
                'address' => 'required\string',
                'location_map' => 'required|string',
                'rera_date' => 'required|string',
                'project_name' => 'required|string',
                'price_range' => 'required|string',
                'description' => 'nullable|string',
                'units' => 'required|string',
                'rera_number' => 'string',
                'images.*' => 'image|max:2048',
                'id' => 'required'
            ]);

            $sole = Sole::findOrFail($request->id);

            // Retrieve the previous images URLs from the database and decode them from JSON to an array
            $previousImages = json_decode($sole->images, true);

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

            $sole->update($validatedData);

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

    public function deleteFractional($id,$type)
    {
        try {
            if($type == 'sole'){
                $sole = Sole::findOrFail($id);
            }
            $sole->update(['isActive' => false]);

            return response()->json(['status' => 'success', 'message' => 'Fractional record deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Error deleting Fractional record'], 500);
        }
    }
}
