<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BrokerFinancial extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'interested_in','who_you_are', 'no_of_clients', 'assets_under_management','user_id',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function clients(){
        return $this->hasMany(ClientBroker::class);
    }
}
