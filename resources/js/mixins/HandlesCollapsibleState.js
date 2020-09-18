export default {
  methods: {
    getCascadeState(menuItem) {
      return {
        id: menuItem.id,
        cascade: menuItem.classProp ? !menuItem.classProp.find(className => className === 'hide-cascade') : true,
        children: Array.isArray(menuItem.children) && menuItem.children.map(item => item && this.getCascadeState(item)),
      };
    },

    saveMenuLocalState() {
      if (!Array.isArray(this.menuItems) || this.menuItems.length === 0) return;
      const menuItemsState = this.menuItems.map(item => item && this.getCascadeState(item));
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
