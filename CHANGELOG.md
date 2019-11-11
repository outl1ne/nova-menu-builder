# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2019-11-11

NB! This release contains breaking changes. All configuration options were moved from `MenuBuilder` constructor to `config/nova-menu.php`.

### Added

- Added support for [nova-lang](https://github.com/optimistdigital/nova-lang/)

### Changed

- Added better localization support through `nova-locale-field`
- Moved all config options from tool constructor to `config/nova-menu.php`
- Updated all packages

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

[2.0.0]: https://github.com/optimistdigital/nova-menu-builder/compare/1.4.2...2.0.0
[1.4.2]: https://github.com/optimistdigital/nova-menu-builder/compare/1.4.1...1.4.2
[1.4.1]: https://github.com/optimistdigital/nova-menu-builder/compare/1.4.0...1.4.1
[1.4.0]: https://github.com/optimistdigital/nova-menu-builder/compare/1.3.3...1.4.0
[1.3.3]: https://github.com/optimistdigital/nova-menu-builder/compare/1.3.2...1.3.3
[1.3.2]: https://github.com/optimistdigital/nova-menu-builder/compare/1.3.1...1.3.2
[1.3.1]: https://github.com/optimistdigital/nova-menu-builder/compare/1.3.0...1.3.1
[1.3.0]: https://github.com/optimistdigital/nova-menu-builder/compare/1.2.1...1.3.0
[1.2.1]: https://github.com/optimistdigital/nova-menu-builder/compare/1.2.0...1.2.1
[1.2.0]: https://github.com/optimistdigital/nova-menu-builder/compare/1.1.4...1.2.0
[1.1.4]: https://github.com/optimistdigital/nova-menu-builder/compare/1.1.3...1.1.4
[1.1.3]: https://github.com/optimistdigital/nova-menu-builder/compare/1.1.2...1.1.3
[1.1.2]: https://github.com/optimistdigital/nova-menu-builder/compare/1.1.1...1.1.2
[1.1.1]: https://github.com/optimistdigital/nova-menu-builder/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/optimistdigital/nova-menu-builder/compare/1.0.4...1.1.0
[1.0.4]: https://github.com/optimistdigital/nova-menu-builder/compare/1.0.3...1.0.4
[1.0.3]: https://github.com/optimistdigital/nova-menu-builder/compare/1.0.2...1.0.3
[1.0.2]: https://github.com/optimistdigital/nova-menu-builder/compare/1.0.1...1.0.2
[1.0.1]: https://github.com/optimistdigital/nova-menu-builder/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/optimistdigital/nova-menu-builder/compare/2af2c175c02a00e954013a0e41e583b8d9b64ce4...1.0.0
