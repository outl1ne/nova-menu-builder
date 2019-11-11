<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use OptimistDigital\MenuBuilder\MenuBuilder;

class AddLocaleParentIdToTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table(MenuBuilder::getMenusTableName(), function ($table) {
            $table->bigInteger('locale_parent_id')->nullable()->unsigned();

            $table->foreign('locale_parent_id')->references('id')->on(MenuBuilder::getMenusTableName());
            $table->unique(['locale_parent_id', 'locale']);
        });
    }

    public function down()
    {
        Schema::table(MenuBuilder::getMenusTableName(), function ($table) {
            $table->dropUnique(['locale_parent_id', 'locale']);
            $table->dropForeign(['locale_parent_id']);
            $table->dropColumn('locale_parent_id');
        });
    }
}
