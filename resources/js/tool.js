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
  Vue.component('edit-menu-hierarchy', require('./components/MenuItems').default);
  Vue.component('new-menu-item', require('./components/NewMenuItem').default);
  Vue.component('edit-menu-head', require('./components/MenuEditHead').default);
  Vue.component('nova-menu', require('./components/BuilderResourceTool').default);
});
