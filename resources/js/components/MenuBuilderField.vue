<template>
    <div id="menu-builder-field" class="relative pb-3 w-full">
        <menu-builder-header
            :activeLocale="selectedLocale"
            :locales="field.locales"
            :menuCount="field.menuCount"
            :resourceId="resourceId"
            :showDuplicate="field.showDuplicate"
            @addMenuItem="openAddModal"
            @changeLocale="setSelectedLocale"
            @refreshItems="refreshData"
        />

        <div v-if="loadingMenuItems" class="py-6">
            <loader class="text-60"/>
        </div>

        <no-menu-items-placeholder v-if="!loadingMenuItems && !menuItems.length" @onAddClick="openAddModal"/>
        <menu-builder
            v-if="!loadingMenuItems && menuItems.length"
            :max-depth="field.maxDepth"
            :value="menuItems"
            :nova-path="field.novaPath"
            @duplicateMenuItem="duplicateMenuItem"
            @editMenu="editMenu"
            @input="menuItems = $event"
            @onMenuChange="updateMenu"
            @removeMenu="removeMenu"
            @saveMenuLocalState="saveMenuLocalState"
        />

        <update-menu-item-modal
            :errors="errors"
            :isMenuItemUpdating="isMenuItemUpdating"
            :linkType="linkType"
            :menuItemTypes="menuItemTypes"
            :newItem="newItem"
            :resourceId="resourceId"
            :resourceName="resourceName"
            :showModal="showAddModal"
            :update="update"
            :nova-path="field.novaPath"
            @closeModal="closeModal"
            @confirmItemCreate="confirmItemCreate"
            @onLinkEntityIdUpdate="updateEntityId"
            @onLinkEntityItemIdUpdate="updateEntityItemId"
            @onLinkModelUpdate="updateLinkModel"
            @onLinkTypeUpdate="updateLinkType"
            @updateItem="updateItem"
        />

        <delete-menu-item-modal
            :itemToDelete="itemToDelete"
            :showModal="showDeleteModal"
            @closeModal="closeModal"
            @confirmItemDelete="confirmItemDelete"
        />
    </div>
</template>

<script>
import api from '../api';
import {FormField} from 'laravel-nova';
import MenuBuilder from './MenuBuilder';
import MenuBuilderHeader from './core/MenuBuilderHeader';
import UpdateMenuItemModal from './modals/UpdateMenuItemModal';
import DeleteMenuItemModal from './modals/DeleteMenuItemModal';
import NoMenuItemsPlaceholder from './core/NoMenuItemsPlaceholder';
import HandlesCollapsibleState from '../mixins/HandlesCollapsibleState';

export default {
    mixins: [FormField, HandlesCollapsibleState],

    props: ['resourceName', 'resourceId', 'field'],

    components: {
        MenuBuilder,
        MenuBuilderHeader,
        NoMenuItemsPlaceholder,
        DeleteMenuItemModal,
        UpdateMenuItemModal,
    },

    data: () => ({
        loadingMenuItems: false,
        isMenuItemUpdating: false,
        selectedLocale: void 0,
        showDeleteModal: false,
        showAddModal: false,
        itemToDelete: null,
        update: false,
        linkType: {},
        errors: {},
        newItem: {
            name: null,
            value: '',
            target: '_self',
            menu_id: null,
            enabled: true,
            classProp: [],
        },
        menuItems: [],
        menuItemTypes: void 0,
    }),

    beforeMount() {
        // Set starting locale
        this.selectedLocale = Object.keys(this.field.locales)[0];
    },

    async mounted() {
        // Fix classes on Detail view
        this.$parent.$el.classList.remove('py-3', 'px-6');
        this.refreshData();
    },

    computed: {
        newItemData() {
            return {
                ...this.newItem,
                locale: this.selectedLocale,
                class: this.linkType.class,
                menu_id: this.resourceId,
            };
        },
    },

    methods: {
        setSelectedLocale(locale) {
            this.selectedLocale = locale;
            this.refreshData();
        },

        openAddModal() {
            this.update = false;
            this.showAddModal = true;
        },

        closeModal() {
            this.showAddModal = false;
            this.showDeleteModal = false;
            this.resetNewItem();
        },

        async refreshData() {
            this.loadingMenuItems = true;
            const menuItems = (await api.getItems(this.resourceId, this.selectedLocale)).data;
            this.menuItems = this.setMenuItemProperties(
                Object.values(menuItems),
                this.getMenuLocalState(),
                this.field.collapsedAsDefault
            );

            const menuItemTypes = (await api.getMenuItemTypes(this.resourceId, this.selectedLocale)).data;
            this.menuItemTypes = Object.values(menuItemTypes);

            this.loadingMenuItems = false;
        },

        async editMenu(item) {
            this.update = true;
            this.newItem = (await api.getMenuItem(item.id)).data;
            this.showAddModal = true;
            this.linkType = this.menuItemTypes.find(lt => lt.class === this.newItem.class) || {};
        },

        removeMenu(item) {
            this.itemToDelete = item;
            this.showDeleteModal = true;
        },

        async confirmItemDelete() {
            try {
                await api.destroy(this.itemToDelete.id);
                await this.refreshData();
                Nova.success(this.__('novaMenuBuilder.toastDeleteSuccess'));
                this.itemToDelete = null;
                this.showDeleteModal = false;
            } catch (e) {
                this.handleErrors(e);
            }
        },

        resetNewItem() {
            this.errors = {};

            this.newItem = {
                name: null,
                value: '',
                target: '_self',
                enabled: true,
                menu_id: this.resourceId,
            };

            this.linkType = {};
        },

        async confirmItemCreate() {
            try {
                this.errors = {};
                await api.create(this.newItemData);
                this.refreshData();
                this.showAddModal = false;
                this.resetNewItem();
                Nova.success(this.__('novaMenuBuilder.toastCreateSuccess'));
            } catch (e) {
                console.error(e);
                this.handleErrors(e);
            }
        },

        async updateItem() {
            try {
                this.isMenuItemUpdating = true;
                this.errors = {};

                let formData = new FormData();
                Object.entries(this.newItemData).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                await api.update(this.newItem.id, formData);

                this.isMenuItemUpdating = false;
                this.showAddModal = false;
                Nova.success(this.__('novaMenuBuilder.toastUpdateSuccess'));
                this.resetNewItem();
                await this.refreshData();
            } catch (e) {
                this.isMenuItemUpdating = false;
                this.handleErrors(e);
            }
        },

        async updateMenu() {
            try {
                await api.saveItems(this.resourceId, this.menuItems);
                Nova.success(this.__('novaMenuBuilder.toastReorderSuccess'));
            } catch (e) {
                Nova.error(this.__('novaMenuBuilder.serverError'));
            }
        },

        handleErrors(res) {
            let errors = res.response && res.response.data && res.response.data.errors;
            if (errors) {
                this.errors = errors;
                Object.values(errors).map(error => Nova.error(error));
            }
        },

        async duplicateMenuItem(item) {
            try {
                await api.duplicate(item.id);
                await this.refreshData();
                this.resetNewItem();
                Nova.success(this.__('novaMenuBuilder.toastDuplicateSuccess'));
            } catch (e) {
                this.handleErrors(e);
            }
        },

        updateLinkModel(modelId) {
            this.newItem.url = modelId || '';
        },

        updateEntityId(entityId) {
            this.newItem.entity_id = entityId;
        },

        updateEntityItemId(itemId) {
            this.newItem.entity_item_id = itemId;
            this.newItem.is_index = itemId === '0';

            return itemId;
        },

        updateLinkType(linkType) {
            this.linkType = this.menuItemTypes.find(type => type.class === linkType) || {};
            this.newItem.url = '';
        },
    },
};
</script>

<style lang="scss">
[dusk='nova-menus-detail-component'] #menu-builder-field {
    margin: -8px 0;
}

#menu-builder-field {
    .menu-button {
        position: absolute;
        right: -12px;
        margin-top: -72px;
    }

    .nestable {
        position: relative;

        .nestable-list {
            margin: 0;
            padding: 0 0 0 40px;
            list-style-type: none;
        }

        > .nestable-list {
            padding: 0;
        }

        .nestable-item,
        .nestable-item-copy {
            margin: 10px 0 0;
        }

        .nestable-item:first-child,
        .nestable-item-copy:first-child {
            margin-top: 0;
        }

        .nestable-item .nestable-list,
        .nestable-item-copy .nestable-list {
            margin-top: 10px;
        }

        .nestable-item {
            position: relative;
        }
    }

    .handle {
        width: 100%;
        padding: 0 10px 0 0;
        height: 45px;
        line-height: 45px;
    }

    .nestable-item.is-dragging .nestable-list {
        pointer-events: none;
    }

    .nestable-item.is-dragging * {
        opacity: 0;
        filter: alpha(opacity=0);
    }

    .nestable-item.is-dragging:before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(106, 127, 233, 0.274);
        border: 1px dashed rgb(73, 100, 241);
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    .nestable-drag-layer {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        pointer-events: none;
    }

    .nestable-drag-layer > .nestable-list {
        position: absolute;
        top: 0;
        left: 0;
        padding: 0;
        background-color: rgba(106, 127, 233, 0.274);
    }

    .nestable [draggable='true'] {
        cursor: move;
    }

    .disabled {
        opacity: 0.5;
    }

    .btn-cascade-open {
        transform: rotate(180deg);
        transform-origin: center center;
    }

    .hide-cascade > ol {
        display: none;
    }
}
</style>
