<template>
    <Modal :show="showModal" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <ModalHeader v-text="__('novaMenuBuilder.delConfirmModalTitle')"/>

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
                    dusk="cancel-action-button"
                    type="button"
                    @click.prevent="$emit('closeModal')"
                />

                <DangerButton
                    class="ml-3 border text-left appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed inline-flex items-center justify-center shadow h-9 px-3 bg-primary-500 border-primary-500 hover:[&amp;:not(:disabled)]:bg-primary-400 hover:[&amp;:not(:disabled)]:border-primary-400 text-white dark:text-gray-900"
                    @click="$emit('confirmItemDelete')">
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
