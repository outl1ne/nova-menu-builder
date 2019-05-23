export default {
  getItems(menu) {
    return window.axios
      .post('/nova-vendor/nova-menu/items', {
        menu: menu,
      })
      .then(response => response.data);
  },

  saveItems(menu, menuItems) {
    return window.axios
      .post('/nova-vendor/nova-menu/save-items', {
        menu: menu,
        items: menuItems,
      })
      .then(response => response.data);
  },

  create(menuItem) {
    return window.axios.post('/nova-vendor/nova-menu/new-item', menuItem).then(response => response.data);
  },

  edit(menu) {
    return window.axios.get('/nova-vendor/nova-menu/edit/' + menu).then(response => response.data);
  },

  update(menuItemId, menuItem) {
    return window.axios.post('/nova-vendor/nova-menu/update/' + menuItemId, menuItem).then(response => response.data);
  },

  destroy(menuItemId) {
    return window.axios.post('/nova-vendor/nova-menu/destroy/' + menuItemId).then(response => response.data);
  },

  getLinkTypes(locale) {
    return window.axios.get('/nova-vendor/nova-menu/link-types/' + locale).then(response => response.data);
  },
};
