<?php

return [
    'resource' => OptimistDigital\MenuBuilder\Http\Resources\MenuResource::class,

    /*
    |--------------------------------------------------------------------------
    | Locales
    |--------------------------------------------------------------------------
    |
    | Set all the available locales as [key => name] pairs.
    |
    | For example ['en_US' => 'English'].
    |
    | If you are using nova-lang package, you can define the locales
    | in config/nova-lang.php file and return them here with a helper function
    | nova_lang_get_all_locales();
    | 'locales' => nova_lang_get_all_locales(),
    */

    'locales' => ['en_US' => 'English'],


    /*
    |--------------------------------------------------------------------------
    | Linkable models
    |--------------------------------------------------------------------------
    |
    | Set all the linkable models in an array.
    */

    'linkable_models' => [],
];
