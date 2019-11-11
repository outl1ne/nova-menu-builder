# Upgrading from Nova Menu Builder 1.0 to 2.0

## Configuration

The configuration passed into the `MenuBuilder` tool constructor is no longer accepted. All configuration now lives in `config/nova-menu.php`.

Publish the new configuration file and move all your configuration options from the constructor to the config file.

```bash
# Publish the configuration file and edit it to your preference
# Optionally add --force if you want to overwrite the existing file
php artisan vendor:publish --tag=nova-menu-builder-config
```

How the new configuration looks like:

```php
// New locales
'locales' => [
  'en_US' => 'English',
],

// or using a closure:

'locales' => function() {
  return nova_lang_get_locales();
}

// or if you want to use a function, but still be able to cache it:

'locales' => '\App\Configuration\NovaMenuConfiguration@getLocales',
'locales' => 'nova_lang_get_locales',

// New linkable models:
'linkable_models' => [
  // ...
],
```

## Table names

The table names are now configurable through the configuration file.

The new defaults are `nova_menu_menus` and `nova_menu_menu_items`. If you wish to continue using the old names, please edit the configuration file to use `menus` and `menu_items` table names intead.

**NB! Keep in mind that the configuration must be changed before running the migrations as the migration take the configured names for tables.**

```php
'menus_table_name' => 'menus',
'menu_items_table_name' => 'menu_items',
```

## Migrations

Migrations are now loaded automatically. This aims to reduce the number of migration files inside the end project's folder and keep them more relevant.

The migration names are no longer dynamic and running `php artisan migrate` **will actually delete the original migration from your project source automatically**, so don't be alarmed to see a missing migration in your Git changelog.

Run `php artisan migrate` to run one new migration and automatically delete the old migration file.
