const mix = require('laravel-mix');

mix.setPublicPath('dist').js('resources/js/menu-builder.js', 'js');

if (mix.inProduction()) {
  mix.options({
    extractVueStyles: 'css/menu-builder.css',
    processCssUrls: false,
  });
}
