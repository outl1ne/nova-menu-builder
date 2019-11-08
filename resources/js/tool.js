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
  Vue.component('nova-menu', require('./components/BuilderResourceTool').default);
});
