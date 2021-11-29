<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Workup\MenuBuilder\MenuBuilder;
use Illuminate\Database\Migrations\Migration;

class CreateMenuItemsTable extends Migration
{
    public function up()
    {
        Schema::create(MenuBuilder::getMenuItemsTableName(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('menu_id')->nullable();
            $table->unsignedBigInteger('parent_id')->nullable();

            $table->string('item_type');
            $table->unsignedBigInteger('entity_id')->nullable();
            $table->unsignedBigInteger('entity_item_id')->nullable();
            $table->boolean('is_index')->default(false);

            $table->string('label');
            $table->string('locale');
            $table->string('slug');
            $table->string('url')->nullable();
            $table->string('class')->nullable();
            $table->json('data')->nullable();
            $table->string('target')->default('_self');
            $table->integer('order');
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->foreign('menu_id')
                ->references('id')
                ->on(MenuBuilder::getMenusTableName())
                ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists(MenuBuilder::getMenuItemsTableName());
    }
}
