<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResidentialSale extends Model
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
        'furnished',
        'currently_leased_out',
        'status',
        'expected_price',
        'facing',
        'available_from',
        'isApproval',
        'isHome',
        'isActive',
        'images',
        'description',
        'user_id',
    ];
}
