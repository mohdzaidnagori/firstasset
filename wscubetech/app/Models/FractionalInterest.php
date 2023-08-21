<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FractionalInterest extends Model
{
    use HasFactory;
    protected $fillable = [
        'property_name',
        'property_location',
        'property_description',
        'name',
        'email',
        'phone',
        'type',
        'isActive'
    ];
}
