<?php

namespace Workup\MenuBuilder;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;
use Laravel\Nova\Http\Middleware\Authenticate;
use Workup\MenuBuilder\Http\Middleware\Authorize;
use Workup\NovaTranslationsLoader\LoadsNovaTranslations;

class MenuBuilderServiceProvider extends ServiceProvider
{
    use LoadsNovaTranslations;

    public function boot()
    {
        $this->config();

        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            //
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    protected function config(): void
    {
        // Load translations
        $this->loadTranslations(__DIR__ . '/../lang', 'nova-menu-builder', true);

        // Publish data
        if ($this->app->runningInConsole()) {
            $this->publishes([__DIR__ . '/../config' => config_path()], 'nova-menu-builder-config');
        }

        $this->mergeConfigFrom(
            __DIR__ . '/../config/nova-menu-builder.php',
            'nova-menu-builder',
        );

        // Register resource
//        Nova::resources([
//            Settings::getMenuResource(),
//        ]);

        Validator::extend('unique_menu', function ($attribute, $value, $parameters, $validator) {
            // Check if menu has unique attribute defined.
            $uniqueParams = join(',', $parameters);

            return Validator::make([$attribute => $value], ['slug' => "unique:$uniqueParams"])
                ->validate();
        }, '');
    }

    protected function routes(): void
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Nova::router(['nova', Authorize::class], 'menus')
            ->group(__DIR__ . '/../routes/inertia.php');

        Route::middleware(['nova', Authorize::class])
            ->prefix('nova-vendor/nova-menu-builder')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
