# Changelog

All notable changes to this project will be documented in this file.


## [7.2.1] - 2024-03-18
### Fixed
- Fixed drag and drop not working
- Fixed parent menu items not showing all items

## [7.2.0] - 2024-02-09
### Added
- Added Advance link to edit menu item resource

## [7.1.3.002] - 2024-01-23
### Fixed
- Fixed Add menu item logic


## [7.1.3.001] - 2023-10-05
### Changed
- Nova 4 compatibility


## [7.1.3] - 10-08-2023
### Changed
- Replaced references to default Menu with configurable Menu


## [7.1.2] - 10-08-2023
### Added
- Added Turkish translations (thanks to [@thecaliskan](https://github.com/thecaliskan))
### Changed
- Hide empty menus when selecting menus to copy from
- Fixed fields not displaying full width and labels in Nova 4.26 and greater
- Fixed missing dark field background on dark mode
- Bump packages


## [7.1.1] - 16-01-2023
### Changed
- Bumped packages


## [7.1.0] - 21-10-2022
### Added
- Custom menu items now have `getEnabledValue` function available. [#75]
    - You can use this to override the enabled value set in database.
      Useful when dealing with relationships inside menu items that might of have been deleted.
### Changed
- Updated the width of fields inside menu modal [#162]


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
