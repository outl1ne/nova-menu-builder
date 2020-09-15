<template>
  <div id="menu-builder-header">
    <div class="locale-selection px-6 mr-6 bg-white rounded-md">
      <a
        v-for="locale of Object.keys(locales)"
        :key="locale"
        @click="() => $emit('changeLocale', locale)"
        class="mx-2 cursor-pointer font-bold"
        :class="{ 'text-primary underline': activeLocale === locale, 'text-80': activeLocale !== locale }"
      >
        {{ locales[locale] }}
      </a>
    </div>

    <button
      id="add-new-menu-item-btn"
      :title="__('novaMenuBuilder.addMenuItem')"
      class="btn btn-default btn-icon bg-primary text-white flex-no-shrink"
      @click="$emit('addMenuItem')"
    >
      {{ __('novaMenuBuilder.addMenuItem') }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['locales', 'activeLocale'],

  mounted() {
    console.log('haha');
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
