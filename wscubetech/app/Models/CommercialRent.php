<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommercialRent extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_name',
        'property_name',
        'locality',
        'property_address',
        'type',
        'carpet_area',
        'parking',
        'washrooms',
        'pantry_cafeteria',
        'facing',
        'furnished',
        'available_from',
        'expected_price',
        'security_deposite',
        'maintenance_monthly',
        'isApproval',
        'isHome',
        'isActive',
        'images',
        'description',
        'user_id',
    ];
}
