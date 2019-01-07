<template>
    <div class="py-3">
        <div class="flex justify-end menu-button">
            <button
                title="Add"
                class="btn btn-default btn-icon bg-primary mr-3 text-white"
                v-on:click="newItemMenu()"
            >
                {{ __('Add item') }}
            </button>
        </div>

        <template v-if="menuItems.length > 0">
            <vue-nestable v-model="menuItems" @change="change" classProp="enabledClass">
                <template slot-scope="{ item }" :placeholder="this.__('Add a new menu item')">
                    <vue-nestable-handle :item="item" class="handle flex flex-wrap">
                        <div class="w-2/3">
                            <span class="font-semibold">{{ item.name }}</span>
                            <span class="font-lighter text-80 ml-4 text-sm">{{ item.link }}</span>
                        </div>
                        <div class="buttons w-1/3 flex justify-end content-center">
                            <button
                                @click="editMenu(item)"
                                title="Edit"
                                class="appearance-none cursor-pointer text-70 hover:text-primary mr-3 self-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    aria-labelledby="edit"
                                    role="presentation"
                                    class="fill-current"
                                >
                                    <path
                                        d="M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"
                                    ></path>
                                </svg>
                            </button>

                            <button
                                v-on:click="removeMenu(item)"
                                title="Delete"
                                class="appearance-none cursor-pointer text-70 hover:text-primary mr-3 self-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    aria-labelledby="delete"
                                    role="presentation"
                                    class="fill-current"
                                >
                                    <path
                                        fill-rule="nonzero"
                                        d="M6 4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6H1a1 1 0 1 1 0-2h5zM4 6v12h12V6H4zm8-2V2H8v2h4zM8 8a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </vue-nestable-handle>
                </template>
            </vue-nestable>
        </template>

        <template v-else>
            <div class="flex justify-center items-center px-6 py-8">
                <div class="text-center">
                    <svg
                        class="mb-3"
                        height="51"
                        viewbox="0 0 65 51"
                        width="65"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fill-rule="evenodd" id="Page-1">
                            <g
                                fill="#A8B9C5"
                                fill-rule="nonzero"
                                id="05-blank-state"
                                transform="translate(-779 -695)"
                            >
                                <path
                                    d="M835 735h2c.552285 0 1 .447715 1 1s-.447715 1-1 1h-2v2c0 .552285-.447715 1-1 1s-1-.447715-1-1v-2h-2c-.552285 0-1-.447715-1-1s.447715-1 1-1h2v-2c0-.552285.447715-1 1-1s1 .447715 1 1v2zm-5.364125-8H817v8h7.049375c.350333-3.528515 2.534789-6.517471 5.5865-8zm-5.5865 10H785c-3.313708 0-6-2.686292-6-6v-30c0-3.313708 2.686292-6 6-6h44c3.313708 0 6 2.686292 6 6v25.049375c5.053323.501725 9 4.765277 9 9.950625 0 5.522847-4.477153 10-10 10-5.185348 0-9.4489-3.946677-9.950625-9zM799 725h16v-8h-16v8zm0 2v8h16v-8h-16zm34-2v-8h-16v8h16zm-52 0h16v-8h-16v8zm0 2v4c0 2.209139 1.790861 4 4 4h12v-8h-16zm18-12h16v-8h-16v8zm34 0v-8h-16v8h16zm-52 0h16v-8h-16v8zm52-10v-4c0-2.209139-1.790861-4-4-4h-44c-2.209139 0-4 1.790861-4 4v4h52zm1 39c4.418278 0 8-3.581722 8-8s-3.581722-8-8-8-8 3.581722-8 8 3.581722 8 8 8z"
                                    id="Combined-Shape"
                                ></path>
                            </g>
                        </g>
                    </svg>
                    <h3 class="text-base text-80 font-normal mb-6">
                        {{ __('No menu items yet') }}
                    </h3>
                    <div>
                        <button class="btn btn-sm btn-outline" v-on:click="newItemMenu()">
                            {{ __('Add item') }}
                        </button>
                    </div>
                </div>
            </div>
        </template>

        <div ref="modals">
            <modal
                ref="modalConfirm"
                v-if="modalConfirm"
                :name="'modalConfirm'"
                :align="'flex justify-end'"
                :width="400"
            >
                <div slot="container">
                    <h2 class="mb-6 text-90 font-normal text-xl">{{ __('Delete item') }}</h2>
                    <p v-if="itemToDelete.children.length > 0" class="text-80 leading-normal mb-4">
                        {{
                            __(
                                "Take care. All children items will be deleted cause you're deleting the parent."
                            )
                        }}
                    </p>
                    <p class="text-80 leading-normal">
                        {{ __('Are you sure to delete this menu item?') }}
                    </p>
                </div>
                <div slot="buttons">
                    <div class="ml-auto">
                        <button
                            type="button"
                            @click.prevent="closeModal"
                            class="btn text-80 font-normal h-9 px-3 mr-3 btn-link"
                        >
                            {{ __('Cancel') }}
                        </button>

                        <button
                            id="confirm-overwrite-button"
                            ref="confirmButton"
                            @click.prevent="confirmItemDelete"
                            class="btn btn-default btn-danger"
                        >
                            {{ __('Yes, remove!') }}
                        </button>
                    </div>
                </div>
            </modal>

            <modal ref="modalItem" v-if="modalItem" :name="'modalItem'" :align="'flex justify-end'">
                <div slot="container">
                    <div class="flex flex-wrap justify-between mb-6">
                        <h2 class=" text-90 font-normal text-xl">{{ __('Add Menu item') }}</h2>
                        <toggle-button
                            v-model="newItem.enabled"
                            :color="switchColor"
                            :width="70"
                            :sync="true"
                            :labels="toogleLabels"
                        />
                    </div>

                    <form autocomplete="off">
                        <div class="flex border-b border-40">
                            <div class="w-1/5 py-4">
                                <label class="inline-block text-80 pt-2 leading-tight">
                                    {{ __('Name') }}
                                </label>
                            </div>
                            <div class="py-4 w-4/5">
                                <input
                                    v-model="newItem.name"
                                    id="name"
                                    type="text"
                                    :placeholder="this.__('Name')"
                                    class="w-full form-control form-input form-input-bordered"
                                />
                            </div>
                        </div>
                        <div class="flex border-b border-40">
                            <div class="w-1/5 py-4">
                                <label class="inline-block text-80 pt-2 leading-tight">
                                    {{ __('Link type') }}
                                </label>
                            </div>
                            <div class="py-4 w-4/5">
                                <select
                                    v-model="newItem.type"
                                    @change="setNulls"
                                    id="type"
                                    class="w-full form-control form-select"
                                >
                                    <option value="" selected="selected" disabled="disabled">
                                        {{ __('Choose an option') }}
                                    </option>
                                    <option value="link"> {{ __('Static Url') }} </option>
                                    <option value="route"> {{ __('Dynamic Route') }} </option>
                                </select>
                            </div>
                        </div>
                        <template v-if="newItem.type == 'link'">
                            <div class="flex border-b border-40">
                                <div class="w-1/5 py-4">
                                    <label class="inline-block text-80 pt-2 leading-tight">
                                        {{ __('URL') }}
                                    </label>
                                </div>
                                <div class="py-4 w-4/5">
                                    <input
                                        v-model="newItem.url"
                                        id="url"
                                        type="text"
                                        :placeholder="this.__('URL')"
                                        class="w-full form-control form-input form-input-bordered"
                                    />
                                </div>
                            </div>
                        </template>

                        <template v-if="newItem.type == 'route'">
                            <div class="flex border-b border-40">
                                <div class="w-1/5 py-4">
                                    <label class="inline-block text-80 pt-2 leading-tight">
                                        {{ __('Route') }}
                                    </label>
                                </div>
                                <div class="py-4 w-4/5">
                                    <input
                                        v-model="newItem.route"
                                        id="route"
                                        type="text"
                                        :placeholder="this.__('Route')"
                                        class="w-full form-control form-input form-input-bordered"
                                    />
                                </div>
                            </div>
                            <div class="flex border-b border-40">
                                <div class="w-1/5 py-4">
                                    <label class="inline-block text-80 pt-2 leading-tight">
                                        {{ __('Parameters') }}
                                    </label>
                                </div>
                                <div class="py-4 w-4/5">
                                    <codemirror
                                        v-model="newItem.parameters"
                                        :options="cmOptions"
                                        :placeholder="cmPlaceholder"
                                    ></codemirror>
                                </div>
                            </div>
                        </template>

                        <div class="flex border-b border-40" v-if="newItem.type">
                            <div class="w-1/5 py-4">
                                <label class="inline-block text-80 pt-2 leading-tight">
                                    {{ __('Open in') }}
                                </label>
                            </div>
                            <div class="py-4 w-4/5">
                                <select
                                    v-model="newItem.target"
                                    id="type"
                                    class="w-full form-control form-select"
                                >
                                    <option value="_self"> {{ __('Same window') }} </option>
                                    <option value="_blank"> {{ __('New window') }} </option>
                                </select>
                            </div>
                        </div>

                        <div class="flex border-b border-40" v-if="newItem.type">
                            <div class="w-1/5 py-4">
                                <label class="inline-block text-80 pt-2 leading-tight">
                                    {{ __('Classes') }}
                                </label>
                            </div>
                            <div class="py-4 w-4/5">
                                <input
                                    v-model="newItem.classes"
                                    id="classes"
                                    type="text"
                                    :placeholder="this.__('Classes')"
                                    class="w-full form-control form-input form-input-bordered"
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <div slot="buttons">
                    <div class="ml-auto">
                        <button
                            type="button"
                            @click.prevent="closeModal"
                            class="btn text-80 font-normal h-9 px-3 mr-3 btn-link"
                        >
                            {{ __('Cancel') }}
                        </button>

                        <button
                            v-if="update == false"
                            id="confirm-overwrite-button"
                            ref="confirmButton"
                            @click.prevent="confirmItemCreate"
                            class="btn btn-default btn-primary"
                        >
                            {{ __('Create menu item') }}
                        </button>

                        <button
                            v-else
                            id="confirm-overwrite-button"
                            ref="confirmButton"
                            @click.prevent="updateItem"
                            class="btn btn-default btn-primary"
                        >
                            {{ __('Update menu item') }}
                        </button>
                    </div>
                </div>
            </modal>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';
// import ToggleButton from 'vue-js-toggle-button'
import { VueNestable, VueNestableHandle } from 'vue-nestable';
import { codemirror } from 'vue-codemirror';
import beautify from 'js-beautify';

import 'codemirror/addon/display/placeholder.js';
//themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import Modal from './Modal';
import api from '../api';

export default {
    props: ['resourceName', 'resourceId', 'field'],
    components: {
        VueNestable,
        VueNestableHandle,
        codemirror,
        Modal,
    },
    data: () => ({
        modalConfirm: false,
        modalItem: false,
        itemToDelete: null,
        update: false,
        newItem: {
            name: null,
            type: '',
            url: null,
            route: null,
            parameters: '',
            target: '_self',
            active: true,
            classes: null,
            menu_id: null,
            enabled: true,
        },
        cmOptions: {
            tabSize: 2,
            theme: 'dracula',
            lineNumbers: true,
            lineWrapping: true,
            foldGutter: true,
            line: true,
            mode: {
                name: 'javascript',
                json: true,
            },
        },
        cmPlaceholder: '{\n  "id": 1\n}',
        menuItems: [],
        toogleLabels: false,
        switchColor: {},
    }),
    methods: {
        newItemMenu() {
            this.update = false;
            this.modalItem = true;
        },

        closeModal() {
            this.modalItem = false;
            this.modalConfirm = false;
            this.resetNewItem();
        },

        getData() {
            api.getItems(this.resourceId).then(result => {
                this.menuItems = _.values(result);
            });
        },

        setNulls() {
            if (this.newItem.type == 'link') {
                this.newItem.route = null;
                this.newItem.parameters = '';
            }

            if (this.newItem.type == 'route') {
                this.newItem.url = null;
            }
        },

        editMenu(item) {
            api.edit(item.id).then(result => {
                result.parameters = beautify(result.parameters, { indent_size: 2 });
                this.update = result.id;
                this.newItem = result;
                this.modalItem = true;
            });
        },
        removeMenu(item) {
            this.itemToDelete = item;
            this.modalConfirm = true;
        },
        confirmItemDelete() {
            api.destroy(this.itemToDelete.id)
                .then(() => {
                    this.getData();
                    this.$toasted.show(this.__('Item removed successfully!'), { type: 'success' });
                    this.itemToDelete = null;
                    this.modalConfirm = false;
                })
                .catch(request => {
                    this.handleErrors(request);
                });
        },

        resetNewItem() {
            this.newItem = {
                name: null,
                type: '',
                url: null,
                route: null,
                parameters: '',
                target: '_self',
                active: true,
                classes: null,
                menu_id: this.resourceId,
            };
        },

        confirmItemCreate() {
            api.create(this.newItem)
                .then(() => {
                    this.getData();
                    this.modalItem = false;
                    this.resetNewItem();
                    this.$toasted.show(this.__('Item created!'), { type: 'success' });
                })
                .catch(request => {
                    this.handleErrors(request);
                });
        },

        updateItem() {
            api.update(this.update, this.newItem)
                .then(() => {
                    this.getData();
                    this.modalItem = false;
                    this.resetNewItem();
                    this.$toasted.show(this.__('Item updated!'), { type: 'success' });
                })
                .catch(request => {
                    this.handleErrors(request);
                });
        },

        change() {
            api.saveItems(this.resourceId, this.menuItems)
                .then(() => {
                    this.$toasted.show(this.__('Menu reordered!'), { type: 'success' });
                })
                .catch(() => {
                    this.$toasted.show(this.__('Error on server!'), { type: 'error' });
                });
        },

        handleErrors(request) {
            let errors = request.response.data.errors;
            if (errors) {
                _.map(errors, error => this.$toasted.show(error, { type: 'error' }));
            }
        },
    },
    mounted() {
        this.newItem.menu_id = this.resourceId;
        this.toogleLabels = { checked: this.__('Enabled'), unchecked: this.__('Disabled') };
        this.switchColor = { checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4' };
        this.getData();
    },
};
</script>

<style scope>
.CodeMirror {
    min-height: 60px;
    height: auto !important;
}

.menu-button {
    position: absolute;
    right: -12px;
    margin-top: -72px;
}
/*
* Style for nestable
*/
.nestable {
    position: relative;
}
.nestable .nestable-list {
    margin: 0;
    padding: 0 0 0 40px;
    list-style-type: none;
}
.nestable > .nestable-list {
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

.nestable-item-content {
    /*padding: 10px;*/
    border: 1px solid #ccc;
    background: #fafafa;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    box-sizing: border-box;
}

.handle {
    width: 100%;
    padding: 0 10px;
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
</style>
