import MenuIndexView from './pages/MenuIndex'

Nova.booting((app, store) => {
    Nova.inertia('NovaMenu', MenuIndexView);

    app.component('menu-builder', require('./components/MenuBuilder').default);
    app.component('form-menu-builder-field', require('./components/MenuBuilderField.vue').default);
    app.component('detail-menu-builder-field', require('./components/MenuBuilderField.vue').default);
});
