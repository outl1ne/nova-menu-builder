<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use OptimistDigital\MenuBuilder\MenuBuilder;

class DropSlugUniqueConstraint extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Drop slug unique constraint
        try {
            Schema::table(MenuBuilder::getMenusTableName(), function (Blueprint $table) {
                $table->dropUnique('nova_menu_menus_slug_locale_unique');
            });
        } catch (Exception $exception) {
        }

    }

    public function down()
    {
        try {
            Schema::table(MenuBuilder::getMenusTableName(), function (Blueprint $table) {
                // Keep the original unique name
                $table->unique(['slug'], 'nova_menu_menus_slug_locale_unique');
            });
        } catch (Exception $e) {
        }
    }
}
