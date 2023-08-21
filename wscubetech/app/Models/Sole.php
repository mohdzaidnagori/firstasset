<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sole extends Model
{
    use HasFactory;
    protected $fillable = [
        'units',
        'configration',
        'description',
        'images',
        'floor',
        'location_map',
        'rera_date',
        'address',
        'rera_number',
        'project_name',
        'price_range',
        'carpet_area',
        'isActive',
    ];
}
