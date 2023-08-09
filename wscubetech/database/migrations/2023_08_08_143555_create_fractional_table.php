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
        Schema::create('fractionals', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('location');
            $table->string('carpet_area');
            $table->string('price');
            $table->string('target_irr');
            $table->string('entry_yield');
            $table->text('description');
            $table->longText('images');
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
        Schema::dropIfExists('fractional');
    }
};
