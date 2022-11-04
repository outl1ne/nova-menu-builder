<?php

namespace Workup\MenuBuilder;

use Laravel\Nova\Nova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;
use Workup\MenuBuilder\Http\Middleware\Authorize;
use Workup\NovaTranslationsLoader\LoadsNovaTranslations;

class MenuBuilderServiceProvider extends ServiceProvider
{
    use LoadsNovaTranslations;

    public function boot()
    {
        // Load views
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'nova-menu-builder');

        // Load translations
        $this->loadTranslations(__DIR__ . '/../resources/lang', 'nova-menu-builder', true);

        // Publish data
        $this->publishes([__DIR__ . '/../config' => config_path()], 'nova-menu-builder-config');

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
        $this->mergeConfigFrom(__DIR__ . '/../config/nova-menu-builder.php', 'nova-menu-builder');
    }

    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova', Authorize::class])
            ->prefix('nova-vendor/nova-menu-builder')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
