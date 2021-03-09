<template>
  <div id="menu-builder-header">
    <div class="locale-selection px-6 mr-6 bg-white rounded-md" v-if="Object.keys(locales).length > 1">
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
      id="add-new-menu-item-btn"
      :title="__('nova-menu-builder::add_menu_item')"
      class="btn btn-default btn-icon bg-primary text-white flex-no-shrink"
      @click.prevent="$emit('addMenuItem')"
    >
      {{ __('nova-menu-builder::add_menu_item') }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['locales', 'activeLocale'],
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
