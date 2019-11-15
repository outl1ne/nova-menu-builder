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

            $table->foreign('locale_parent_id', 'menus_locale_parent_id_foreign')->references('id')->on(MenuBuilder::getMenusTableName());
            $table->unique(['locale_parent_id', 'locale'], 'menus_locale_parent_id_locale_unique');
        });
    }

    public function down()
    {
        Schema::table(MenuBuilder::getMenusTableName(), function ($table) {
            $table->dropForeign('menus_locale_parent_id_foreign');
            $table->dropUnique('menus_locale_parent_id_locale_unique');
            $table->dropColumn('locale_parent_id');
        });
    }
}
