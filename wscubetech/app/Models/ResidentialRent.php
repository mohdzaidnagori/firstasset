<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentialRent extends Model
{
    use HasFactory;
    protected $fillable = [
        'locality',
        'type',
        'property_address',
        'property_name',
        'expected_monthly_rent',
        'security_amount',
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
        'who_are_bachlelor',
        'who_eat_non_veg',
        'with_pets',
        'user_name',
        'description',
        'isActive',
        'isApproval',
        'user_id',
        'images',
    ];
}
