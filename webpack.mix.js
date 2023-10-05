let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
let postcssImport = require('postcss-import');

require('./nova.mix.js');

mix
    .setPublicPath('dist')
    .js('resources/js/entry.js', 'js')
    .vue({ version: 3 })
    .postCss('resources/css/entry.css', 'dist/css/', [postcssImport(), tailwindcss('tailwind.config.js')])
    .nova('workup/nova-menu-builder');
