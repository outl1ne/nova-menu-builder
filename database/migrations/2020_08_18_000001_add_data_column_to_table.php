<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use OptimistDigital\MenuBuilder\MenuBuilder;

class AddDataColumnToTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table(MenuBuilder::getMenuItemsTableName(), function ($table) {
            $table->json('data')->nullable();
        });
    }

    public function down()
    {
        Schema::table(MenuBuilder::getMenuItemsTableName(), function ($table) {
            $table->dropColumn('data');
        });
    }
}
