import ToggleButton from 'vue-js-toggle-button';

Nova.booting((Vue, router) => {
  router.addRoutes([
    {
      name: 'nova-menu',
      path: '/nova-menu',
      component: require('./components/Tool').default,
    },
  ]);

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
