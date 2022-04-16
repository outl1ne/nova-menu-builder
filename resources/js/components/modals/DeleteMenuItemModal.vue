<template>
  <Modal
    :show="showModal"
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  >
    <ModalHeader v-text="__('novaMenuBuilder.delConfirmModalTitle')" />

    <div class="p-6 grid gap-6">
      <p v-if="itemToDelete && itemToDelete.children.length > 0">
        {{ __('novaMenuBuilder.delConfirmModalDescChildren') }}
      </p>
      <p>
        {{ __('novaMenuBuilder.delConfirmModalDesc') }}
      </p>
    </div>

    <ModalFooter class="flex justify-end">
      <div class="ml-auto">
        <CancelButton
            component="button"
            type="button"
            dusk="cancel-action-button"
            @click.prevent="$emit('closeModal')"
        />

        <DangerButton
          class="ml-3"
          @click="$emit('confirmItemDelete')"
        >
          {{ __('novaMenuBuilder.delConfirmModalConfirm') }}
        </DangerButton>
      </div>
    </ModalFooter>
  </Modal>
</template>

<script>
export default {
  props: ['showModal', 'itemToDelete'],
};
</script>
