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
        // When Nova Menu Builder was first released, the migration names were created from
        // timestamps at the time of publishing. Since then, we've moved to fixed migration names.
        //
        // This code checks if there's an existing migration and deletes it from both the filesystem and the database
        $existingMigration = DB::select("SELECT migration AS name FROM migrations WHERE migration LIKE '%create_menus_table'");
        if (count($existingMigration) > 0) {
            $migrationName = $existingMigration[0]->name;
            File::delete(database_path("migrations/$migrationName.php"));
            DB::statement('DELETE FROM migrations WHERE migration = "' . $migrationName . '"');
            return;
        }

        Schema::create(MenuBuilder::getMenusTableName(), function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug');
            $table->string('locale');
            $table->timestamps();

            $table->unique(['slug', 'locale']);
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
