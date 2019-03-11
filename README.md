# Nova Menu Builder

Continuation of [Infinety/Nova-Menu-Builder](https://github.com/InfinetyEs/Nova-Menu-Builder).

This [Laravel Nova](https://github.com/InfinetyEs/Nova-Menu-Builder) package allows you to create and manage menus and menu items.

## Features

- Managing multiple menus
- Managing menu items
- Re-ordering menu-items
- Nesting menu-items
- Creating custom `MenuLinkable` classes that allow picking of custom models (ie Pages)

## Installation

Install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via Composer:

```bash
composer require optimistdigital/nova-menu-builder
```

Then publish the database migration and run migrate:

```bash
php artisan vendor:publish --tag=migrations
php artisan migrate
```

Register the tool with Nova. This is typically done in the `tools()` method of the `NovaServiceProvider`.

```php
// in app/Providers/NovaServiceProvider.php

public function tools()
{
    return [
        // ...
        new \OptimistDigital\MenuBuilder\MenuBuilder(),
    ];
}
```

## Usage

### Custom `MenuLinkable` classes

Nova menu builder allows you to create a select field for custom models (ie Pages or Products).

First, create a class that extends the `OptimistDigital\MenuBuilder\Classes\MenuLinkable` class.

Secondly, register the class in `AppServiceProvider` like so (you can do it elsewhere as well, but this is usually a good entry point):

```php
public function boot()
{
    \OptimistDigital\MenuBuilder\Http\Controllers\MenuController::linkableModels([
        \App\Classes\MenuItemProductLink::class // Your class to register
    ]);
}
```

In the created class, overwrite the following methods:

```php
/**
 * Get the menu link identifier that can be used to tell different custom
 * links apart (ie 'page' or 'product').
 *
 * @return string
 **/
public static function menuLinkIdentifier(): string {
    // Example usecase
    // return 'page';
    return '';
}


/**
 * Get menu link name shown in  a dropdown in CMS when selecting link type
 * ie ('Product Link').
 *
 * @return string
 **/
public static function menuLinkName(): string {
    // Example usecase
    // return 'Page Link';
    return '';
}


/**
 * Get list of options shown in a select dropdown.
 *
 * Should be a map of [key => value, ...], where key is a unique identifier
 * and value is the displayed string.
 *
 * @return array
 **/
public static function menuLinkOptions(): array {
    // Example usecase
    // return Page::all()->pluck('name', 'id');
    return [];
}

/**
 * Get the subtitle value shown in CMS menu items list.
 *
 * @param string $value
 * @return string
 **/
public static function menuLinkSubtitleDisplayValue(string $value): string {
    // Example usecase
    // return 'Page: ' . Page::find($value)->name;
    return $value;
}

/**
 * Get the value of the link visible to the front-end.
 *
 * Can be anything. It is up to you how you will handle parsing it.
 *
 * @param string $value The key from options list that was selected.
 * @return any
 **/
public static function menuLinkValue(string $value) {
    // Example usecase
    // return Page::find($value);
    return $value;
}
```

### Returning the menus in a JSON API

If you want to return the menus in a separate API endpoint, you can just call an existing method that handles all the formatting.

```php
Route::get('/menus', '\OptimistDigital\MenuBuilder\Http\Controllers\MenuController@getMenus');
```

## Localization

### Menu locales

To define locales that you can select for your menus, please register them as follows in `AppServiceProvider`:

```php
public function boot()
{
    \OptimistDigital\MenuBuilder\Http\Resources\MenuResource::locales([
        'en_US' => 'English',
        'et_EE' => 'Estonian'
    ]);
}
```

Set your translations in the corresponding xx.json file located in /resources/lang/vendor/nova

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Tarvo Reinpalu](https://github.com/Tarpsvo)
- [Eric Lagarda (original nova-menu-builder)](https://github.com/Krato)
- [Ralph Huwiler (vue-nestable)](https://github.com/rhwilr/vue-nestable)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
