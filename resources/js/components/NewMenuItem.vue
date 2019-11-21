<template>
  <div class="flex justify-center items-center px-6 py-8">
    <div class="text-center">
      <menu-builder-new-item-icon />

      <h3 class="text-base text-80 font-normal mb-6">{{ __('No menu items yet') }}</h3>

      <div>
        <button class="btn btn-sm btn-outline" v-on:click="newMenuItem">{{ __('Add item') }}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['newMenuItem'],
};
</script>
