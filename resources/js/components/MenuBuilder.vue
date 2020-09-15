<template>
  <vue-nestable
    :value="value"
    @input="val => $emit('input', val)"
    @change="$emit('onMenuChange')"
    classProp="classProp"
  >
    <vue-nestable-handle slot-scope="{ item }" :item="item" class="handle flex flex-wrap">
      <div :class="`item-data w-2/3 flex ${!hasChildren(item) ? 'pl-3' : ''}`">
        <!-- Collapse icon -->
        <button
          v-if="hasChildren(item)"
          :title="__('Edit')"
          @click="toggleMenuChildrenCascade(item)"
          class="appearance-none cursor-pointer text-70 hover:text-primary flex px-4 items-center"
        >
          <arrow-icon :wrapperClass="`${isCascadeOpen(item) ? 'btn-cascade-open' : ''}`" />
        </button>

        <div :class="`text-90 ${!item.enabled ? 'opacity-25' : ''}`">{{ item.name }}</div>
        <div :class="`font-lighter text-80 ml-4 text-sm ${!item.enabled ? 'opacity-25' : ''}`">
          {{ item.displayValue }}
        </div>
      </div>

      <div class="buttons w-1/3 flex justify-end content-center">
        <button
          :title="__('Edit')"
          @click="$emit('editMenu', item)"
          class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
        >
          <edit-icon />
        </button>

        <button
          :title="__('Duplicate')"
          @click="$emit('duplicateMenuItem', item)"
          class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
        >
          <duplicate-icon />
        </button>

        <button
          :title="__('Delete')"
          v-on:click="$emit('removeMenu', item)"
          class="appearance-none cursor-pointer text-70 hover:text-primary mr-1"
        >
          <delete-icon />
        </button>
      </div>
    </vue-nestable-handle>
  </vue-nestable>
</template>

<script>
import { VueNestable, VueNestableHandle } from 'vue-nestable';
import ArrowIcon from './icons/ArrowIcon';
import DeleteIcon from './icons/DeleteIcon';
import DuplicateIcon from './icons/DuplicateIcon';
import EditIcon from './icons/EditIcon';
import NewMenuItemIcon from './icons/NewMenuItemIcon';

export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },

  components: {
    VueNestable,
    VueNestableHandle,
    ArrowIcon,
    DeleteIcon,
    DuplicateIcon,
    EditIcon,
  },

  data: () => ({
    duplicateItem: null,
  }),

  methods: {
    hasChildren(item) {
      return Array.isArray(item.children) && item.children.length;
    },

    toggleMenuChildrenCascade(item) {
      if (item.classProp.find(className => className === 'hide-cascade')) {
        item.classProp.splice(item.classProp.indexOf('hide-cascade'), 1);
      } else {
        item.classProp.push('hide-cascade');
      }
      this.$emit('saveMenuLocalState', item);
    },

    isCascadeOpen(item) {
      return !item.classProp.find(className => className === 'hide-cascade');
    },
  },
};
</script>
