<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentialRent extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'user_name',
        'property_name',
        'locality',
        'property_address',
        'type',
        'Bedrooms',
        'Bathrooms',
        'Balconies',
        'parking',
        'carpet_area',
        'swimming_pool',
        'gym',
        'are_peds',
        'are_non_veg',
        'are_bachlore',
        'furnished',
        'available_from',
        'expected_price',
        'facing',
        'security_deposite',
        'isApproval',
        'isHome',
        'isActive',
        'images',
        'description',
    ];
}
