<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommercialSale extends Model
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
        'status',
        'currently_leased_out',
        'furnished',
        'expected_price',
        'maintenance_monthly',
        'available_from',
        'isApproval',
        'isHome',
        'isActive',
        'images',
        'description',
        'user_id',
    ];
}
