<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientUser extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'state', 'city', 'user_id','interested_in',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
