<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use OptimistDigital\MenuBuilder\MenuBuilder;
use Illuminate\Database\Migrations\Migration;

class CreateNestableFieldToMenusTable extends Migration
{
    public function up()
    {
        if (!Schema::hasColumn(MenuBuilder::getMenuItemsTableName(), 'nestable')) {
            Schema::table(MenuBuilder::getMenuItemsTableName(), function (Blueprint $table) {
                $table->boolean('nestable')->default(1);
            });
        }
    }

    public function down()
    {
        Schema::dropColumns(['nestable']);
    }
}
