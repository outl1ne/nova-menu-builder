# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.0.5] - 15-09-2022

### Changed

- `nova_get_menus` now eagerloads menu items.

## [7.0.14] - 13-09-2022

### Changed

- Misc UI fixes and improvements

## [7.0.13] - 12-09-2022

### Changed

- Misc UI fixes and improvements
- Updated packages

## [7.0.12] - 31-08-2022

### Added

- Added `title`, `icon`, `hideMenu` functions to `MenuBuilder` class to help customize sidebar menu.
- Added `nova_get_menu_by_id` helper. (thanks to [@ttungbmt](https://github.com/ttungbmt))

### Changed

- Removed `overflow-hidden` from UpdateModel. Fixes an issue where dropdown fields were cut-off.

## [7.0.11] - 29-08-2022

### Changed

- Fixed a rare UI issue with menu builder field width

## [7.0.10] - 09-08-2022

### Changed

- Fixed an issue where static-url type menu item did not display `URL` field.

## [7.0.9] - 27-07-2022

### Changed

- Move "open in tab/window" field before custom fields

## [7.0.8] - 27-07-2022

### Added

- Added value emit event to "name" field

### Changed

- Fixed some validation errors
- Made fields stacked for a cleaner look
- Updated packages

## [7.0.7] - 21-07-2022

### Added

- Added support for `->rules()`, `->updateRules()`, `->creationRules()` for fields in `getFields()`

### Changed

- Updated packages

## [7.0.6] - 17-05-2022

### Changed

- Fix migrations

## [7.0.5] - 13-05-2022

### Changed

- Revert PHP restriction to 8.0

## [7.0.4] - 13-05-2022

### Changed

- Fixed migrations rollback crashing
- Updated packages

## [7.0.3] - 29-04-2022

### Changed

- Removed TailwindCSS
- Fixed Menus view not having a title
- Updated packages

## [7.0.2] - 22-04-2022

### Changed

- Fixed linkType undefined error (thanks to [@stepanenko3](https://github.com/stepanenko3))
- Fixed custom menu item with 'select' type not working

## [7.0.1] - 21-04-2022

### Changed

- Fixed light/dark mode support

## [7.0.0] - 21-04-2022

Initial Nova 4 compatible release. Still a beta and there may be bugs and visual issues.

### Added

- Added Nova 4 support (huge thanks to [@stepanenko3](https://github.com/stepanenko3))
- Added nestable option (huge thanks to [@stepanenko3](https://github.com/stepanenko3))

### Changed

- Renamed namespaces from OptimistDigital to Outl1ne
- Dropped PHP 7.X support
- Dropped Nova 3.X support
- Updated packages
