# Nova Menu Builder

Continuation of [Infinety/Nova-Menu-Builder](https://github.com/InfinetyEs/Nova-Menu-Builder).

This [Laravel Nova](https://github.com/InfinetyEs/Nova-Menu-Builder) allows you to create and manage menus and menu items.

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

## Usage

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

## Localization

Set your translations in the corresponding xx.json file located in /resources/lang/vendor/nova

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Tarvo Reinpalu](https://github.com/Tarpsvo)
- [Eric Lagarda (original nova-menu-builder)](https://github.com/Krato)
- [Ralph Huwiler (vue-nestable)](https://github.com/rhwilr/vue-nestable)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
