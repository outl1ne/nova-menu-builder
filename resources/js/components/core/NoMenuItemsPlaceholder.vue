<template>
  <div class="flex justify-center items-center px-6 py-8">
    <div class="text-center">
      <create-icon />
      <h3 class="text-base text-80 font-normal mb-6">{{ __('nova-menu-builder::no_menu_items_placeholder') }}</h3>
      <div>
        <button class="btn btn-sm btn-outline" @click.prevent="$emit('onAddClick')">
          {{ __('nova-menu-builder::add_menu_item') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CreateIcon from '../icons/CreateIcon';

export default {
  components: { CreateIcon },
};
</script>
