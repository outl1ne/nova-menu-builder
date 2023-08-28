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
        $this->loadTranslations(__DIR__ . '/../lang', 'nova-menu-builder', true);

        // Publish data
        $this->publishes([__DIR__ . '/../config' => config_path()], 'nova-menu-builder-config');

        // Register resource
        Nova::resources([
            MenuBuilder::getMenuResource(),
        ]);

        Validator::extend('unique_menu', function ($attribute, $value, $parameters, $validator) {
            // Check if menu has unique attribute defined.
            $uniqueParams = join(',', $parameters);

            return Validator::make([$attribute => $value], ['slug' => "unique:$uniqueParams"])
                ->validate();
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

        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova', Authorize::class])
            ->namespace('Outl1ne\MenuBuilder\Http\Controllers')
            ->prefix('nova-vendor/nova-menu')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
