<template>
  <modal :show="modalConfirm" :name="'modalConfirm'" :align="'flex justify-end'" :width="400">
    <div slot="container">
      <h2 class="mb-6 text-90 font-normal text-xl">{{ __('Delete item') }}</h2>
      <p v-if="itemToDelete && itemToDelete.children.length > 0" class="text-80 leading-normal mb-4">
        {{ __("Take care. All children items will be deleted cause you're deleting the parent.") }}
      </p>
      <p class="text-80 leading-normal">{{ __('Are you sure to delete this menu item?') }}</p>
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
          {{ __('Yes, remove!') }}
        </button>
      </div>
    </div>
  </modal>
</template>
<script>
import Modal from './Modal';
export default {
  props: ['modalConfirm', 'itemToDelete'],
  components: {
    Modal,
  },
};
</script>
