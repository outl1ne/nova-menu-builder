<?php

namespace Outl1ne\MenuBuilder;

use Laravel\Nova\Nova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;
use Outl1ne\MenuBuilder\Http\Middleware\Authorize;
use Outl1ne\MenuBuilder\Commands\CreateMenuItemType;
use Outl1ne\NovaTranslationsLoader\LoadsNovaTranslations;

class MenuBuilderServiceProvider extends ServiceProvider
{
    use LoadsNovaTranslations;

    public function boot()
    {
        // Load translations
        $this->loadTranslations(__DIR__ . '/../lang', 'nova-menu-builder', true);

        // Load migrations
        if (config('nova-menu.auto_load_migrations', true)) {
            $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        }

        // Publish data
        $this->publishes([__DIR__ . '/../database/migrations' => database_path('migrations')], 'nova-menu-builder-migrations');
        $this->publishes([__DIR__ . '/../config' => config_path()], 'nova-menu-builder-config');

        // Register commands
        if ($this->app->runningInConsole()) {
            $this->commands([
                CreateMenuItemType::class
            ]);
        }

        // Register resource
        Nova::resources([
            MenuBuilder::getMenuResource(),
        ]);

        Validator::extend('unique_menu', function ($attribute, $value, $parameters, $validator) {
            // Check if menu has unique attribute defined.
            $uniqueParams = join(',', $parameters);
            return (MenuBuilder::getMenus()[$value]['unique'] ?? true)
                // If unique attribute is true or not defined, call unique validator
                ? Validator::make([$attribute => $value], ['slug' => "unique:$uniqueParams"])->validate()
                : true;
        }, '');
    }

    public function register()
    {
        $this->registerRoutes();

        $this->mergeConfigFrom(
            __DIR__ . '/../config/nova-menu.php',
            'nova-menu',
        );
    }
    protected function registerRoutes()
    {
        // Register nova routes
        Nova::router()->group(function ($router) {
            $path = '/menus';
            $router->get($path, fn () => inertia('NovaMenu', ['basePath' => $path]));
        });

        if ($this->app->routesAreCached()) return;

        Route::middleware(['nova', Authorize::class])
            ->namespace('Outl1ne\MenuBuilder\Http\Controllers')
            ->prefix('nova-vendor/nova-menu')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
