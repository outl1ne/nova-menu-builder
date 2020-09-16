<template>
  <div id="menu-builder-field" class="relative py-3">
    <menu-builder-header
      @addMenuItem="openAddModal"
      @changeLocale="setSelectedLocale"
      :activeLocale="selectedLocale"
      :locales="field.locales"
    />

    <no-menu-items-placeholder @onAddClick="openAddModal" v-if="!menuItems.length" />

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
      :showModal="showAddModal"
      :update="update"
      @closeModal="closeModal"
      @confirmItemCreate="confirmItemCreate"
      @onLinkModelUpdate="updateLinkModel"
      @onLinkTypeUpdate="updateLinkType"
      @updateItem="updateItem"
    />

    <delete-menu-item-modal
      :itemToDelete="itemToDelete"
      :modalConfirm="modalConfirm"
      @closeModal="closeModal"
      @confirmItemDelete="confirmItemDelete"
    />
  </div>
</template>

<script>
import api from '../api';
import { FormField } from 'laravel-nova';
import MenuBuilderHeader from './core/MenuBuilderHeader';
import UpdateMenuItemModal from './modals/UpdateMenuItemModal';
import DeleteMenuItemModal from './modals/DeleteMenuItemModal';
import NoMenuItemsPlaceholder from './core/NoMenuItemsPlaceholder';
import HandlesCollapsibleState from '../mixins/HandlesCollapsibleState';

export default {
  mixins: [FormField, HandlesCollapsibleState],

  props: ['resourceName', 'resourceId', 'field'],

  components: {
    MenuBuilderHeader,
    NoMenuItemsPlaceholder,
    DeleteMenuItemModal,
    UpdateMenuItemModal,
  },

  data: () => ({
    selectedLocale: void 0,

    modalConfirm: false,
    showAddModal: false,
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

    this.refreshData();
  },

  computed: {
    newItemData() {
      return {
        ...this.newItem,
        locale: this.selectedLocale,
        class: this.linkType.class,
        menu_id: this.resourceId,
      };
    },
  },

  methods: {
    setSelectedLocale(locale) {
      this.selectedLocale = locale;
      this.refreshData();
    },

    openAddModal() {
      this.update = false;
      this.showAddModal = true;
    },

    closeModal() {
      this.showAddModal = false;
      this.modalConfirm = false;
      this.resetNewItem();
    },

    async refreshData() {
      const menuItems = (await api.getItems(this.resourceId, this.selectedLocale)).data;
      this.menuItems = this.setMenuItemProperties(Object.values(menuItems), this.getMenuLocalState());

      const menuItemTypes = (await api.getMenuItemTypes(this.resourceId, this.selectedLocale)).data;
      this.menuItemTypes = Object.values(menuItemTypes);
    },

    async editMenu(item) {
      this.update = true;
      const menuItem = (await api.getMenuItem(item.id)).data;
      this.newItem = menuItem;
      this.showAddModal = true;
      this.linkType = this.menuItemTypes.find(lt => lt.class === this.newItem.class);
    },

    removeMenu(item) {
      this.itemToDelete = item;
      this.modalConfirm = true;
    },

    async confirmItemDelete() {
      try {
        await api.destroy(this.itemToDelete.id);
        await this.refreshData();
        this.$toasted.show(this.__('Item removed successfully!'), { type: 'success' });
        this.itemToDelete = null;
        this.modalConfirm = false;
      } catch (e) {
        this.handleErrors(e);
      }
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
        this.showAddModal = false;
        this.resetNewItem();
        this.$toasted.show(this.__('Item created!'), { type: 'success' });
      } catch (e) {
        this.handleErrors(e);
      }
    },

    async updateItem() {
      try {
        await api.update(this.newItem.id, this.newItemData);
        await this.refreshData();
        this.showAddModal = false;
        this.resetNewItem();
        this.$toasted.show(this.__('Item updated!'), { type: 'success' });
      } catch (e) {
        this.handleErrors(e);
      }
    },

    async updateMenu() {
      try {
        await api.saveItems(this.resourceId, this.menuItems);
        this.$toasted.show(this.__('Menu reordered!'), { type: 'success' });
      } catch (e) {
        this.$toasted.show(this.__('Error on server!'), { type: 'error' });
      }
    },

    handleErrors(res) {
      console.error(res);
      let errors = res.response && res.response.data && res.response.errors;
      if (errors) Array.from(errors).map(error => this.$toasted.show(error, { type: 'error' }));
    },

    async duplicateMenuItem(item) {
      try {
        await api.duplicate(item.id);
        await this.refreshData();
        this.resetNewItem();
        this.$toasted.show(this.__('Item duplicated!'), { type: 'success' });
      } catch (e) {
        this.handleErrors(e);
      }
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

<style lang="scss">
#menu-builder-field {
  .menu-button {
    position: absolute;
    right: -12px;
    margin-top: -72px;
  }

  .nestable {
    position: relative;

    .nestable-list {
      margin: 0;
      padding: 0 0 0 40px;
      list-style-type: none;
    }

    > .nestable-list {
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
}
</style>
