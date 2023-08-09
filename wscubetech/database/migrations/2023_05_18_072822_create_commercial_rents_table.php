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
        Schema::create('commercial_rents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('locality');
            $table->enum('type', [
                'Office Space',
                'Retail',
            ]);

            $table->string('property_address');
            $table->string('property_name');
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
            $table->string('booking_amount')->nullable();
            $table->unsignedInteger('total_floor');
            $table->unsignedInteger('washrooms');
            $table->boolean('pantry_cafeteria')->default(false);
            $table->unsignedInteger('carpet_area_sqft');
            $table->unsignedInteger('super_area_sqft');
            $table->date('availability_date')->nullable();
            $table->boolean('isApproval')->default(false);
            $table->boolean('isActive')->default(true);
            $table->boolean('currently_rented_out')->default(false);
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
        Schema::dropIfExists('commercial_rents');
    }
};
