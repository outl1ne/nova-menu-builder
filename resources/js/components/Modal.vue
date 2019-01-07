<template>
    <portal to="modals" :name="name">
        <transition name="fade">
            <modal>
                <div class="bg-white rounded-lg shadow-lg" :style="style">
                    <div class="p-8"><slot name="container"></slot></div>

                    <div class="bg-30 px-6 py-3 flex">
                        <div class="w-full " :class="align"><slot name="buttons"></slot></div>
                    </div>
                </div>
            </modal>
        </transition>
    </portal>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'modal',
            required: false,
        },
        width: {
            type: Number,
            default: 600,
            required: false,
        },
        align: {
            type: String,
            default: '',
            required: false,
        },
    },

    data: () => ({
        //
    }),

    computed: {
        style() {
            return 'width: ' + this.width + 'px;';
        },
    },
};
</script>

<style scoped></style>
