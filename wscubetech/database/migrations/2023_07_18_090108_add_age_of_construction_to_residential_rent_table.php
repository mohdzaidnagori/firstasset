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
        Schema::table('residential_rents', function (Blueprint $table) {
            $table->enum('age_of_construction', ['New construction', 'less than 5 years', '5-10 years', '10-15 years', '15-20 years', 'above 20 years'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('residential_rents', function (Blueprint $table) {
            $table->dropColumn('age_of_construction');
        });
    }
};
