# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.1.2] - 11-02-2022

### Changed

- Allow Laravel 9

## [6.1.1] - 07-02-2022

### Added

- Added French (fr) translations (thanks to [@Jimmylet](https://github.com/Jimmylet))

### Changed

- Improved "copy menu from" functionality logic when dealing with just one menu and/or locale
- Updated packages

## [6.1.0] - 2022-01-06

### Added

- Added "copy menu from" functionality which allows for easier menu duplication

### Changed

- Updated packages

## [6.0.5] - 2021-10-29

### Changed

- Fixed batch updates of MenuItems not triggering observer events
- Updated packages

## [6.0.4] - 2021-10-07

### Changed

- Fixed fields not resetting when changing link type
- Updated packages

## [6.0.3] - 2021-10-07

### Changed

- Fixed select and static url types throwing an unexpected validation error

## [6.0.2] - 2021-10-01

### Changed

- Fixed create/update menu item modal not triggering field updates after validation (thanks to [@HeJiaNong](https://github.com/HeJiaNong))
- Fixed MenuItem using invalid class binding for HasMany relationship definition (thanks to [@ExileofAranei](https://github.com/ExileofAranei))
- Fixed fields not correctly re-rendering after menu item type change (thanks to [@ExileofAranei](https://github.com/ExileofAranei))
- Improved validation error displaying logic
- Updated packages

## [6.0.1] - 2021-09-02

### Changed

- Updated packages

## [6.0.0] - 2021-08-10

### Changed

- Moved default menu item types into config (thanks to [@elerioja](https://github.com/elerioja))
- Updated packages

### Breaking change

When migrating from 5.X to 6.X, you have to add the default menu item types to your config file if you wish to continue to use them.

The config would look like this:

```php
'menu_item_types' => [
  \OptimistDigital\MenuBuilder\MenuItemTypes\MenuItemTextType::class,
  \OptimistDigital\MenuBuilder\MenuItemTypes\MenuItemStaticURLType::class,
  // ...
],
```

## [5.3.3] - 2021-06-18

### Changed

- Menu model now has `$fillable` properties `name` and `slug` (thanks to [@martin-ro](https://github.com/martin-ro))
- Fixed selected value not showing up in `<select>` input (thanks to [@mariuskli](https://github.com/mariuskli))

## [5.3.2] - 2021-05-14

### Added

- Added `max_depth` option to config that allows limiting the max depth of menu items

### Changed

- Fixed `getOptions` order not being respected

## [5.3.1] - 2021-05-14

### Added

- Added Vietnamese translations (thanks to [@ttungbmt](https://github.com/ttungbmt))
- Added ability to customize `uriKey` in overridden resource using the core `static uriKey()` function

### Changed

- Fixed locales callbacks, so `[SomeClass::class, 'getLocales']` should now work as expected (thanks to [@raraworks](https://github.com/raraworks))
- Fixed Arabic language translation files (thanks to [@omarhen](https://github.com/omarhen))
- Fixed BaseMenuItemType type definition (thanks to [@mgralikowski](https://github.com/mgralikowski))
- Updated packages

## [5.3.0] - 2021-03-26

### Added

- Added Arabic translations (thanks to [@omarhen](https://github.com/omarhen))

### Changed

- Fixed config callbacks, so `Class@method` should now work as expected (thanks to [@yuriy-martini](https://github.com/yuriy-martini))
- Consolidated old migrations into one main migration (thanks to [@yuriy-martini](https://github.com/yuriy-martini))
- Updated packages

## [5.2.5] - 2021-03-05

### Changed

- Fixed duplication in MySQL

## [5.2.4] - 2021-03-05

### Changed

- Fixed duplication in PostgreSQL
- Fixed nesting not working properly still

## [5.2.3] - 2021-03-05

### Changed

- Fixed migrations failing in PostgreSQL

## [5.2.2] - 2021-03-05

### Changed

- Fixed parent_id not being saved

## [5.2.1] - 2021-03-04

### Added

- Added ability to customize Menu model via config (thanks to [@Landish](https://github.com/Landish))

### Changed

- Fixed case where default MenuItem model was used instead of the configured one (thanks to [@rdaitan-cp](https://github.com/rdaitan-cp))
- Fixed unique menu slug validator not working on Update
- Fixed some more cases where wrong model was used
- Updated packages

## [5.2.0] - 2021-02-04

### Changed

**Requires `php artisan migrate` for these changes to work`**

- Added optional `unique` attribute to menus.
  ```php
      'header' => [
           'name' => 'Header',
           'unique' => false, // Defaults to true
           'menu_item_types' => []
      ],
  ```
- Fixed `ReworkLocale` migration exception
- Updated Navigation icon (thanks to [@harmenjanssen](https://github.com/harmenjanssen))

## [5.1.0] - 2021-01-21

### Added

- Added Dutch translations (thanks to [@harmenjanssen](https://github.com/harmenjanssen))

### Changed

- Fixed migrations for SQLite (thanks to [@bambamboole](https://github.com/bambamboole) and [@harmenjanssen](https://github.com/harmenjanssen))
- Fixed issue with Trix field not saving value
- Fixed compatibility with PHP 8 (`getValue` and `getDisplay` functions have new signatures, but this should not cause any problems)
- Update packages

## [5.0.1] - 2021-01-08

### Changed

- Fixed issue with fields not updating as expected when changing link type
- Fixed issue with fields that return an array
- Update packages

## [5.0.0] - 2020-11-23

### Changed

- Dropped PHP 7.1, Laravel 6 and Nova 2 support

## [4.1.2] - 2020-11-23

### Changed

- Fixed translations loading

## [4.1.1] - 2020-11-17

### Added

- Added german translations (thanks to [@manogi](https://github.com/manogi))

### Changed

- Fixed trailing comma issue with php 7.2.

## [4.1.0] - 2020-11-12

### Changed

- Pass `$locale` to `getValue` and `getDisplayValue` functions
- Fixed passing `$data` to `getValue`

#### NB! **Breaking**.

The new signature for `getDisplayValue` is:

```
public static function getDisplayValue($value = null, array $data = null, $locale)
```

The new signature for `getValue` is:

```
public static function getValue($value = null, array $data = null, $locale)
```

## [4.0.5] - 2020-11-03

### Changed

- Removed some 1.0 legacy code
- Upgraded nova-translations-loader
- Fixed translations publishing

## [4.0.4] - 2020-10-29

### Changed

- Fixed custom fields styles

## [4.0.3] - 2020-10-29

### Changed

- Removed helper texts from Multiselect
- Fixed modal overflow styles
- Fixed missing Multiselect styles
- Updated packages

## [4.0.2] - 2020-10-06

### Changed

- Fixed PHP 7.4 usage error
- Updated packages

## [4.0.1] - 2020-10-02

### Changed

- Fixed migrations in MariaDB (thanks to [@allantatter](https://github.com/allantatter))
- Updated packages

## [4.0.0] - 2020-09-18

If you want to upgrade from version 2.0 or 3.0, please consult [UPGRADING.md](UPGRADING.md) for instructions.

### Added

- The UI texts are now all translatable and customizable
- Added `menubuilder:type` command to ease the creation of custom types

### Changed

- `MenuLinkables` have been replaced with menu types
- Locale logic has been reworked - each locale is no longer a separate menu model
- UI has been reworked (lots of visual fixes and improvements)
- JSON parameters field has been removed
- Menu items can now be managed in both Detail and Edit views
- Fixed the error where the "Menus" sidebar item would become inactive when opening the detail or edit view of a menu
- `nova_get_menu` has been renamed to `nova_get_menu_by_slug`
- Hugely improved fields validation

## [3.0.3] - 2020-09-02

### Changed

- Fixed PHP 7.4 `fn` usage
- Fixed showing incorrect fields in update modal when changing menu item type

## [3.0.2] - 2020-09-01

### Changed

- Fixed nova-multiselect-field not working with new fields functionality

## [3.0.1] - 2020-08-25

### Changed

- Fixed updating menu item type
- Fixed custom fields css padding

## [3.0.0] - 2020-08-21

Major release due to breaking changes!

### Added

- Ability to add custom fields to MenuLinkable class (via `getFields(): array`) function (thanks to [@KasparRosin](https://github.com/KasparRosin))
- Ability to customize rules for menu items (via `getRules(): array`) function
- Added new `data` column to menu items table (`php artisan migrate` required)
- Added ability to provide custom `MenuItem` model
- Added ability to disable auto-loading of migrations
- Added a fourth parameter `$data` to `getDisplayValue()`

```
public static function getDisplayValue($value = null, array $parameters = null, array $data = null)
```

### Changed

- Updated packages

## [2.3.8] - 2020-06-29

### Changed

- Fix dropdown arrow design issue introduced in Nova 3.7.0
- Fix locale parent deletion (thanks to [@KasparRosin](https://github.com/KasparRosin))
- Updated packages

## [2.3.7] - 2020-05-25

### Changed

- Added optional `$locale` option to `nova_get_menu($menuSlug, $locale)` helper function

## [2.3.6] - 2020-04-24

### Changed

- Fixed locales not resolving on all field/filter queries

## [2.3.5] - 2020-04-20

### Added

- `LocaleFilter` from `nova-locale-field`

### Changed

- Updated packages

## [2.3.4] - 2020-03-20

### Changed

- Fixed 500 crash when submitting empty "create menu" form

## [2.3.3] - 2020-03-19

### Changed

- Fixed issue where some users experienced `parameters` being saved as an empty string instead of `null` on update

## [2.3.2] - 2020-03-05

### Added

- Fix not being able to create Static URLs

## [2.3.1] - 2020-03-05

### Added

- Support Nova 3.0 in `composer.json` requirements

## [2.3.0] - 2020-02-28

### Changed

- Replaced regular `select` input with `vue-multiselect` single-select that is searchable

## [2.2.3] - 2020-02-19

### Changed

- Fix migration issue with PostgreSQL (thanks to [@webbash](https://github.com/webbash))

## [2.2.2] - 2020-02-13

### Changed

- Fixed issue where some users experienced `parameters` being saved as an empty string instead of `null`

## [2.2.1] - 2020-01-27

### Changed

- Improved localization (thanks to [@veezex](https://github.com/veezex))
- Updated packages

## [2.2.0] - 2020-01-17

### Changed

- Pass `$parameters` to `getDisplayValue` (thanks to [@Ragash](https://github.com/Ragash))

NB! Breaking.

The new signature for `getDisplayValue` is:

```
public static function getDisplayValue($value = null, array $parameters = null)
```

## [2.1.5] - 2020-01-02

### Changed

- Fix broken SQL (capitalization issues) (thanks to [@stryaponoff](https://github.com/stryaponoff))

## [2.1.4] - 2019-12-16

### Changed

- Update nova-locale-field dependency to 2.0.0

## [2.1.3] - 2019-12-11

### Changed

- Duplicate now duplicates the item right below the original instead of putting it at the very end

## [2.1.2] - 2019-12-03

### Changed

- Allow menu items of all types to have parameters (thanks to [@jordythevulder](https://github.com/jordythevulder))

## [2.1.1] - 2019-12-02

### Changed

- Fixed invalid capitalization in API routes causing crash on case-sensitive operating systems

## [2.1.0] - 2019-11-25

### Added

- Duplicate functionality

### Changed

- Complete re-factor of the codebase
- Redesigned UI
- Updated packages

## [2.0.5] - 2019-11-21

### Changed

- Fix syntax error (thanks to [@PieterxJan](https://github.com/PieterxJan))

## [2.0.4] - 2019-11-15

### Changed

- Fixed latest migration's rollback not working due to wrong order of dropping foreign keys and indexes

## [2.0.3] - 2019-11-14

### Added

- Added functionality to collapse menu item's children

### Changed

- Fixed hardcoded column name (thanks to [@naska-it](https://github.com/naska-it))

## [2.0.2] - 2019-11-11

### Changed

- Fixed invalid validation rule crashing when updating a menu item

## [2.0.1] - 2019-11-11

### Changed

- Added names to migration indexes (uniques and foreign keys)

## [2.0.0] - 2019-11-11

NB! This release contains breaking changes. See [UPGRADING.md](UPGRADING.md) for instructions on how to upgrade from 1.0 to 2.0.

### Added

- Added support for [nova-lang](https://github.com/optimistdigital/nova-lang/)

### Changed

- Better localization support through `nova-locale-field`
- Moved all config options from tool constructor to `config/nova-menu.php`
- Updated all packages
- All migrations are now loaded automatically
  - Publishing migrations is not necessary anymore
  - Running `migrate` will delete the original migration from project source
- Table names are now configurable through `config/nova-menu.php`

## [1.4.2] - 2019-10-09

### Changed

- Fix modal flickering when data is updated (possibly caused by a Laravel Nova update)

## [1.4.1] - 2019-09-18

### Changed

- Fix Menu `slug` unique validation (thanks to [@zippoxer](https://github.com/zippoxer))

## [1.4.0] - 2019-09-12

### Changed

- Make Nova Resource class configurable (by [@ArroWsGM](https://github.com/ArroWsGM))
- Add templates and config publishing (by [@ArroWsGM](https://github.com/ArroWsGM))
- Enable access control via policy (by [@nemrutco](https://github.com/nemrutco))

## [1.3.3] - 2019-08-15

### Changed

- Fix MenuLinkable types

BREAKING!

Previous `string` enforcements failed in some cases, it is safer to just remove them. New type definitions for `getDisplayValue` and `getValue`:

```
public static function getDisplayValue($value = null)
public static function getValue($value = null, array $parameters = null)
```

## [1.3.2] - 2019-08-15

### Changed

- Fix MenuItemBase and MenuItemText function declaration discrepancy by [@MohamedLbn](https://github.com/MohamedLbn)

## [1.3.1] - 2019-07-19

### Changed

- Order menu items by 'order' value by [@kaareloun](https://github.com/kaareloun)

## [1.3.0] - 2019-06-13

### Added

- Add `MenuItemText` type for adding menu titles by [@kaareloun](https://github.com/kaareloun)

### Changed

- Refactor `MenuItemStaticURL` and `MenuLinkable` to use `MenuItemBase` base class by [@kaareloun](https://github.com/kaareloun)
- Fix select menus not showing "choose an option" by default
- Code cleanup

## [1.2.1] - 2019-06-07

### Changed

- Fix sidebar icon color by [@slavarazum](https://github.com/slavarazum)

## [1.2.0] - 2019-05-27

### Changed

- Add locale as parameter to `getOptions($locale)` method in `MenuLinkable` by [@slovenianGooner](https://github.com/slovenianGooner)

## [1.1.4] - 2019-05-09

### Changed

- Fix MenuBuilderServiceProvider class and file names as reported by [@Grafikart](https://github.com/Grafikart)

## [1.1.3] - 2019-05-08

### Changed

- Fixed missing `MenuItem` names in helper function return values

## [1.1.2] - 2019-05-08

### Added

- Added `nova_get_menu($slug)` helper

## [1.1.1] - 2019-04-23

### Changed

- Rename migration tag from [@kikoseijo](https://github.com/kikoseijo)

## [1.1.0] - 2019-04-16

### Changed

- Refactor code and update docs

## [1.0.4] - 2019-04-16

### Changed

- Improve `nova_get_menus()` helper

## [1.0.3] - 2019-03-27

### Changed

- Fix slug-locale composite unique key validation

## [1.0.2] - 2019-03-13

### Changed

- Rename tool from menu-builder to nova-menu

## [1.0.1] - 2019-03-13

### Changed

- Fixed handling of `parameters`

## [1.0.0] - 2019-03-12

### Added

- Managing menus (w/ customizable locales) and menu items
- Nesting and re-ordering of menu-items
- Creation of custom link options (ie links to Laravel models)
