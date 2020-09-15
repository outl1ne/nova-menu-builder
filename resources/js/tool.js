import ToggleButton from 'vue-js-toggle-button';
import MenuIndexView from './views/MenuIndexView';
import MenuBuilderField from './components/MenuBuilderField';

Nova.booting((Vue, router) => {
  router.addRoutes([{ name: 'menus', path: '/menus', component: MenuIndexView }]);
  Vue.component('form-menu-builder-field', MenuBuilderField);

  Vue.use(ToggleButton);
  Vue.component('nova-menu', require('./components/NovaMenu').default);
  Vue.component('menu-builder-header', require('./components/MenuBuilderHeader').default);
  Vue.component('menu-builder', require('./components/MenuBuilder').default);
  Vue.component('empty-menu-builder-placeholder', require('./components/EmptyMenuBuilderPlaceholder').default);
  Vue.component('menu-builder-arrow-icon', require('./components/icons/ArrowIcon').default);
  Vue.component('menu-builder-edit-icon', require('./components/icons/EditIcon').default);
  Vue.component('menu-builder-duplicate-icon', require('./components/icons/DuplicateIcon').default);
  Vue.component('menu-builder-delete-icon', require('./components/icons/DeleteIcon').default);
  Vue.component('menu-builder-new-item-icon', require('./components/icons/NewMenuItemIcon').default);
});
