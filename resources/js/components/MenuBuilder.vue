<template>
    <vue-nestable
        :value="value"
        :max-depth="maxDepth"
        @input="val => $emit('input', val)"
        @change="$emit('onMenuChange')"
        class="px-3 menu-builder"
        classProp="classProp"
    >
        <vue-nestable-handle
            slot-scope="{ item }"
            :item="item"
            class="handle flex flex-wrap bg-gray-100 shadow-sm border rounded-md outline-none"
            :class="{ 'border-40': !item.is_active, 'border-60': item.is_active }"
        >
            <div :class="`item-data w-3/4 flex ${!hasChildren(item) ? 'pl-3' : ''}`">
                <!-- Collapse icon -->
                <button
                    v-if="hasChildren(item)"
                    @click.prevent="toggleMenuChildrenCascade(item)"
                    class="appearance-none cursor-pointer fill-current hover:text-primary flex px-4 items-center focus:outline-none"
                >
                    <arrow-icon :wrapperClass="`${isCascadeOpen(item) ? 'btn-cascade-open' : ''}`"/>
                </button>

                <div :class="`text-90 text-ellipsis ${!item.is_active ? 'opacity-25' : ''}`">
                    {{ item.label }}
                    <span :class="`font-lighter text-80 ml-4 text-sm text-ellipsis ${!item.is_active ? 'opacity-25' : ''}`">
                        Slug: {{ item.slug }} {{ item.displayValue }}
                    </span>
                </div>

            </div>

            <div class="buttons w-1/4 flex justify-end content-center">
                <!-- Edit icon -->
                <tooltip v-if="config.permissions.includes('update.menus')">
                    <button
                        :title="__('novaMenuBuilder.edit')"
                        @click.prevent="$emit('editMenu', item)"
                        class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
                    >
                        <edit-icon/>
                    </button>

                    <tooltip-content slot="content">
                        {{ __('novaMenuBuilder.edit') }}
                    </tooltip-content>
                </tooltip>

                <!-- Duplicate icon -->
                <tooltip v-if="config.permissions.includes('create.menus')">
                    <button
                        :title="__('novaMenuBuilder.duplicate')"
                        @click.prevent="$emit('duplicateMenuItem', item)"
                        class="appearance-none cursor-pointer text-70 hover:text-primary mr-3"
                    >
                        <duplicate-icon/>
                    </button>

                    <tooltip-content slot="content">
                        {{ __('novaMenuBuilder.duplicate') }}
                    </tooltip-content>
                </tooltip>

                <button
                    v-if="config.permissions.includes('delete.menus')"
                    :title="__('novaMenuBuilder.delete')"
                    @click.prevent="$emit('removeMenu', item)"
                    class="appearance-none cursor-pointer text-70 hover:text-primary mr-1"
                >
                    <delete-icon/>
                </button>
            </div>
        </vue-nestable-handle>
    </vue-nestable>
</template>

<script>
import {VueNestable, VueNestableHandle} from 'vue-nestable';
import ArrowIcon from './icons/ArrowIcon';
import DeleteIcon from './icons/DeleteIcon';
import DuplicateIcon from './icons/DuplicateIcon';
import EditIcon from './icons/EditIcon';

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
        ArrowIcon,
        DeleteIcon,
        DuplicateIcon,
        EditIcon,
    },

    data() {
        let config = window.Nova.config.menuBuilder;

        return {
            config,
            duplicateItem: null,
        }
    },

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
    .handle {
        .item-data {
            max-height: 45px;
        }
    }
}
</style>
