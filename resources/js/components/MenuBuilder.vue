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
            <Icon :type="isCascadeOpen(item) ? 'chevron-down' : 'chevron-up'" />
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
          <button
            :title="__('novaMenuBuilder.edit')"
            @click.prevent="$emit('editMenu', item)"
            class="text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          >
            <Icon type="pencil-alt" />
          </button>

          <button
            :title="__('novaMenuBuilder.duplicate')"
            @click.prevent="$emit('duplicateMenuItem', item)"
            class="text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          >
            <Icon type="duplicate" />
          </button>

          <button
            :title="__('novaMenuBuilder.delete')"
            @click.prevent="$emit('removeMenu', item)"
            class="text-gray-500 dark:text-gray-400 hover:[&:not(:disabled)]:text-primary-500 dark:hover:[&:not(:disabled)]:text-primary-500"
          >
            <Icon type="trash" />
          </button>
        </div>
      </vue-nestable-handle>
    </template>
  </vue-nestable>
</template>

<script>
import { VueNestable, VueNestableHandle } from 'vue3-nestable';

// vue3-nestable reinterprets a *downward* same-level drag as "nest as the first
// child of the target" whenever the target has children and the library thinks
// it isn't collapsed. This menu builder collapses subtrees purely with the CSS
// class `hide-cascade`, which the library's own `isCollapsed()` can't see, so it
// ALWAYS treats parents as open drop targets. The reinterpreted (deeper) move
// then either trips the `maxDepth` guard (and is silently dropped — no
// `beforeMove`, no drop overlay) or buries the dragged item inside the target.
// That is why items with children could only be dragged up (a plain swap) and
// not down, even when visually collapsed.
//
// We extend the component and override getRealNextPath so a same-level move is
// always a plain reorder/swap. Nesting is still available via horizontal drag
// (tryIncreaseDepth). To instead keep "drop onto an open folder = nest" for
// expanded items, restore the original branch but gate it on the target NOT
// carrying the `hide-cascade` class instead of the library's isCollapsed().
const ReorderableNestable = {
  extends: VueNestable,
  methods: {
    getRealNextPath(prevPath, nextPath) {
      const ppLastIndex = prevPath.length - 1;
      const npLastIndex = nextPath.length - 1;

      // Moving to a deeper level (e.g. horizontal drag to nest) keeps the
      // library's original index-shifting behaviour.
      if (prevPath.length < nextPath.length) {
        let wasShifted = false;

        return nextPath.map((nextIndex, i) => {
          if (wasShifted) {
            return i === npLastIndex ? nextIndex + 1 : nextIndex;
          }

          if (typeof prevPath[i] !== 'number') {
            return nextIndex;
          }

          if (nextPath[i] > prevPath[i] && i === ppLastIndex) {
            wasShifted = true;
            return nextIndex - 1;
          }

          return nextIndex;
        });
      }

      // Same-level move: always reorder. Never silently convert a downward drag
      // into a nesting operation.
      return nextPath;
    },
  },
};

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

  components: {
    VueNestable: ReorderableNestable,
    VueNestableHandle,
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
