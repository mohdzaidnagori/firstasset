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
        Schema::create('residential_sales', function (Blueprint $table) {
            $table->id();
            $table->string('user_name');
            $table->enum('type', ['Flat / Apartment', 'Bungalow / Villa']);
            $table->string('property_name');
            $table->text('property_address');
            $table->decimal('expected_sale_price', 10, 2);
            $table->decimal('booking_amount', 10, 2)->nullable();
            $table->enum('possession_status', ['under construction', 'Ready to move']);
            $table->date('available_from')->nullable();
            $table->enum('age_of_construction', ['New construction', 'less than 5 years', '5-10 years', '10-15 years', '15-20 years', 'above 20 years'])->nullable();
            $table->enum('furnished_status', ['Furnished', 'Unfurnished']);
            $table->string('floor_number');
            $table->integer('Bedroom');
            $table->integer('Balconies');
            $table->integer('Bathrooms');
            $table->integer('total_floor')->nullable();
            $table->integer('washrooms')->nullable();
            $table->boolean('pantry_cafeteria')->nullable();
            $table->integer('carpet_area')->nullable();
            $table->integer('super_area')->nullable();
            $table->boolean('currently_leased_out')->nullable();
            $table->text('description')->nullable();
            $table->boolean('isApproval')->default(false);
            $table->boolean('isActive')->default(true);
            $table->unsignedBigInteger('user_id');
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
        Schema::dropIfExists('residential_sales');
    }
};
