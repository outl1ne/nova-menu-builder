<template>
    <div class="menu-builder">
        <vue-nestable
            :value="value"
            :max-depth="maxDepth"
            @input="value = $event"
            @change="$emit('onMenuChange')"
            :hooks="{ beforeMove: beforeMove }"
            class="px-3"
            classProp="classProp"
        >
            <template v-slot="{ item }">
                <vue-nestable-handle
                    class="handle dark:bg-gray-800 flex items-center justify-between border rounded-lg outline-none border-b border-gray-200 dark:border-gray-600"
                >
                    <div class="item-data items-center flex shrink min-w-0" :class="{ 'px-3': !hasChildren(item) }">
                        <button
                            v-if="hasChildren(item)"
                            @click.prevent="toggleMenuChildrenCascade(item)"
                            class="appearance-none cursor-pointer fill-current hover:text-primary flex px-3 items-center focus:outline-none"
                        >
                            <Icon :type="isCascadeOpen(item) ? 'chevron-down' : 'chevron-up'"/>
                        </button>

                        <div
                            class="text-90 font-bold whitespace-nowrap overflow-hidden text-ellipsis"
                            :class="{ 'opacity-25': !item.is_active }"
                        >
                            {{ item.label }}
                        </div>

                        <div
                            class="font-lighter text-80 ml-4 text-sm whitespace-nowrap text-ellipsis overflow-hidden"
                            :class="{ 'opacity-25': !item.is_active }"
                        >
                            Slug: {{ item.slug }}
                        </div>
                    </div>

                    <div class="buttons md:w-1/3 flex justify-end content-center">
                        <button
                            :title="__('novaMenuBuilder.edit')"
                            @click.prevent="$emit('editMenu', item)"
                            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
                        >
                            <Icon type="pencil-alt"/>
                        </button>

                        <button
                            :title="__('novaMenuBuilder.duplicate')"
                            @click.prevent="$emit('duplicateMenuItem', item)"
                            class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
                        >
                            <Icon type="duplicate"/>
                        </button>

                        <button
                            :title="__('novaMenuBuilder.delete')"
                            @click.prevent="$emit('removeMenu', item)"
                            class="appearance-none cursor-pointer text-70 hover:text-primary mr-1"
                        >
                            <Icon type="trash"/>
                        </button>
                    </div>
                </vue-nestable-handle>
            </template>
        </vue-nestable>
    </div>
</template>

<script>
import {VueNestable, VueNestableHandle} from 'vue3-nestable';

export default {
    props: {
        value: {
            type: Array,
            required: true,
        },
        maxDepth: {
            type: Number,
            required: false,
            default: 10,
        },
    },

    components: {
        VueNestable,
        VueNestableHandle,
    },

    data: () => ({
        duplicateItem: null,
    }),

    methods: {
        hasChildren(item) {
            return Array.isArray(item.children) && item.children.length;
        },

        toggleMenuChildrenCascade(item) {
            if (item.classProp.find(className => className === 'hide-cascade')) {
                item.classProp.splice(item.classProp.indexOf('hide-cascade'), 1);
            } else {
                item.classProp.push('hide-cascade');
            }
            this.$emit('saveMenuLocalState', item);
        },

        isCascadeOpen(item) {
            return !item.classProp.find(className => className === 'hide-cascade');
        },

        beforeMove({dragItem, pathFrom, pathTo}) {
            if (dragItem.nestable) {
                return true;
            }

            return pathTo.length === 1;
        },
    },
};
</script>

<style lang="scss">
.menu-builder {
    .v-popover,
    .v-popover > * > span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.justify-end {
    justify-content: flex-end;
}

.opacity-25 {
    opacity: 0.25;
}
</style>
