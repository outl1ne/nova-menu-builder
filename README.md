# Nova Menu Builder

This [Laravel Nova](https://nova.laravel.com/) package allows you to create and manage menus and menu items.

Continuation of [Infinety/Nova-Menu-Builder](https://github.com/InfinetyEs/Nova-Menu-Builder). As opposed to the menu builder by InfinityEs, this package is mainly targeted towards the creation of headless content management systems and expects data to be returned through an API.

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
php artisan vendor:publish --tag=nova-menu-builder-migrations
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

```blade
@php
    $menu = nova_get_menu('main-header-es');


    function drawMenu($menu){ // This should be ported to blade.
        $has_children = $menu->hasChildren() ? 'menu-item-has-children' : '';
        $is_active = set_active($menu->value, ' active current-menu-item');
        echo '<li class="'.$has_children . $is_active.'">';
        echo '<a href="'.url($menu->value).'" target="'.$menu->target.'">'. $menu->name .'</a>';
        if ($has_children):
            drawMenuItem($menu);
        endif;
        echo '</li>';
    }

    function drawMenuItem($menuItem){ // This should be ported to blade.
        echo '<ul class="sub-menu">';
            foreach ($menuItem->children as $subMenuItem):
                 drawMenu($subMenuItem);
            endforeach;
        echo '</ul>';
    }

@endphp

<ul class="primary-menu-menu">
    @foreach ($menu->rootMenuItems as $menuItem)
        {{ drawMenu($menuItem) }}
    @endforeach
</ul>
```

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
 * @param array $parameters The JSON parameters added to the item.
 * @return any
 **/
public static function getValue(string $value, array $parameters = null)
    // Example usecase
    // return Page::find($value);
    return $value;
}
```

### Returning the menus in a JSON API

A helper function `nova_get_menus` is globally registered in this package which returns all the menus including their menu items in an API friendly format.

```php
public function getMenus(Request $request) {
    $menusResponse = nova_get_menus();
    return response()->json($menusResponse);
}
```

### Return single menu by slug.

```php
$menu = nova_get_menu('slug-id');
}
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

### Models

To perform your own crud operations, There we have `MenuItem` and `Menu` Model.

```php
namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\Models\MenuItem;

class Menu extends Model
{
    public function rootMenuItems()
    {
        return $this
            ->hasMany(MenuItem::class)
            ->where('parent_id', null)
            ->orderby('parent_id')
            ->orderby('order')
            ->orderby('name');
    }
}
```

```php

namespace OptimistDigital\MenuBuilder\Models;

use Illuminate\Database\Eloquent\Model;
use OptimistDigital\MenuBuilder\Models\Menu;

class MenuItem extends Model
{
    protected $fillable = ['menu_id', 'name', 'value', 'class', 'parameters', 'target', 'parent_id', 'order', 'enabled'];

    protected $with = ['children'];

    protected $casts = [
        'enabled' => 'boolean',
        'parameters' => 'array',
    ];

    protected $appends = ['enabledClass', 'displayValue'];

    public function menu()
    {
        return $this->belongsTo(Menu::class);
    }

    public function hasChildren()
    {
        return count($this->children) > 0;
    }

    public function children()
    {
        return $this->hasMany(self::class, 'parent_id')->with('children');
    }

    public function itemsChildren($parentId)
    {
        return $this->whereParentId($parentId);
    }

    public function getEnabledClassAttribute()
    {
        return ($this->enabled) ? 'enabled' : 'disabled';
    }

    public function scopeRoot($query)
    {
        return $query->whereNull('parent_id');
    }

    public function scopeEnabled($query)
    {
        return $query->where('enabled', 1);
    }

    public function getDisplayValueAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getDisplayValue($this->value);
        }
        return $this->value;
    }

    public function getTypeAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getIdentifier($this->value, $this->parameters);
        }
        return null;
    }

    public function getCustomValueAttribute()
    {
        if (class_exists($this->class)) {
            return $this->class::getValue($this->value, $this->parameters);
        }
        return $this->value;
    }
}
```

## Credits

- [Tarvo Reinpalu](https://github.com/Tarpsvo)
- [Eric Lagarda (original nova-menu-builder)](https://github.com/Krato)
- [Ralph Huwiler (vue-nestable)](https://github.com/rhwilr/vue-nestable)

## License

Nova menu builder is open-sourced software licensed under the [MIT license](LICENSE.md).
