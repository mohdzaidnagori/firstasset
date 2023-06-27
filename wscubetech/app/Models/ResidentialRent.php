<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentialRent extends Model
{
    use HasFactory;
    protected $fillable = [
        'sale_lease',
        'locality',
        'type',
        'property_address',
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
        'availability',
        'availability_date',
        'age_of_construction',
        'currently_rented_out',
        'rented_out_to',
        'monthly_rent_amount',
        'who_are_bachlelor',
        'who_eat_non_veg',
        'with_pets',
        'description',
        'user_id',
        'images',
    ];
}
