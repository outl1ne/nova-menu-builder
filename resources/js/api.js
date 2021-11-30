export default {
  async getItems(menuId, locale) {
    return Nova.request().get(`/nova-vendor/nova-menu/menu/${menuId}`, { params: { locale } });
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

  async getEntityTable(entityId) {
    return Nova.request().get(`/nova-vendor/nova-menu/entity/${entityId}`);
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

  async getMenuItemTypes(menuId, locale) {
    return Nova.request().get(`/nova-vendor/nova-menu/menu-item-types/${menuId}`, { params: { locale } });
  },
};
