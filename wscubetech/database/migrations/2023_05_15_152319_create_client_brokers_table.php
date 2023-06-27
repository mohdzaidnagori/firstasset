<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client_brokers', function (Blueprint $table) {
            $table->id();
            $table->integer('croreAmount');
            $table->integer('lakhAmount');
            $table->boolean('client_int_property_m_service');
            $table->boolean('client_int_soil_s_mandated_project');
            $table->unsignedBigInteger('broker_financial_id')->nullable();
            $table->foreign('broker_financial_id')->references('id')->on('broker_financials');
            $table->unsignedBigInteger('broker_id')->nullable();
            $table->foreign('broker_id')->references('id')->on('brokers');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
        });
    }
   


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('client_brokers');
    }
};
