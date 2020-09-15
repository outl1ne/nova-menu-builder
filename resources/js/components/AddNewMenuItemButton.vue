<template>
  <button
    id="add-new-menu-item-btn"
    :title="__('Add')"
    class="btn btn-default btn-icon bg-primary text-white flex-no-shrink"
    @click="e => e.preventDefault()"
  >
    {{ __('Add item') }}
  </button>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="scss">
#add-new-menu-item-btn {
  position: absolute;
  right: 0;
  top: -46px;
}
</style>
