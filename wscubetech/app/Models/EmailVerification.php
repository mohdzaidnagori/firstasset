<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailVerification extends Model
{
    protected $table = 'email_verify';
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'email',
        'otp',
        'created_at'
    ];
}
