const mix = require('laravel-mix');

mix.setPublicPath('dist').js('resources/js/menu-builder.js', 'js').sass('resources/sass/menu-builder.scss', 'css');
