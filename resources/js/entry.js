Nova.booting((Vue, router) => {
  Nova.inertia('NovaMenu', require('./views/MenuIndexView').default);

  Vue.component('menu-builder', require('./components/MenuBuilder').default);
  Vue.component('form-menu-builder-field', require('./components/MenuBuilderField').default);
  Vue.component('detail-menu-builder-field', require('./components/MenuBuilderField').default);
});
