<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommercialRent extends Model
{
    use HasFactory;
    protected $fillable = [
        'locality',
        'type',
        'property_name',
        'property_address',
        'expected_monthly_rent',
        'security_amount',
        'booking_amount',
        'maintenance_charge',
        'furnished_status',
        'floor_number',
        'total_floor',
        'washrooms',
        'pantry_cafeteria',
        'carpet_area_sqft',
        'super_area_sqft',
        'availability_date',
        'currently_rented_out',
        'description',
        'isActive',
        'isApproval',
        'latitude',
        'longitude',
        'user_id',
        'images',
    ];
}
