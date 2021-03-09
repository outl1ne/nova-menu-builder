<?php

namespace OptimistDigital\MenuBuilder;

use Illuminate\Container\Container;
use Illuminate\Contracts\Translation\Loader;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Nova;
use OptimistDigital\MenuBuilder\Commands\CreateMenuItemType;
use OptimistDigital\MenuBuilder\Http\Middleware\Authorize;

class MenuBuilderServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Load views
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'nova-menu');

        // Load translations
        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'nova-menu-builder');
        $this->loadNovaTranslation();

        // Load migrations
        if (config('nova-menu.auto_load_migrations', true)) {
            $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        }

        // Publish data
        $this->publishes(
            [__DIR__.'/../resources/lang' => App::resourcePath('lang/vendor/nova-menu-builder')],
            ['nova-menu-builder', 'lang', 'nova-menu-builder-lang']
        );
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
            MenuBuilder::getMenuResource()
        ]);

        // Register routes
        $this->app->booted(function () {
            $this->routes();
        });

        Validator::extend('unique_menu', function ($attribute, $value, $parameters, $validator) {
            // Check if menu has unique attribute defined.
            $uniqueParams = join(',', $parameters);
            return (MenuBuilder::getMenus()[$value]['unique'] ?? true)
                // If unique attribute is true or not defined, call unique validator
                ? Validator::make([$attribute => $value], ['slug' => "unique:$uniqueParams"])->validate()
                : true;
        }, '');
    }

    protected function loadNovaTranslation()
    {
        Nova::serving(function () {
            /** @var Loader $loader */
            $loader = Container::getInstance()->make('translation.loader');
            Nova::translations(
                array_merge(
                    Arr::dot($loader->load('en', 'nova', 'nova-menu-builder'), 'nova-menu-builder::'),
                    Arr::dot($loader->load(Config::get('app.fallback_locale'), 'nova', 'nova-menu-builder'),
                        'nova-menu-builder::'),
                    Arr::dot($loader->load(App::getLocale(), 'nova', 'nova-menu-builder'), 'nova-menu-builder::')
                )
            );
        });
    }

    protected function routes()
    {
        if ($this->app->routesAreCached()) return;

        Route::middleware(['nova', Authorize::class])
            ->namespace('OptimistDigital\MenuBuilder\Http\Controllers')
            ->prefix('nova-vendor/nova-menu')
            ->group(__DIR__ . '/../routes/api.php');
    }
}
