<?php

namespace Workup\MenuBuilder;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Nova;
use Workup\MenuBuilder\Commands\CreateMenuItemType;
use Workup\MenuBuilder\Http\Middleware\Authorize;
use Workup\NovaTranslationsLoader\LoadsNovaTranslations;

class MenuBuilderServiceProvider extends ServiceProvider
{
    use LoadsNovaTranslations;

    public function boot()
    {
        // Load views
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'nova-menu');

        // Load translations
        $this->loadTranslations(__DIR__ . '/../resources/lang', 'nova-menu-builder', true);

        // Load migrations
        if (config('nova-menu.auto_load_migrations', true)) {
            $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        }

        // Publish data
        $this->publishes([__DIR__ . '/../database/migrations' => database_path('migrations')], 'nova-menu-builder-migrations');
        $this->publishes([__DIR__ . '/../config' => config_path()], 'nova-menu-builder-config');

        // Register resource
        Nova::resources([
            MenuBuilder::getMenuResource()
        ]);

        // Register routes
        $this->app->booted(function () {
            $this->routes();
        });

        Validator::extend('unique_menu', function ($attribute, $value, $parameters, $validator) {
            // Check if menu has unique attribute defined.
            $uniqueParams = join(',', $parameters);

            return Validator::make([$attribute => $value], ['slug' => "unique:$uniqueParams"])
                ->validate();
        }, '');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/nova-menu.php', 'nova-menu'
        );
    }

    protected function routes()
    {
        if ($this->app->routesAreCached()) return;

        Route::middleware(['nova', Authorize::class])
            ->prefix('nova-vendor/nova-menu')
            ->group(__DIR__ . '/../routes/backend.php');

        Route::middleware(['api'])
            ->prefix(config('nova-menu.api_prefix', 'api'))
            ->group(__DIR__ . '/../routes/frontend.php');
    }
}
