<template>
  <vue-nestable
    :value="value"
    :max-depth="maxDepth"
    @input="value = $event"
    @change="$emit('onMenuChange')"
    :hooks="{
      beforeMove: beforeMove,
    }"
    class="px-3"
    classProp="classProp"
  >
    <template v-slot="{ item }">
      <vue-nestable-handle
        class="handle dark:o1-bg-gray-800 o1-flex io1-tems-center o1-justify-between o1-border o1-rounded-lg o1-outline-none o1-border-b o1-border-gray-200 dark:o1-border-gray-600"
      >
        <div class="item-data o1-items-center o1-flex o1-shrink o1-min-w-0" :class="{ 'o1-px-3': !hasChildren(item) }">
          <button
            v-if="hasChildren(item)"
            @click.prevent="toggleMenuChildrenCascade(item)"
            class="o1-appearance-none o1-cursor-pointer o1-fill-current hover:o1-text-primary o1-flex o1-px-3 o1-items-center focus:o1-outline-none"
          >
              <Icon :name="getIconName(item)" type="outline"/>
          </button>

          <div
            class="o1-text-90 o1-font-bold o1-whitespace-nowrap o1-overflow-hidden o1-text-ellipsis"
            :class="{ 'opacity-25': !item.enabled }"
          >
            {{ item.name }}
          </div>

          <div
            class="o1-font-lighter o1-text-80 o1-ml-4 o1-text-sm o1-whitespace-nowrap o1-text-ellipsis o1-overflow-hidden"
            :class="{ 'o1-opacity-25': !item.enabled }"
          >
            {{ item.displayValue }}
          </div>
        </div>

        <div class="buttons o1-gap-x-2 md:o1-w-1/3 o1-flex o1-justify-end o1-content-center">
          <span
            :title="__('novaMenuBuilder.edit')"
            @click.prevent="$emit('editMenu', item)"
            class="mt-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          >
            <Icon name="PencilAlt" type="outline" />
          </span>

          <span
            :title="__('novaMenuBuilder.duplicate')"
            @click.prevent="$emit('duplicateMenuItem', item)"
            class="mt-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          >
            <Icon name="Duplicate" type="outline" />
          </span>

          <span
            :title="__('novaMenuBuilder.delete')"
            @click.prevent="$emit('removeMenu', item)"
            class="mt-2 cursor-pointer text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          >
            <Icon name="trash" type="outline" />
          </span>
        </div>
      </vue-nestable-handle>
    </template>
  </vue-nestable>
</template>

<script>
import { VueNestable, VueNestableHandle } from 'vue3-nestable';
import { Icon } from 'laravel-nova-ui';

export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
    maxDepth: {
      type: Number,
      required: false,
      default: 10,
    },
  },
 computed: {
    getIconName() {
          return (item) => this.isCascadeOpen(item) ? 'SortDescending' : 'ViewList';
    }
  },
  components: {
    VueNestable,
    VueNestableHandle,
      Icon
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

    beforeMove({ dragItem, pathFrom, pathTo }) {
      if (dragItem.nestable) {
        return true;
      }

      return pathTo.length === 1;
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
.justify-end {
  justify-content: flex-end;
}
.opacity-25 {
  opacity: 0.25;
}
</style>
