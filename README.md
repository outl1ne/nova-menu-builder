# Nova Menu Builder

This [Laravel Nova](https://github.com/InfinetyEs/Nova-Menu-Builder) package allows you to create and manage menus and menu items.

Continuation of [Infinety/Nova-Menu-Builder](https://github.com/InfinetyEs/Nova-Menu-Builder).

## Features

- Managing menus (w/ customizable locales) and menu items
- Nesting and re-ordering of menu-items
- Creation of custom link options (ie links to models such as Page or Product)

## Screenshots

![Menu List](docs/menu-list.png)

![View Menu](docs/view-menu.png)

![Menu Item Edit](docs/menu-item-edit.png)

## Installation

Install the package in a Laravel Nova project via Composer:

```bash
composer require optimistdigital/nova-menu-builder
```

Publish the database migration(s) and run migrate:

```bash
php artisan vendor:publish --tag=migrations
php artisan migrate
```

Register the tool with Nova in the `tools()` method of the `NovaServiceProvider`:

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

Secondly, register the class in the constructor of `MenuBuilder` in `NovaServiceProvider`'s `tools()` function like so:

```php
// in app/Providers/NovaServiceProvider.php

public function tools()
{
    return [
        // ...
        new \OptimistDigital\MenuBuilder\MenuBuilder([
            'linkable_models' => [
                \App\Classes\CustomMenuLinkable::class,
            ],
            'locales' => null, // Optional, default is ['en_US' => 'English']
        ]),
    ];
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
public static function getIdentifier(): string {
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
public static function getName(): string {
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
public static function getOptions(): array {
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
public static function getDisplayValue(string $value): string {
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
public static function getValue(string $value) {
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

### Menu locale options

To define locales that you can select for your menus, please register them in the constructor of `MenuBuilder` in `NovaServiceProvider`'s `tools()` function:

```php
// in app/Providers/NovaServiceProvider.php

public function tools()
{
    return [
        // ...
        new \OptimistDigital\MenuBuilder\MenuBuilder([
            'linkable_models' => null, // Optional
            'locales' => [
               'en_US' => 'English',
               'et_EE' => 'Estonian',
            ],
        ]),
    ];
}
```

## Credits

- [Tarvo Reinpalu](https://github.com/Tarpsvo)
- [Eric Lagarda (original nova-menu-builder)](https://github.com/Krato)
- [Ralph Huwiler (vue-nestable)](https://github.com/rhwilr/vue-nestable)

## License

Nova menu builder is open-sourced software licensed under the [MIT license](LICENSE.md).
