<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Broker extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'state', 'city', 'locality','interested_in',
        'property_types', 'ticket_size_sale', 'ticket_size_lease', 'transactional_value',
        'fractional_investment_size','user_id',
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function clients(){
        return $this->hasMany(ClientBroker::class);
    }
}
