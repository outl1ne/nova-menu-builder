const mix = require('laravel-mix');

mix
  .setPublicPath('dist')
  .js('resources/js/menu-builder.js', 'js')
  .vue({
    extractStyles: mix.inProduction() ? 'css/menu-builder.css' : false,
    processCssUrls: false,
  });
