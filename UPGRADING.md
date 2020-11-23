# Upgrading from Nova Menu Builder 2.0/3.0 to 4.0/5.0

## Database changes

The locale system has been reworked.

The Menu models table no longer has `locale` and `locale_parent_id` columns. Instead, the menu items table has a `locale` column.

The Menu Item models table no longer has a `parameters` column.

The migration `2020_09_15_000000_rework_locale_handling` will take care of migrating to the new structure with no expected data loss (except for the `parameters` column, which will be copied into `data`).

NB! If you are currently using both `data` (for fields) and `parameters`, **you will lose data**!

**Backup your database before running the migration!**

If you've read the above and have confirmed you're fine with losing `parameters`, just run `php artisan migrate` and you're set.

## Menus definition

There's some config changes. One of the main ones is the definition of `menus`.

When previously the menu `slug` was a plain-text field, it has now become a Select type of field. The developer must define the possible menu options in the config file, under the `menus` key.

As such:

```php
/*
|--------------------------------------------------------------------------
| Menus
|--------------------------------------------------------------------------
|
| Set all the possible menus in a keyed array of arrays with the options
| 'name' and optionally 'menu_item_types'.
|
| For example: ['header' => ['name' => 'Header', 'menu_item_types' => []]]
|
*/

'menus' => [
    'header' => [
        'name' => 'Header',
        'menu_item_types' => [] // Here you can define menu-specific types
    ]
],
```

## Misc configuration changes

The default `resource` has changed its namespace. You should change the `resource` option in the config:

```php
// From:
'resource' => OptimistDigital\MenuBuilder\Http\Resources\MenuResource::class,

// To:
'resource' => OptimistDigital\MenuBuilder\Nova\Resources\MenuResource::class,
```

## MenuLinkables are now MenuItemTypes

While the contents of MenuLinkables have remained largely the same, they have now been renamed to `MenuItemType`s. Instead of extending `MenuLinkable`, the class must now extend `MenuItemSelectType` or `MenuItemTextType` (depending on the use-case).

If you want to display a Select field with options, use `MenuItemSelectType`. If you want to display some custom fields with only a name field, use `MenuItemTextType`.

In the config, the key `linkable_models` has become `menu_item_types`, but it works just the same.

```php
// Before:
'menu_linkables' => [],

// After:
'menu_item_types' => [],
```

**NB!** The `parameters` column is now gone.

So, do the following changes to your `MenuLinkable` classes:

```php
// Before:
use OptimistDigital\MenuBuilder\Classes\MenuLinkable;

class MenuItemProductLink extends MenuLinkable
{
  // ...

    public static function getDisplayValue($value = null, array $parameters = null)
    {
        $product = Product::find($value);
        return empty($product) ? 'No product linked' : static::getName() . ': ' . $product->name;
    }

    public static function getValue($value = null, $parameters = null)
    {
        return Product::find($value);
    }
}

// After:
use OptimistDigital\MenuBuilder\MenuItemTypes\MenuItemSelectType;

class MenuItemProductLink extends MenuItemSelectType
{
    // ...

    // If you were using 2.0: $parameters is now $data
    // If you were using 3.0: $parameters argument is removed!
    public static function getDisplayValue($value = null, $data = null)
    {
        $product = Product::find($value);
        return empty($product) ? 'No product linked' : static::getName() . ': ' . $product->name;
    }

    // If you were using 2.0: $parameters is now $data
    // If you were using 3.0: $parameters argument is removed!
    public static function getValue($value = null, $data = null) // $parameters is now $data!
    {
        return Product::find($value);
    }
}
```

## Renamed helper(s)

The helper `nova_get_menu()` has been renamed to `nova_get_menu_by_slug()`.

## Good luck

This should be it! You're good to go!

Should you have any problems, do open an issue and I'll try my best to help.
