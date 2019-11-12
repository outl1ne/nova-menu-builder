<template>
  <vue-nestable :value="value" @input="val => this.$emit('input', val)" @change="change" classProp="classProp">
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
            @click="duplicateMenuItem(item)"
            title="Duplicate"
            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
          >
            <svg height="20px" viewBox="-56 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg" class="fill-current">
              <path stroke="#b3b9bf" stroke-width="10"
                    d="m395.980469 112.582031-108.023438-108.023437c-2.960937-2.960938-6.949219-4.558594-11.019531-4.558594h-156.339844c-8.597656 0-15.578125 6.980469-15.578125 15.578125v89.445313h-89.441406c-8.597656 0-15.578125 6.976562-15.578125 15.578124v375.820313c0 8.597656 6.980469 15.578125 15.578125 15.578125h264.359375c8.601562 0 15.582031-6.980469 15.582031-15.578125v-89.445313h89.441407c8.597656 0 15.578124-6.976562 15.578124-15.578124v-267.796876c0-3.960937-1.523437-7.984374-4.558593-11.019531zm-26.597657 263.238281h-73.863281v-147.195312c0-4.035156-1.570312-8.03125-4.5625-11.023438l-108.019531-108.019531c-2.933594-2.9375-6.914062-4.5625-11.019531-4.5625h-35.738281v-73.863281h125.179687v92.445312c0 8.597657 6.980469 15.578126 15.578125 15.578126h92.445312zm-105.023437 105.023438h-233.203125v-344.664062h125.179688v92.445312c0 8.597656 6.980468 15.578125 15.582031 15.578125h92.441406zm-76.863281-322.636719 54.835937 54.835938h-54.835937zm159.855468-50.183593h-54.835937v-54.835938c6.855469 6.851562 49.367187 49.367188 54.835937 54.835938zm0 0"
              />
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
    value: {
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
    duplicateMenuItem: {
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
  },
};
</script>
