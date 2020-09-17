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
        // Add `locale` column to menu items
        Schema::table(MenuBuilder::getMenuItemsTableName(), function ($table) {
            $table->string('locale')->nullable(true);
        });

        // Add `locale` value to all menu items
        $menuItems = MenuItem::all();
        $menuItems->each(function (MenuItem $menuItem) {
            $menuItem->locale = $menuItem->menu->locale;
            $menuItem->save();
        });

        // Make the `locale` column non-nullable
        Schema::table(MenuBuilder::getMenuItemsTableName(), function ($table) {
            $table->string('locale')->nullable(false)->change();
        });

        // De-dupe menus
        $rootMenus = Menu::where('locale_parent_id', null)->get();
        $rootMenus->forEach(function (Menu $rootMenu) {
            $subMenus = Menu::where('locale_parent_id', $rootMenu->id)->get();
            $subMenus->forEach(function (Menu $subMenu) use ($rootMenu) {
                // Move all menu items to root menu
                MenuItem::where('menu_id', $subMenu->id)
                    ->update(['menu_id' => $rootMenu->id]);

                // Delete sub menu
                $subMenu->forceDelete();
            });
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
