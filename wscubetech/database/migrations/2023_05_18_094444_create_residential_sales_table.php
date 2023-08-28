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
            $table->string('property_type')->default('r_sales');
            $table->string('property_name');
            $table->string('locality');
            $table->text('property_address');
            $table->string('type');
            $table->integer('Bedrooms');
            $table->integer('Bathrooms');
            $table->integer('Balconies');
            $table->integer('parking')->nullable();
            $table->integer('carpet_area')->nullable();
            $table->boolean('swimming_pool')->nullable();
            $table->boolean('gym')->nullable();
            $table->string('furnished');
            $table->boolean('currently_leased_out')->nullable();
            $table->string('status')->nullable();
            $table->integer('expected_price');
            $table->string('facing')->nullable();
            $table->string('available_from');
            $table->boolean('isApproval')->default(false);
            $table->boolean('isHome')->default(false);
            $table->boolean('isActive')->default(true);
            $table->longText('images');
            $table->text('description')->nullable();
            $table->unsignedBigInteger('user_id');
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
