<template>
  <vue-nestable v-model="menuItems" @change="change" classProp="classProp">
    <template slot-scope="{ item }">
      <vue-nestable-handle :item="item" class="handle flex flex-wrap">
        <div :class="`item-data w-2/3 flex ${!hasChildren(item) && 'pl-3'}`">
          <button
            v-if="hasChildren(item)"
            @click="toggleMenuChildrenCascade(item)"
            title="Edit"
            class="appearance-none cursor-pointer text-70 hover:text-primary flex pl-4 pr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              :class="`fill-current ${isCascadeOpen(item) && 'btn-cascade-open'}`"
            >
              <path
                fill="var(--90)"
                d="M8.292893.292893c.390525-.390524 1.023689-.390524 1.414214 0 .390524.390525.390524 1.023689 0 1.414214l-4 4c-.390525.390524-1.023689.390524-1.414214 0l-4-4c-.390524-.390525-.390524-1.023689 0-1.414214.390525-.390524 1.023689-.390524 1.414214 0L5 3.585786 8.292893.292893z"
              ></path>
            </svg>
          </button>

          <div class="text-90">{{ item.name }}</div>
          <div class="font-lighter text-80 ml-4 text-sm">{{ item.displayValue }}</div>
        </div>

        <div class="buttons w-1/3 flex justify-end content-center">
          <button
            @click="editMenu(item)"
            title="Edit"
            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-labelledby="edit" class="fill-current">
              <path
                d="M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"
              ></path>
            </svg>
          </button>

          <button
            v-on:click="removeMenu(item)"
            title="Delete"
            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3 self-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              aria-labelledby="delete"
              class="fill-current"
            >
              <path
                d="M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
              ></path>
            </svg>
          </button>
        </div>
      </vue-nestable-handle>
    </template>
  </vue-nestable>
</template>
<script>
import { VueNestable, VueNestableHandle } from 'vue-nestable';
import { codemirror } from 'vue-codemirror';

import 'codemirror/addon/display/placeholder.js';
//themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';

export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
    editMenu: {
      type: Function,
      required: true,
    },
    removeMenu: {
      type: Function,
      required: true,
    },
    change: {
      type: Function,
      required: true,
    },
  },

  components: {
    VueNestable,
    VueNestableHandle,
    codemirror,
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
    },

    isCascadeOpen(item) {
      return !item.classProp.find(className => className === 'hide-cascade');
    },

    openDuplicateMenuModal(item) {
      this.duplicateItem = item;
    },

    log(item) {
      console.log('menuItems wtf', item);
    },
  },
};
</script>
