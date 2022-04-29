let mix = require('laravel-mix');
let path = require('path');
const tailwindcss = require('tailwindcss');

mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', '')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'outl1ne/nova-menu-builder-runner',
    },
  })
  .alias({
    'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
  });
