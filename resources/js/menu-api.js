export default {
    async getItems(menuId, locale) {
        return Nova.request().get(`/nova-vendor/nova-menu-builder/menu/${menuId}`, {params: {locale}});
    },

    async saveItems(menuId, menuItems) {
        return Nova.request().post(`/nova-vendor/nova-menu-builder/menu/${menuId}`, {menuItems});
    },

    async create(menuItem) {
        return Nova.request().post(`/nova-vendor/nova-menu-builder/items`, menuItem);
    },

    async getMenuItem(menuItemId) {
        return Nova.request().get(`/nova-vendor/nova-menu-builder/items/${menuItemId}`);
    },

    async getEntityTable(entityId) {
        return Nova.request().get(`/nova-vendor/nova-menu-builder/entity/${entityId}`);
    },

    async update(menuItemId, menuItem) {
        return Nova.request().post(`/nova-vendor/nova-menu-builder/items/${menuItemId}`, menuItem);
    },

    async destroy(menuItemId) {
        return Nova.request().delete(`/nova-vendor/nova-menu-builder/items/${menuItemId}`);
    },

    async duplicate(menuItemId) {
        return Nova.request().post(`/nova-vendor/nova-menu-builder/items/${menuItemId}/duplicate`);
    },

    async getMenuItemTypes(menuId, locale) {
        return Nova.request().get(`/nova-vendor/nova-menu-builder/menu-item-types/${menuId}`, {params: {locale}});
    },
};
