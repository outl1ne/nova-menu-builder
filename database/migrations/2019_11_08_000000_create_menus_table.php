<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use OptimistDigital\MenuBuilder\MenuBuilder;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(MenuBuilder::getMenusTableName(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug');
            $table->string('locale');
            $table->timestamps();

            $table->unique(['slug', 'locale'], 'nova_menu_menus_slug_locale_unique');
        });

        Schema::create(MenuBuilder::getMenuItemsTableName(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('menu_id')->nullable();
            $table->string('name');
            $table->string('class')->nullable();
            $table->string('value')->nullable();
            $table->string('target')->default('_self');
            $table->json('parameters')->nullable();
            $table->integer('parent_id')->nullable();
            $table->integer('order');
            $table->boolean('enabled')->default(1);
            $table->timestamps();

            $table->foreign('menu_id')->references('id')->on(MenuBuilder::getMenusTableName())->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(MenuBuilder::getMenuItemsTableName());
        Schema::dropIfExists(MenuBuilder::getMenusTableName());
    }
}
