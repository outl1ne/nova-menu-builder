let mix = require('laravel-mix');
let path = require('path');


console.log(path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'));
mix
  .setPublicPath('dist')
  .js('resources/js/entry.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'optimistdigital/nova-menu-builder-runner',
    },
  })
  .alias({
    'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
  });
