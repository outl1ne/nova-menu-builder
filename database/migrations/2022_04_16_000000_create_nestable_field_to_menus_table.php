<?php

use Workup\MenuBuilder\Settings;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    public function up()
    {
        if (!Schema::hasColumn(Settings::getMenuItemsTableName(), 'nestable')) {
            Schema::table(Settings::getMenuItemsTableName(), function (Blueprint $table) {
                $table->boolean('nestable')->default(1);
            });
        }
    }

    public function down()
    {
        Schema::dropColumns(Settings::getMenuItemsTableName(), ['nestable']);
    }
};
