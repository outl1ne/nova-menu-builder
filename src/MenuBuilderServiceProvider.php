<?php

namespace OptimistDigital\MenuBuilder;

use Laravel\Nova\Nova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use OptimistDigital\MenuBuilder\Http\Middleware\Authorize;

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

        $this->publishMigrations();
        $this->publishViews();
        $this->publishConfig();

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
        $this->publishes([
            __DIR__ . '/../database/migrations' => database_path('migrations'),
        ], 'nova-menu-builder-migrations');
    }

    /**
     * Publish sidebar menu item template
     */
    private function publishViews()
    {
        $this->publishes([
            __DIR__ . '/../resources/views/' => resource_path('views/vendor/nova-menu'),
        ], 'nova-menu-builder-views');
    }

    /**
     * Publish config
     */
    private function publishConfig()
    {
        $this->publishes([
            __DIR__ . '/../config/' => config_path(),
        ], 'nova-menu-builder-config');
    }


    // ------------------------------
    // -- Translations
    // ------------------------------
    protected function attemptToLoadTranslations($locale, $from)
    {
        $filePath = $from === 'local'
            ? __DIR__ . '/../resources/lang/' . $locale . '.json'
            : resource_path('lang/vendor/nova-sortable') . '/' . $locale . '.json';

        $localeFileExists = File::exists($filePath);
        if ($localeFileExists) {
            Nova::translations($filePath);
            return true;
        }
        return false;
    }

    protected function translations()
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([__DIR__ . '/../resources/lang' => resource_path('lang/vendor/nova-sortable')], 'translations');
        } else if (method_exists('Nova', 'translations')) {
            $locale = app()->getLocale();
            $fallbackLocale = config('app.fallback_locale');

            if ($this->attemptToLoadTranslations($locale, 'project')) return;
            if ($this->attemptToLoadTranslations($locale, 'local')) return;
            if ($this->attemptToLoadTranslations($fallbackLocale, 'project')) return;
            if ($this->attemptToLoadTranslations($fallbackLocale, 'local')) return;
            $this->attemptToLoadTranslations('en', 'local');
        }
    }
}
