# Upgrading from Nova Menu Builder 3.0 to 4.0

## Database changes

The locale system has been reworked.

The Menu models table no longer has `locale` and `locale_parent_id` columns. Instead, the menu items table has a `locale` column.

The migration `2020_09_15_000000_rework_locale_handling` will take care of migrating to the new structure with no expected data loss (except for the `parameters` column).

Just run `php artisan migrate` and you're set.

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

## MenuLinkables are now MenuItemTypes

While the contents of MenuLinkables have remained largely the same, they have now been renamed to `MenuItemType`s.

Instead of extending `MenuLinkable`, the class must now extend `MenuItemSelectType` or `MenuItemTextType` (depending on the use-case).

If you want to display a Select field with options, use `MenuItemSelectType`. If you want to display some custom fields with only a name field, use `MenuItemTextType`.

In the config, the key `linkable_models` has become `menu_item_types`, but it works just the same.

The `parameters` parameter is now gone.

## Renamed helper(s)

The helper `nova_get_menu()` has been renamed to `nova_get_menu_by_slug()`.

## Good luck

This should be it! You're good to go!
