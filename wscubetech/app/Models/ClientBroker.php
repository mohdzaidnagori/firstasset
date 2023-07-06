<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientBroker extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = [
        'broker_id', 'user_id', 'croreAmount','lakhAmount','client_int_property_m_service',
        'client_int_soil_s_mandated_project','broker_financial_id'
    ];
    public function user(){
        return $this->belongsTo(User::class);
    }
    // public function broker() {
    //     return $this->belongsTo(Broker::class);
    // }
}
