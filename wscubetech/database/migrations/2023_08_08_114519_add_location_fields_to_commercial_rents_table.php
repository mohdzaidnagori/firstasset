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
        Schema::table('commercial_rents', function (Blueprint $table) {
            $table->decimal('latitude', 10, 8)->after('isActive'); // Adjust the position based on your requirements
            $table->decimal('longitude', 11, 8)->after('latitude');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('commercial_rents', function (Blueprint $table) {
            //
        });
    }
};
