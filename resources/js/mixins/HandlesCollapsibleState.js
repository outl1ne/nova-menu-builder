export default {
    methods: {
        // Pages
        getPageCascadeState(pagesItem) {
            return {
                id: pagesItem.id,
                cascade: pagesItem.classProp ? !pagesItem.classProp.find(className => className === 'hide-cascade') : true,
                children: Array.isArray(pagesItem.children) && pagesItem.children.map(item => item && this.getPageCascadeState(item)),
            };
        },

        savePageLocalState() {
            if (!Array.isArray(this.pageItems) || this.pageItems.length === 0)
                return;
            const pageItemsState = this.pageItems.map(item => item && this.getPageCascadeState(item));
            const data = localStorage.getItem('pageManagerItemsState');
            let pagesStorage = (data && JSON.parse(data)) || {};
            pagesStorage['resource-pages'] = pageItemsState;
            localStorage.setItem('pageManagerItemsState', JSON.stringify(pagesStorage));
        },

        getPageLocalState() {
            const pagesStorage = JSON.parse(localStorage.getItem('pageManagerItemsState'));
            if (!pagesStorage || !pagesStorage['resource-pages'])
                return null;
            return pagesStorage['resource-pages'];
        },

        setPageProperties(pageItems, localItemsState = null) {
            return pageItems.map(item => {
                const localItemState = Array.isArray(localItemsState)
                    ? localItemsState.find(localItem => +localItem.id === +item.id)
                    : false;

                return {
                    ...item,
                    classProp: [localItemState && !localItemState.cascade ? 'hide-cascade' : ''],
                    children: Array.isArray(item.children)
                        ? this.setPageProperties(item.children, localItemState && localItemState.children)
                        : item.children,
                };
            });
        },

        // Menu
        getMenuCascadeState(menuItem) {
            return {
                id: menuItem.id,
                cascade: menuItem.classProp ? !menuItem.classProp.find(className => className === 'hide-cascade') : true,
                children: Array.isArray(menuItem.children) && menuItem.children.map(item => item && this.getMenuCascadeState(item)),
            };
        },

        saveMenuLocalState() {
            if (!Array.isArray(this.menuItems) || this.menuItems.length === 0) return;
            const menuItemsState = this.menuItems.map(item => item && this.getMenuCascadeState(item));
            const data = localStorage.getItem('menuManagerItemsState');
            let menuStorage = (data && JSON.parse(data)) || {};
            menuStorage[`resource-${this.resourceId}`] = menuItemsState;
            localStorage.setItem('menuManagerItemsState', JSON.stringify(menuStorage));
        },

        getMenuLocalState() {
            const menuStorage = JSON.parse(localStorage.getItem('menuManagerItemsState'));
            if (!menuStorage || !menuStorage[`resource-${this.resourceId}`]) return null;
            return menuStorage[`resource-${this.resourceId}`];
        },

        setMenuItemProperties(menuItems, localItemsState = null) {
            return menuItems.map(item => {
                const localItemState = Array.isArray(localItemsState)
                    ? localItemsState.find(localItem => +localItem.id === +item.id)
                    : false;

                return {
                    ...item,
                    classProp: [localItemState && !localItemState.cascade ? 'hide-cascade' : ''],
                    children: Array.isArray(item.children)
                        ? this.setMenuItemProperties(item.children, localItemState && localItemState.children)
                        : item.children,
                };
            });
        },
    },
};
