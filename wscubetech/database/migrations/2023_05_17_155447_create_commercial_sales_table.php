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
        Schema::create('commercial_sales', function (Blueprint $table) {
            $table->id();
            $table->string('user_name');
            $table->string('property_type')->default('c_sales');
            $table->string('property_name');
            $table->string('locality');
            $table->text('property_address');
            $table->string('type');
            $table->integer('carpet_area')->nullable();
            $table->integer('parking')->nullable();
            $table->integer('washrooms')->nullable();
            $table->boolean('pantry_cafeteria')->nullable();
            $table->string('facing')->nullable();
            $table->string('status')->nullable();
            $table->boolean('currently_leased_out')->nullable();
            $table->string('furnished');
            $table->integer('expected_price');
            $table->integer('maintenance_monthly');
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
        Schema::dropIfExists('commercial_sales');
    }
};
