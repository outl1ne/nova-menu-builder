<template>
  <vue-nestable
    :value="value"
    @input="val => $emit('input', val)"
    @change="$emit('onMenuChange')"
    class="px-3 menu-builder"
    classProp="classProp"
  >
    <vue-nestable-handle
      slot-scope="{ item }"
      :item="item"
      class="handle flex flex-wrap bg-gray-100 shadow-sm border rounded-md outline-none"
      :class="{ 'border-40': !item.enabled, 'border-60': item.enabled }"
    >
      <div :class="`item-data w-2/3 flex ${!hasChildren(item) ? 'pl-3' : ''}`">
        <!-- Collapse icon -->
        <button
          v-if="hasChildren(item)"
          @click.prevent="toggleMenuChildrenCascade(item)"
          class="appearance-none cursor-pointer fill-current hover:text-primary flex px-4 items-center focus:outline-none"
        >
          <arrow-icon :wrapperClass="`${isCascadeOpen(item) ? 'btn-cascade-open' : ''}`" />
        </button>

        <div :class="`text-90 ${!item.enabled ? 'opacity-25' : ''}`">{{ item.name }}</div>
        <div :class="`font-lighter text-80 ml-4 text-sm ${!item.enabled ? 'opacity-25' : ''}`">
          {{ item.displayValue }}
        </div>
      </div>

      <div class="buttons w-1/3 flex justify-end content-center">
        <!-- Edit icon -->
        <tooltip>
          <button
            :title="__('Edit')"
            @click.prevent="$emit('editMenu', item)"
            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
          >
            <edit-icon />
          </button>

          <tooltip-content slot="content">
            {{ __('Edit') }}
          </tooltip-content>
        </tooltip>

        <!-- Duplicate icon -->
        <tooltip>
          <button
            :title="__('nova-menu-builder::duplicate')"
            @click.prevent="$emit('duplicateMenuItem', item)"
            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
          >
            <duplicate-icon />
          </button>

          <tooltip-content slot="content">
            {{ __('nova-menu-builder::duplicate') }}
          </tooltip-content>
        </tooltip>

        <button
          :title="__('Delete')"
          @click.prevent="$emit('removeMenu', item)"
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

<style lang="scss">
.menu-builder {
  .v-popover,
  .v-popover > * > span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
