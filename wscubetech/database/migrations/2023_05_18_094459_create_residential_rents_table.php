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
        Schema::create('residential_rents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->enum('sale_lease', ['Sale', 'Lease/Rent']);
            $table->string('locality');
            $table->enum('type', [
                'Office Space',
                'Retail',
                'Flat / Apartment',
                'Bungalow / Villa'
            ]);

            $table->string('property_address');
            $table->unsignedDecimal('expected_monthly_rent');
            $table->unsignedDecimal('security_amount');
            $table->enum('maintenance_charge', [
                'Monthly',
                'Quarterly',
                'Yearly',
                'One time'
            ]);
            $table->enum('furnished_status', ['Furnished', 'Unfurnished']);
            $table->string('floor_number');
            $table->unsignedInteger('total_floor');
            $table->unsignedInteger('washrooms');
            $table->boolean('who_are_bachlelor');
            $table->boolean('who_eat_non_veg');
            $table->boolean('with_pets');
            $table->boolean('pantry_cafeteria')->default(false);
            $table->unsignedInteger('carpet_area_sqft');
            $table->unsignedInteger('super_area_sqft');
            $table->enum('availability', ['Date', 'Immediately']);
            $table->date('availability_date')->nullable();
            $table->boolean('currently_rented_out')->default(false);
            $table->string('rented_out_to')->nullable();
            $table->unsignedDecimal('monthly_rent_amount')->nullable();
            $table->text('description')->nullable();
            $table->longText('images');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('residential_rents');
    }
};

