<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommercialSale extends Model
{
    use HasFactory;
    protected $fillable = [
        'locality',
        'type',
        'property_name',
        'property_address',
        'expected_sale_price',
        'booking_amount',
        'possession_status',
        'furnished_status',
        'Bedroom',
        'Balconies',
        'Bathrooms',
        'floor_number',
        'total_floor',
        'washrooms',
        'pantry_cafeteria',
        'carpet_area',
        'super_area',
        'age_of_construction',
        'currently_leased_out',
        'available_from',
        'description',
        'user_id',
        'isApproval',
        'isActive',
        'images',
    ];
}
