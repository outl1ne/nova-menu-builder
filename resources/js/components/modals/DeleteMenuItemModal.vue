<template>
  <modal :show="showModal" align="flex justify-end" :width="400">
    <div slot="container">
      <h2 class="mb-6 text-90 font-normal text-xl">{{ __('nova-menu-builder::del_confirm_modal_title') }}</h2>
      <p v-if="itemToDelete && itemToDelete.children.length > 0" class="text-80 leading-normal mb-4">
        {{ __('nova-menu-builder::del_confirm_modal_desc_children') }}
      </p>
      <p class="text-80 leading-normal">{{ __('nova-menu-builder::del_confirm_modal_desc') }}</p>
    </div>
    <div slot="buttons">
      <div class="ml-auto">
        <button
          type="button"
          @click.prevent="$emit('closeModal')"
          class="btn text-80 font-normal h-9 px-3 mr-3 btn-link"
        >
          {{ __('Cancel') }}
        </button>

        <button
          id="confirm-overwrite-button"
          @click.prevent="$emit('confirmItemDelete')"
          class="btn btn-default btn-danger"
        >
          {{ __('Delete') }}
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal';

export default {
  props: ['showModal', 'itemToDelete'],
  components: { Modal },
};
</script>
