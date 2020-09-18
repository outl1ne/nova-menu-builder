import ToggleButton from 'vue-js-toggle-button';
import MenuIndexView from './views/MenuIndexView';
import MenuBuilderField from './components/MenuBuilderField';

Nova.booting((Vue, router) => {
  router.addRoutes([
    {
      name: 'menus',
      path: '/resources/nova-menus',
      component: MenuIndexView,
    },
  ]);

  Vue.component('form-menu-builder-field', MenuBuilderField);
  Vue.component('detail-menu-builder-field', MenuBuilderField);

  Vue.use(ToggleButton);

  Vue.component('menu-builder', require('./components/MenuBuilder').default);
});
