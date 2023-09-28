<?php

namespace App\Http\Controllers;

use App\Models\Testimonial;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{
    public function TestimonialView()
    {
        $testimonial = Testimonial::orderBy('created_at', 'desc')->get();
        return response()->json(['data' => $testimonial, 'status' => 'success', 'message' => 'Data saved successfully'], 200);
    }

    public function CreateTestimonial(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'name' => 'required|string',
                'bg' => 'required|string',
                'description' => 'nullable|string',
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

            Testimonial::create($validatedData);

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





