<?php

use Illuminate\Support\Facades\Schema;
use OptimistDigital\MenuBuilder\MenuBuilder;
use OptimistDigital\MenuBuilder\Models\Menu;
use Illuminate\Database\Migrations\Migration;
use OptimistDigital\MenuBuilder\Models\MenuItem;

class ReworkLocaleHandling extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table(MenuBuilder::getMenuItemsTableName(), function ($table) {
            $table->string('locale')->nullable(true);
        });

        $menuItems = MenuItem::all();
        $menuItems->each(function (MenuItem $menuItem) {
            $menuItem->locale = $menuItem->menu->locale;
            $menuItem->save();
        });

        Schema::table(MenuBuilder::getMenuItemsTableName(), function ($table) {
            $table->string('locale')->nullable(false)->change();
        });

        Schema::table(MenuBuilder::getMenusTableName(), function ($table) {
            $table->dropColumn('locale');
            $table->dropColumn('locale_parent_id');
        });
    }

    public function down()
    {
        Schema::table(MenuBuilder::getMenusTableName(), function ($table) {
            $table->string('locale')->nullable(true);
        });

        $menus = Menu::all();
        $menus->each(function (Menu $menu) {
            $menu->locale = $menu->rootMenuItems->first()->locale;
            $menu->save();
        });

        Schema::table(MenuBuilder::getMenusTableName(), function ($table) {
            $table->string('locale')->nullable(false)->change();
        });

        Schema::table(MenuBuilder::getMenuItemsTableName(), function ($table) {
            $table->dropColumn('locale');
        });
    }
}
