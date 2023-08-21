<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Fractional extends Model
{
    use HasFactory;
    protected $fillable = [
        'images',
        'name',
        'location',
        'carpet_area',
        'price',
        'target_irr',
        'entry_yield',
        'description',
        'isActive',
    ];
}
