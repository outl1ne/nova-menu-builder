export default {
    async getMenus(params) {
        return Nova.request().get(`/nova-vendor/nova-menu-builder/menus`, {params});
    },

    async getItems(menuId, locale) {
        return Nova.request().get(`/nova-vendor/nova-menu-builder/menu/${menuId}`, {params: {locale}});
    },

    async copyItems(fromMenuId, fromLocale, toMenuId, toLocale) {
        return Nova.request().post(`/nova-vendor/nova-menu-builder/menus/copy`, {
            fromMenuId,
            fromLocale,
            toMenuId,
            toLocale
        });
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
