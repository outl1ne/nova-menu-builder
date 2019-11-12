<template>
  <div class="py-3">
    <edit-menu-head :newMenuItem="newItemMenu" />
    <edit-menu-hierarchy
      v-model="menuItems"
      :editMenu="editMenu"
      :removeMenu="removeMenu"
      :change="change"
      :duplicateMenuItem="duplicateMenuItem"
      v-if="menuItems.length > 0"
    />
    <new-menu-item :newMenuItem="newItemMenu" v-else />
    <div ref="modals">
      <DeleteConfirmationModal
        :modalConfirm="modalConfirm"
        :itemToDelete="itemToDelete"
        :closeModal="closeModal"
        :confirmItemDelete="confirmItemDelete"
      />
      <AddNewItemModal
        :newItem="newItem"
        :showModal="modalItem"
        :updateItem="updateItem"
        :closeModal="closeModal"
        :confirmItemCreate="confirmItemCreate"
        :update="update"
        :linkType="linkType"
      />
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import { VueNestable, VueNestableHandle } from 'vue-nestable';
import { codemirror } from 'vue-codemirror';
import beautify from 'js-beautify';

import 'codemirror/addon/display/placeholder.js';
//themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import api from '../api';

import DeleteConfirmationModal from './modals/MenuItemDeleteConfirmModal';
import AddNewItemModal from './modals/AddNewMenuItemModal';

export default {
  props: ['resourceName', 'resourceId', 'field'],
  components: {
    VueNestable,
    VueNestableHandle,
    codemirror,
    DeleteConfirmationModal,
    AddNewItemModal,
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
    },
    defaultMenuItemProps: {
      classProp: [],
    },
    menuItems: [],
    linkTypes: void 0,
  }),
  computed: {
    newItemData() {
      return {
        ...this.newItem,
        ...this.defaultMenuItemProps,
        parameters: this.newItem.parameters && JSON.parse(this.newItem.parameters),
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

    newItemMenu() {
      this.update = false;
      this.modalItem = true;
    },

    closeModal() {
      this.modalItem = false;
      this.modalConfirm = false;
      this.resetNewItem();
    },

    getData() {
      api.getItems(this.resourceId).then(result => {
        this.menuItems = this.setMenuItemProperties(_.values(result));
      });

      api.getLinkTypes(this.$attrs.panel.fields[0].locale).then(result => {
        this.linkTypes = _.values(result);
      });
    },

    setMenuItemProperties(menuItems) {
      return menuItems.map(item => {
        return {
          ...item,
          classProp: [],
          children: Array.isArray(item.children) ? this.setMenuItemProperties(item.children) : item.children,
        };
      });
    },

    editMenu(item) {
      api.edit(item.id).then(result => {
        result.parameters = result.parameters ? beautify(JSON.stringify(result.parameters), { indent_size: 2 }) : '';

        this.update = result.id;
        this.newItem = result;
        this.modalItem = true;

        this.linkType = this.linkTypes.find(lt => lt.class === this.newItem.class);
      });
    },

    onChangeType() {
      this.newItem.value = '';
      this.newItem.parameters = null;
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

    confirmItemCreate() {
      if (this.newItem.parameters && !this.isValidJSON(this.newItem.parameters)) {
        this.$toasted.show('Invalid JSON in parameters field.', { type: 'error' });
        return;
      }

      api
        .create(this.newItemData)
        .then(() => {
          this.getData();
          this.modalItem = false;
          this.resetNewItem();
          this.$toasted.show(this.__('Item created!'), { type: 'success' });
        })
        .catch(this.handleErrors);
    },

    updateItem() {
      if (this.newItem.parameters && !this.isValidJSON(this.newItem.parameters)) {
        this.$toasted.show('Invalid JSON in parameters field.', { type: 'error' });
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
/*
* Style for nestable
*/
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
