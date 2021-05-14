import ToggleButton from 'vue-js-toggle-button';
import MenuIndexView from './views/MenuIndexView';
import MenuBuilder from './components/MenuBuilder';
import MenuBuilderField from './components/MenuBuilderField';

Nova.booting((Vue, router) => {
  router.addRoutes([
    {
      name: 'menus',
      path: `/resources/${Nova.config.menuBuilderUriKey}`,
      component: MenuIndexView,
    },
  ]);

  Vue.use(ToggleButton);

  Vue.component('menu-builder', MenuBuilder);
  Vue.component('form-menu-builder-field', MenuBuilderField);
  Vue.component('detail-menu-builder-field', MenuBuilderField);
});
