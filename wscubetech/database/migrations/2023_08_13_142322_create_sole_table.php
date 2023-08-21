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
        Schema::create('soles', function (Blueprint $table) {
            $table->id();
            $table->string('carpet_area');
            $table->string('configration');
            $table->text('description');
            $table->longText('images');
            $table->string('floor');
            $table->text('address');
            $table->text('location_map');
            $table->string('rera_date');
            $table->string('rera_number');
            $table->string('project_name');  
            $table->string('price_range');
            $table->string('units');
            $table->boolean('isActive')->default(true);
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
        Schema::dropIfExists('soles');
    }
};
