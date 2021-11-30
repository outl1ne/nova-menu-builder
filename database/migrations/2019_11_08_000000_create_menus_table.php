<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Workup\MenuBuilder\MenuBuilder;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    public function up()
    {
        Schema::create(MenuBuilder::getMenusTableName(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->json('slug');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists(MenuBuilder::getMenusTableName());
    }
}
