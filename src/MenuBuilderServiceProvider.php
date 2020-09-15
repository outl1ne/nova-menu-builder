<?php

namespace OptimistDigital\MenuBuilder;

use Laravel\Nova\Nova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use OptimistDigital\MenuBuilder\Http\Middleware\Authorize;
use OptimistDigital\NovaTranslationsLoader\NovaTranslationsLoader;

class MenuBuilderServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // Load views
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'nova-menu');

        // Load migrations
        if (config('nova-menu.auto_load_migrations', true)) {
            $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        }

        $this->app->booted(function () {
            $this->routes();
        });

        // Publish data
        $this->publishes([__DIR__ . '/../database/migrations' => database_path('migrations')], 'nova-menu-builder-migrations');
        $this->publishes([__DIR__ . '/../config' => config_path()], 'nova-menu-builder-config');

        // Load translations
        NovaTranslationsLoader::loadTranslations(__DIR__ . '/../resources/lang', 'nova-menu-builder', true);

        // Register resource
        Nova::resources([
            MenuBuilder::getMenuResource(),
        ]);
    }

    /**
     * Register the tool's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) return;

        Route::middleware(['nova', Authorize::class])
            ->namespace('OptimistDigital\MenuBuilder\Http\Controllers')
            ->prefix('nova-vendor/nova-menu')
            ->group(__DIR__ . '/../routes/api.php');
    }

    /**
     * Publish required migration
     */
    private function publishMigrations()
    {
    }

    /**
     * Publish sidebar menu item template
     */
    private function publishViews()
    {
    }

    /**
     * Publish config
     */
    private function publishConfig()
    {
    }
}
