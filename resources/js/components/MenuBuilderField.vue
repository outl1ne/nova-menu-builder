<template>
  <div class="relative py-3">
    <add-new-menu-item-button @click.native="addNewMenuItem" />

    <no-menu-items-placeholder @onAddClick="addNewMenuItem" v-if="!menuItems.length" />

    <menu-builder
      v-else
      @duplicateMenuItem="duplicateMenuItem"
      @editMenu="editMenu"
      @onMenuChange="updateMenu"
      @removeMenu="removeMenu"
      @saveMenuLocalState="saveMenuLocalState"
      v-model="menuItems"
    />

    <update-menu-item-modal
      :linkType="linkType"
      :menuItemTypes="menuItemTypes"
      :newItem="newItem"
      :resourceId="resourceId"
      :resourceName="resourceName"
      :showModal="modalItem !== false"
      :update="update"
      @closeModal="closeModal"
      @confirmItemCreate="confirmItemCreate"
      @onLinkModelUpdate="updateLinkModel"
      @onLinkTypeUpdate="updateLinkType"
      @updateItem="updateItem"
    />

    <delete-menu-item-confirmation-modal
      :itemToDelete="itemToDelete"
      :modalConfirm="modalConfirm"
      @closeModal="closeModal"
      @confirmItemDelete="confirmItemDelete"
    />
  </div>
</template>

<script>
import { FormField } from 'laravel-nova';
import AddNewMenuItemButton from './core/AddNewMenuItemButton';

import _ from 'lodash';

import api from '../api';

import UpdateMenuItemModal from './modals/UpdateMenuItemModal';
import DeleteMenuItemConfirmationModal from './modals/DeleteMenuItemConfirmationModal';
import NoMenuItemsPlaceholder from './core/NoMenuItemsPlaceholder';

export default {
  mixins: [FormField],

  props: ['resourceName', 'resourceId', 'field'],

  components: {
    AddNewMenuItemButton,
    NoMenuItemsPlaceholder,
    UpdateMenuItemModal,
    'delete-menu-item-confirmation-modal': DeleteMenuItemConfirmationModal,
  },

  data: () => ({
    selectedLocale: void 0,

    modalConfirm: false,
    modalItem: false,
    itemToDelete: null,
    update: false,
    linkType: '',
    newItem: {
      name: null,
      value: '',
      target: '_self',
      menu_id: null,
      enabled: true,
      classProp: [],
    },
    menuItems: [],
    menuItemTypes: void 0,
  }),

  async mounted() {
    // Fix classes on Detail view
    this.$parent.$el.classList.remove('py-3', 'px-6');

    // Set starting locale
    this.selectedLocale = Object.keys(this.field.locales)[0];

    this.newItem.menu_id = this.resourceId;
    this.refreshData();
  },

  computed: {
    newItemData() {
      return { ...this.newItem, class: this.linkType.class };
    },

    locales() {
      return this.field.locales;
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

    async refreshData() {
      const menuItems = (await api.getItems(this.resourceId)).data;
      this.menuItems = this.setMenuItemProperties(Object.values(menuItems), this.getMenuLocalState());

      const menuItemTypes = (await api.getMenuItemTypes(this.selectedLocale)).data;
      this.menuItemTypes = Object.values(menuItemTypes);
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
      this.update = menuItem.id;
      this.newItem = menuItem;
      this.modalItem = true;
      this.linkType = this.menuItemTypes.find(lt => lt.class === this.newItem.class);
    },

    removeMenu(item) {
      this.itemToDelete = item;
      this.modalConfirm = true;
    },

    confirmItemDelete() {
      api
        .destroy(this.itemToDelete.id)
        .then(() => {
          this.refreshData();
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
        enabled: true,
        menu_id: this.resourceId,
      };

      this.linkType = '';
    },

    async confirmItemCreate() {
      try {
        await api.create(this.newItemData);
        this.refreshData();
        this.modalItem = false;
        this.resetNewItem();
        this.$toasted.show(this.__('Item created!'), { type: 'success' });
      } catch (e) {
        this.handleErrors(e);
      }
    },

    updateItem() {
      api
        .update(this.update, this.newItemData)
        .then(() => {
          this.refreshData();
          this.modalItem = false;
          this.resetNewItem();
          this.$toasted.show(this.__('Item updated!'), { type: 'success' });
        })
        .catch(request => {
          this.handleErrors(request);
        });
    },

    async updateMenu() {
      try {
        await api.saveItems(this.resourceId, this.menuItems);
        this.$toasted.show(this.__('Menu reordered!'), { type: 'success' });
      } catch (e) {
        this.$toasted.show(this.__('Error on server!'), { type: 'error' });
      }
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
          this.refreshData();
          this.resetNewItem();
          this.$toasted.show(this.__('Item duplicated!'), { type: 'success' });
        })
        .catch(request => {
          this.handleErrors(request);
        });
    },

    updateLinkModel(modelId) {
      this.newItem.value = modelId;
    },

    updateLinkType(linkType) {
      this.linkType = this.menuItemTypes.find(type => type.class === linkType);
    },
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
