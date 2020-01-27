<template>
  <div class="py-3">
    <menu-builder-header @addNewMenuItem="addNewMenuItem" />
    <menu-builder
      v-model="menuItems"
      @duplicateMenuItem="duplicateMenuItem"
      @saveMenuLocalState="saveMenuLocalState"
      @editMenu="editMenu"
      @removeMenu="removeMenu"
      @onChangeMenu="change"
      v-if="menuItems.length > 0"
    />
    <empty-menu-builder-placeholder @addNewMenuItem="addNewMenuItem" v-else />
    <add-new-menu-item-modal
      :newItem="newItem"
      :showModal="modalItem !== false"
      :update="update"
      :linkType="linkType"
      :linkTypes="linkTypes"
      @updateItem="updateItem"
      @confirmItemCreate="confirmItemCreate"
      @closeModal="closeModal"
      @onLinkTypeUpdate="updateLinkType"
      @onLinkModelUpdate="updateLinkModel"
    />
    <delete-menu-item-confirmation-modal
      :modalConfirm="modalConfirm"
      :itemToDelete="itemToDelete"
      @closeModal="closeModal"
      @confirmItemDelete="confirmItemDelete"
    />
  </div>
</template>

<script>
import _ from 'lodash';
import beautify from 'js-beautify';

import api from '../api';

import AddNewMenuItemModal from './modals/AddNewMenuItemModal';
import DeleteMenuItemConfirmationModal from './modals/DeleteMenuItemConfirmationModal';

export default {
  props: ['resourceName', 'resourceId', 'field'],
  components: {
    'add-new-menu-item-modal': AddNewMenuItemModal,
    'delete-menu-item-confirmation-modal': DeleteMenuItemConfirmationModal,
  },
  data: () => ({
    modalConfirm: false,
    modalItem: false,
    itemToDelete: null,
    update: false,
    linkType: '',
    newItem: {
      name: null,
      value: '',
      target: '_self',
      parameters: '',
      active: true,
      menu_id: null,
      enabled: true,
      classProp: [],
    },
    menuItems: [],
    linkTypes: void 0,
  }),
  computed: {
    newItemData() {
      return {
        ...this.newItem,
        parameters: (this.newItem.parameters && JSON.parse(this.newItem.parameters)) || '',
        class: this.linkType.class,
      };
    },
  },
  methods: {
    isValidJSON(data) {
      if (!data || data[0] !== '{') return false;
      try {
        JSON.parse(data);
        return true;
      } catch (e) {
        return false;
      }
    },

    addNewMenuItem() {
      this.update = false;
      this.modalItem = true;
    },

    closeModal() {
      this.modalItem = false;
      this.modalConfirm = false;
      this.resetNewItem();
    },

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

    async getData() {
      const menuItems = (await api.getItems(this.resourceId)).data;
      this.menuItems = this.setMenuItemProperties(_.values(menuItems), this.getMenuLocalState());
      this.linkTypes = _.values((await api.getLinkTypes(this.$attrs.panel.fields[0].locale)).data);
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

    async editMenu(item) {
      const menuItem = (await api.getMenuItem(item.id)).data;
      menuItem.parameters = menuItem.parameters
        ? beautify(JSON.stringify(menuItem.parameters), { indent_size: 2 })
        : '';
      this.update = menuItem.id;
      this.newItem = menuItem;
      this.modalItem = true;
      this.linkType = this.linkTypes.find(lt => lt.class === this.newItem.class);
    },

    removeMenu(item) {
      this.itemToDelete = item;
      this.modalConfirm = true;
    },

    confirmItemDelete() {
      api
        .destroy(this.itemToDelete.id)
        .then(() => {
          this.getData();
          this.$toasted.show(this.__('Item removed successfully!'), { type: 'success' });
          this.itemToDelete = null;
          this.modalConfirm = false;
        })
        .catch(request => {
          this.handleErrors(request);
        });
    },

    resetNewItem() {
      this.newItem = {
        name: null,
        value: '',
        target: '_self',
        parameters: '',
        enabled: true,
        menu_id: this.resourceId,
      };

      this.linkType = '';
    },

    async confirmItemCreate() {
      if (this.newItem.parameters && !this.isValidJSON(this.newItem.parameters)) {
        this.$toasted.show(this.__('Invalid JSON in parameters field.'), { type: 'error' });
        return;
      }

      try {
        await api.create(this.newItemData);
        this.getData();
        this.modalItem = false;
        this.resetNewItem();
        this.$toasted.show(this.__('Item created!'), { type: 'success' });
      } catch (e) {
        this.handleErrors(e);
      }
    },

    updateItem() {
      if (this.newItem.parameters && !this.isValidJSON(this.newItem.parameters)) {
        this.$toasted.show(this.__('Invalid JSON in parameters field.'), { type: 'error' });
        return;
      }

      api
        .update(this.update, this.newItemData)
        .then(() => {
          this.getData();
          this.modalItem = false;
          this.resetNewItem();
          this.$toasted.show(this.__('Item updated!'), { type: 'success' });
        })
        .catch(request => {
          this.handleErrors(request);
        });
    },

    change() {
      api
        .saveItems(this.resourceId, this.menuItems)
        .then(() => {
          this.$toasted.show(this.__('Menu reordered!'), { type: 'success' });
        })
        .catch(() => {
          this.$toasted.show(this.__('Error on server!'), { type: 'error' });
        });
    },

    handleErrors(request) {
      let errors = request.response.data.errors;
      if (errors) {
        _.map(errors, error => this.$toasted.show(error, { type: 'error' }));
      }
    },

    duplicateMenuItem(item) {
      api
        .duplicate(item.id)
        .then(() => {
          this.getData();
          this.resetNewItem();
          this.$toasted.show(this.__('Item duplicated!'), { type: 'success' });
        })
        .catch(request => {
          this.handleErrors(request);
        });
    },

    updateLinkModel(modelId) {
      this.newItem.value = modelId;
      this.newItem.parameters = '';
    },

    updateLinkType(linkType) {
      this.linkType = this.linkTypes.find(type => type.class === linkType);
    },
  },
  mounted() {
    this.newItem.menu_id = this.resourceId;
    this.getData();
  },
};
</script>

<style scope>
.menu-button {
  position: absolute;
  right: -12px;
  margin-top: -72px;
}

.nestable {
  position: relative;
}
.nestable .nestable-list {
  margin: 0;
  padding: 0 0 0 40px;
  list-style-type: none;
}
.nestable > .nestable-list {
  padding: 0;
}
.nestable-item,
.nestable-item-copy {
  margin: 10px 0 0;
}
.nestable-item:first-child,
.nestable-item-copy:first-child {
  margin-top: 0;
}
.nestable-item .nestable-list,
.nestable-item-copy .nestable-list {
  margin-top: 10px;
}
.nestable-item {
  position: relative;
}

.nestable-item-content {
  /*padding: 10px;*/
  border: 1px solid #fff;
  background: #fff;
  -webkit-border-radius: 3px;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}

.handle {
  width: 100%;
  padding: 0 10px 0 0;
  height: 45px;
  line-height: 45px;
}

.nestable-item.is-dragging .nestable-list {
  pointer-events: none;
}
.nestable-item.is-dragging * {
  opacity: 0;
  filter: alpha(opacity=0);
}
.nestable-item.is-dragging:before {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(106, 127, 233, 0.274);
  border: 1px dashed rgb(73, 100, 241);
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
.nestable-drag-layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: none;
}
.nestable-drag-layer > .nestable-list {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  background-color: rgba(106, 127, 233, 0.274);
}
.nestable [draggable='true'] {
  cursor: move;
}
.disabled {
  opacity: 0.5;
}
.btn-cascade-open {
  transform: rotate(180deg);
  transform-origin: center center;
}
.hide-cascade > ol {
  display: none;
}
</style>
