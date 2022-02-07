<template>
  <div id="menu-builder-header">
    <div class="locale-selection px-6 mr-4 bg-white rounded-md" v-if="Object.keys(locales).length > 1">
      <div
        v-for="locale of Object.keys(locales)"
        :key="locale"
        @click.prevent="$emit('changeLocale', locale)"
        class="mx-2 cursor-pointer font-bold border-b-2 px-2 h-full flex items-center box-border"
        :class="{
          'text-primary border-primary': activeLocale === locale,
          'text-80 border-white': activeLocale !== locale,
        }"
      >
        <span> {{ locales[locale] }} ({{ locale }}) </span>
      </div>
    </div>

    <button
      id="copy-menu-btn"
      class="btn btn-default btn-icon bg-primary text-white flex-no-shrink mr-4"
      @click.prevent="showCopyModal = true"
      v-if="showCopyButton"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
        <path
          class="fill-current"
          d="M17 7h2.25c.97 0 1.75.78 1.75 1.75v10.5c0 .97-.78 1.75-1.75 1.75H8.75C7.78 21 7 20.22 7 19.25V17H4.75C3.78 17 3 16.22 3 15.25V4.75C3 3.78 3.78 3 4.75 3h10.5c.97 0 1.75.78 1.75 1.75V7zm-2 0V5H5v10h2V8.75C7 7.78 7.78 7 8.75 7H15zM9 9v10h10V9H9z"
        />
      </svg>
    </button>

    <button
      id="add-new-menu-item-btn"
      :title="__('novaMenuBuilder.addMenuItem')"
      class="btn btn-default btn-icon bg-primary text-white flex-no-shrink"
      @click.prevent="$emit('addMenuItem')"
    >
      {{ __('novaMenuBuilder.addMenuItem') }}
    </button>

    <copy-menu-items-modal
      :resourceId="resourceId"
      :activeLocale="activeLocale"
      :locales="locales"
      :showModal="showCopyModal"
      :menuCount="menuCount"
      @closeModal="showCopyModal = false"
      @refreshItems="$emit('refreshItems')"
    />
  </div>
</template>

<script>
import CopyMenuItemsModal from '../modals/CopyMenuItemsModal';

export default {
  components: { CopyMenuItemsModal },

  props: ['locales', 'activeLocale', 'resourceId', 'menuCount'],

  data: () => ({
    showCopyModal: false,
  }),

  computed: {
    showCopyButton() {
      // If only 1 locale and 1 menu, don't show the button
      const localeCount = Object.keys(this.locales).length;
      return localeCount > 1 || this.menuCount > 1;
    },
  },
};
</script>

<style lang="scss">
#menu-builder-header {
  position: absolute;
  right: 0;
  top: -46px;
  display: flex;

  .locale-selection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
