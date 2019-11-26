export default {
  async getItems(menuId) {
    return Nova.request().get(`/nova-vendor/nova-menu/menu/${menuId}`);
  },

  async saveItems(menuId, menuItems) {
    return Nova.request().post(`/nova-vendor/nova-menu/menu/${menuId}`, { menuItems });
  },

  async create(menuItem) {
    return Nova.request().post(`/nova-vendor/nova-menu/items`, menuItem);
  },

  async getMenuItem(menuItemId) {
    return Nova.request().get(`/nova-vendor/nova-menu/items/${menuItemId}`);
  },

  async update(menuItemId, menuItem) {
    return Nova.request().post(`/nova-vendor/nova-menu/items/${menuItemId}`, menuItem);
  },

  async destroy(menuItemId) {
    return Nova.request().delete(`/nova-vendor/nova-menu/items/${menuItemId}`);
  },

  async duplicate(menuItemId) {
    return Nova.request().post(`/nova-vendor/nova-menu/items/${menuItemId}/duplicate`);
  },

  async getLinkTypes(locale) {
    return Nova.request().get(`/nova-vendor/nova-menu/link-types/${locale}`);
  },
};
