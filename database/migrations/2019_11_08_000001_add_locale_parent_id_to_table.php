<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

class AddLocaleParentIdToTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('menus', function ($table) {
            $table->bigInteger('locale_parent_id')->nullable()->unsigned();

            $table->foreign('locale_parent_id')->references('id')->on('menus');
            $table->unique(['locale_parent_id', 'locale']);
        });
    }

    public function down()
    {
        Schema::table('menus', function ($table) {
            $table->dropForeign(['locale_parent_id']);
            $table->dropColumn('locale_parent_id');
            $table->dropUnique(['locale_parent_id', 'locale']);
        });
    }
}
