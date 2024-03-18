<template>
    <Modal :show="showModal" align="flex justify-end" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <ModalHeader class="flex flex-wrap justify-between">
            {{ __(update ? 'novaMenuBuilder.updateModalTitle' : 'novaMenuBuilder.createModalTitle') }}

            <CheckboxWithLabel :checked="newItem.is_active" @input="newItem.is_active = $event.target.checked">
                <span class="ml-1">{{
                        newItem.is_active ? this.toggleLabels.checked : this.toggleLabels.unchecked
                    }}</span>
            </CheckboxWithLabel>
        </ModalHeader>

        <div class="pt-2 pb-6">
            <form autocomplete="off" enctype="multipart/form-data"
                  @submit.prevent="$emit(update ? 'updateItem' : 'confirmItemCreate')">
                <!-- Label -->
                <DefaultField
                    :errors="wrappedErrors"
                    :field="{
                        ...defaultFieldProps,
                        validationKey: 'label',
                        name: __('novaMenuBuilder.menuItemLabel'),
                        required: true,
                }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <input
                            id="label"
                            v-model="newItem.label"
                            :class="{ 'border-red-400': getError('label') }"
                            :placeholder="__('novaMenuBuilder.menuItemLabel')"
                            class="w-full form-control form-input form-input-bordered"
                            type="text"
                            @input="setSlug"
                        />
                    </template>
                </DefaultField>

                <!-- Slug -->
                <DefaultField
                    :errors="wrappedErrors"
                    :field="{
                        ...defaultFieldProps,
                        validationKey: 'slug',
                        name: __('novaMenuBuilder.menuItemSlug'),
                        required: true,
                    }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <input
                            id="slug"
                            v-model="newItem.slug"
                            :class="{ 'border-red-400': getError('slug') }"
                            :placeholder="__('novaMenuBuilder.menuItemSlug')"
                            class="w-full form-control form-input form-input-bordered"
                            type="text"
                        />
                    </template>
                </DefaultField>

                <!-- Child Item Select -->
                <DefaultField
                    v-if="update"
                    :errors="wrappedErrors"
                    :field="{...defaultFieldProps, validationKey:'parent_id', name: __('novaMenuBuilder.childItem'), }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <SelectControl
                            v-model:selected="newItem.parent_id"
                            :options="buildTreeOptions(newItem)"
                            @change="selectParentId"
                        />
                    </template>
                </DefaultField>

                <!-- Link Type -->
                <DefaultField
                    :errors="wrappedErrors"
                    :field="{
                        ...defaultFieldProps,
                        validationKey: 'class',
                        name: __('novaMenuBuilder.menuItemType'),
                        required: true,
                    }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <SelectControl
                            v-model:selected="linkType.class"
                            :options="menuItemTypes.map(val => ({ value: val.class, label: __(val.name) }))"
                            @change="e => $emit('onLinkTypeUpdate', e)"
                        >
                            <option disabled="disabled" selected="selected" value="">
                                {{ __('novaMenuBuilder.chooseMenuItemType') }}
                            </option>
                        </SelectControl>
                    </template>
                </DefaultField>

                <!-- Path -->
                <DefaultField
                    v-if="showSlug()"
                    :errors="wrappedErrors"
                    :field="{
                        ...defaultFieldProps,
                        validationKey: 'path',
                        name: __('novaMenuBuilder.menuItemPath'),
                        required: true,
                    }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <input
                            id="path"
                            v-model="newItem.path"
                            :class="{ 'border-red-400': getError('path') }"
                            :placeholder="__('novaMenuBuilder.menuItemPath')"
                            class="w-full form-control form-input form-input-bordered"
                            type="text"
                        />
                    </template>
                </DefaultField>

                <!-- Static URL -->
                <DefaultField
                    v-if="linkType.type === 'static-url'"
                    :errors="wrappedErrors"
                    :field="{
                        ...defaultFieldProps,
                        validationKey: 'url',
                        name:__('novaMenuBuilder.menuItemUrlFieldName'),
                    }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <input
                            id="url"
                            v-model="newItem.url"
                            :class="{ 'border-red-400': getError('url') }"
                            :placeholder="__('novaMenuBuilder.menuItemUrlFieldName')"
                            class="w-full form-control form-input form-input-bordered"
                            type="text"
                        />
                    </template>
                </DefaultField>

                <!-- Route Select -->
                <DefaultField
                    v-if="linkType.type === 'route-select'"
                    :errors="wrappedErrors"
                    :field="{
                        ...defaultFieldProps,
                        validationKey: 'url',
                        name:  __('novaMenuBuilder.menuItemRoute'),
                    }"
                    :fullWidthContent="true"
                    class="option-select-field menu-builder-multiselect-wrapper"
                >
                    <template #field>
                        <multiselect
                            ref="route-multiselect"
                            :options="options"
                            :placeholder="__('novaMenuBuilder.chooseOption')"
                            :value="selectedOption"
                            deselectGroupLabel=""
                            deselectLabel=""
                            label="label"
                            selectGroupLabel=""
                            selectLabel=""
                            selectedLabel=""
                            track-by="id"
                            @close="handleClose"
                            @input="handleChange"
                            @open="handleOpen"
                            @remove="handleRemove"
                        >
                            <template #singleLabel>
                                <span>{{ selectedOption ? selectedOption.label : '' }}</span>
                            </template>

                            <template #noOptions>
                                <span>No options</span>
                            </template>

                            <template #noResult>
                                <span>No results</span>
                            </template>
                        </multiselect>

                    </template>
                </DefaultField>

                <!-- Entity Select -->
                <DefaultField
                    v-if="linkType.type === 'entity-select'"
                    :field="{
                        ...defaultFieldProps,
                        name: __('novaMenuBuilder.menuItemEntity'),
                    }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <multiselect
                            :options="entities"
                            :placeholder="__('novaMenuBuilder.chooseOption')"
                            :value="selectedEntity"
                            deselectGroupLabel=""
                            deselectLabel=""
                            label="label"
                            selectGroupLabel=""
                            selectLabel=""
                            selectedLabel=""
                            track-by="id"
                            @input="selectEntity"
                        />

                        <help-text v-if="getError('value')" class="error-text mt-2 text-danger">
                            {{ getError('value') }}
                        </help-text>
                    </template>
                </DefaultField>

                <DefaultField
                    v-if="linkType.type === 'entity-select'"
                    :field="{
                        ...defaultFieldProps,
                        name: __('novaMenuBuilder.menuItemEntityValue')
                    }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <multiselect
                            :options="entityOptions"
                            :placeholder="__('novaMenuBuilder.chooseEntityOption')"
                            :value="entityOptions.find(entityOption => entityOption.id === this.newItem.entity_item_id)"
                            deselectGroupLabel=""
                            deselectLabel=""
                            label="label"
                            selectGroupLabel=""
                            selectLabel=""
                            selectedLabel=""
                            track-by="id"
                            @input="value => this.$emit('onLinkEntityItemIdUpdate', value.id)"
                            @search-change="asyncFindEntityOption"
                        />

                        <help-text v-if="getError('value')" class="error-text mt-2 text-danger">
                            {{ getError('value') }}
                        </help-text>
                    </template>
                </DefaultField>

                <!-- Media -->
                <DefaultField
                    :errors="wrappedErrors"
                    :field="{
                        ...defaultFieldProps,
                        validationKey: 'media',
                        name: __('novaMenuBuilder.image'),
                    }"
                    :fullWidthContent="true"
                >
                    <template #field>
                        <span class="form-file">
                            <input
                                id="media"
                                :class="{ 'border-red-400': getError('media') }"
                                class="form-file-input"
                                type="file"
                                @change="selectMedia"
                            />
                            <label
                                class="shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 bg-primary-500 hover:bg-primary-400"
                                for="media">
                                <span>{{ __('novaMenuBuilder.addNewMedia') }}</span>
                            </label>
                        </span>
                        <img v-if="previewUrl || newItem.media_url" :src="previewUrl || newItem.media_url" alt=""/>
                        <button v-if="previewUrl || newItem.media_url" type="button" @click="removeMedia">
                            {{ __('novaMenuBuilder.removeMedia') }}
                        </button>
                    </template>
                </DefaultField>

                <template v-if="fields && fields.length">
                    <component
                        :is="`form-${field.component}`"
                        v-for="(field, i) in fields"
                        :key="`${linkType.class}_${i}`"
                        :errors="wrappedErrors"
                        :field="field"
                        :fullWidthContent="true"
                        :resource-id="resourceId"
                        :resource-name="resourceName"
                        :show-errors="true"
                        class="menu-item-component"
                    />
                </template>
            </form>
        </div>

        <ModalFooter class="flex justify-between">
            <div>
                <a
                    :href="getEditUrl(newItem)"
                    :title="__('novaMenuBuilder.advancedEdit')"
                    class="cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 appearance-none bg-transparent text-gray-400 hover:text-gray-300 active:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:active:text-gray-600 dark:hover:bg-gray-800"
                >
                    <span v-text="__('novaMenuBuilder.advancedEdit')"></span>
                </a>
            </div>
            <div class="ml-auto">

                <CancelButton
                    component="button"
                    dusk="cancel-action-button"
                    type="button"
                    @click.prevent="$emit('closeModal')"
                />

                <LoadingButton
                    ref="runButton"
                    :disabled="isMenuItemUpdating"
                    :loading="isMenuItemUpdating"
                    class="ml-3 border text-left appearance-none cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 relative disabled:cursor-not-allowed inline-flex items-center justify-center shadow h-9 px-3 bg-primary-500 border-primary-500 hover:[&amp;:not(:disabled)]:bg-primary-400 hover:[&amp;:not(:disabled)]:border-primary-400 text-white dark:text-gray-900"
                    type="submit"
                    @click="storeWithData(update ? 'updateItem' : 'confirmItemCreate', $event)"
                >
                    {{ __(update ? 'novaMenuBuilder.updatebuttonTitle' : 'novaMenuBuilder.createButtonTitle') }}
                </LoadingButton>
            </div>
        </ModalFooter>
    </Modal>
</template>

<script>
import {HandlesValidationErrors} from 'laravel-nova';
import {Errors} from 'form-backend-validation';
import Multiselect from 'vue-multiselect/src/Multiselect';

export default {
    mixins: [HandlesValidationErrors],

    props: [
        'newItem',
        'showModal',
        'update',
        'linkType',
        'menuItemTypes',
        'resourceName',
        'resourceId',
        'isMenuItemUpdating',
        'novaPath',
    ],

    data: () => ({
        previewUrl: null,
        toggleLabels: false,
        entityOptions: [],
        entityPath: '',
        defaultFieldProps: {
            fullWidth: true,
            stacked: true,
            withLabel: true,
            visible: true,
        },
    }),

    components: {
        Multiselect
    },

    watch: {
        'newItem.name'(newName) {
            this.emitFieldValueChange('name', newName);
        },

        showModal(show) {
            this.$nextTick(() => {
                const scrollWrap = document.querySelector('.modal.fixed');
                if (scrollWrap) {
                    if (show) scrollWrap.addEventListener('scroll', this.repositionDropdown);
                    else scrollWrap.removeEventListener('scroll', this.repositionDropdown);
                }
            });
        },
    },

    mounted() {
        this.toggleLabels = {
            checked: this.__('novaMenuBuilder.menuItemActive'),
            unchecked: this.__('novaMenuBuilder.menuItemDisabled'),
        };
        this.switchColor = {checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4'};
    },

    computed: {
        options() {
            const options = [...this.linkType.options];
            options.unshift({id: '', label: this.__('novaMenuBuilder.chooseOption')});
            return options;
        },

        entities() {
            let entities = [];

            if (Array.isArray(this.linkType.options)) {
                if (this.linkType.options[0] && this.linkType.options[0].label.includes('||')) {
                    this.linkType.options.forEach(option => {
                        let value = option.label.split('||');
                        entities.push({
                            id: option.id,
                            label: value[0],
                            path: value[1],
                        });
                    });
                } else {
                    entities = [...this.linkType.options];
                }
            }

            entities.unshift({id: '', label: this.__('novaMenuBuilder.chooseOption')});

            return entities;
        },

        fields() {
            let fields = this.linkType.fields || [];

            if (this.update) {
                fields = (this.linkType.class === this.newItem.class ? this.newItem.fields : this.linkType.fields) || [];
                fields.forEach(f => {
                    if (f.component === 'slug-field') {
                        f.updating = true;
                        f.readonly = true;
                        f.showCustomizeButton = true;
                    }
                });
            }

            fields.forEach(f => {
                f.stacked = true;
                f.fullWidth = true;
                f.withLabel = true;
            });

            return fields || [];
        },

        wrappedErrors() {
            const ogErrors = this.$props.errors;
            if (ogErrors && typeof ogErrors.has === 'function') return ogErrors;
            return new Errors(ogErrors || {});
        },

        selectedOption() {
            if (this.linkType.type === 'select') {
                return this.options.find(option => option.id === this.newItem.value);
            }

            if (this.linkType.type === 'route-select') {
                return this.options.find(option => option.id === this.newItem.url);
            }

            return void 0;
        },

        selectedEntity() {
            return this.entities.find(entity => entity.id === this.newItem.entity_id)
        }
    },

    methods: {

        handleChange(value) {
            this.$emit('onLinkModelUpdate', value ? value.id : void 0);
            this.$nextTick(this.repositionDropdown);
        },

        handleRouteChange(value) {
            this.$emit('onLinkModelUpdate', value ? value.id : void 0);
            this.$nextTick(this.repositionDropdown);
        },

        handleOpen() {
            this.$nextTick(this.repositionDropdown);
        },

        handleClose() {
        },

        handleRemove() {
            this.$nextTick(this.repositionDropdown);
        },

        getEditUrl(item) {
            return `${this.novaPath}/resources/menu-items/${item.id}/edit`;
        },

        storeWithData(eventType, event) {

            event.preventDefault();

            this.fields.forEach(field => {

                const formData = new FormData();
                field.fill(formData);

                const values = Array.from(formData.values());

                if (field.component === 'trix-field') {
                    this.newItem[field.attribute] = values[0];
                    return;
                }

                // Is array
                const firstKey = Array.from(formData.keys())[0];
                if (firstKey && firstKey.endsWith(']')) {
                    this.newItem[field.attribute] = values || [];
                } else {
                    if (values.length === 0) this.newItem[field.attribute] = void 0;
                    if (values.length === 1) this.newItem[field.attribute] = values[0];
                    if (values.length > 1) this.newItem[field.attribute] = values;
                }
            });

            this.$emit(eventType);
        },

        repositionDropdown(onOpen = false) {
            const ms = this.$refs.multiselect;
            if (!ms) return;

            const el = ms.$el;

            const handlePositioning = () => {
                if (onOpen) ms.$refs.list.scrollTop = 0;

                const {y, height} = el.getBoundingClientRect();

                const top = y + height;

                ms.$refs.list.style.position = 'fixed';
                ms.$refs.list.style.width = `${el.clientWidth}px`;
                ms.$refs.list.style.top = `${top}px`;
                ms.$refs.list.style['border-radius'] = '0 0 5px 5px';
            };

            if (onOpen) this.$nextTick(handlePositioning);
            else handlePositioning();
        },

        getError(key) {
            return this.wrappedErrors.has(key);
        },

        emitFieldValue(attribute, value) {
            Nova.$emit(`${attribute}-value`, value);
        },

        emitFieldValueChange(attribute, value) {
            Nova.$emit(`${attribute}-change`, value);
        },

        buildTreeOptions(item, level = 0) {
            let options = [];
            if (level === 0 && item.parent) {
                options.push({value: null, label: item.parent.name});
                level = 1;
            }
            if (item.child_items) {
                item.child_items.forEach(childItem => {
                    if (!this.isDuplicate(childItem, options)) {
                        options.push({value: childItem.id, label: '-'.repeat(level * 2) + ' ' + childItem.label});
                        options = options.concat(this.buildTreeOptions(childItem, level + 1));
                    }
                });
            }
            return options;
        },

        isDuplicate(item, options) {
            return options.some(option => option.value === item.id);
        },

        selectParentId(newVal) {
            this.newItem.parent_id = newVal;
        },

        selectMedia(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.newItem.media = files[0];
            this.previewUrl = URL.createObjectURL(files[0]);
        },

        removeMedia() {
            this.newItem.media = null;
            this.previewUrl = null;
            this.newItem.media_url = null;
        },

        setSlug() {
            this.newItem.slug = this.newItem.label.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '');
        },

        showSlug() {
            return this.linkType.type === 'static-url' ||
                this.linkType.type === 'select' ||
                this.linkType.type === 'text';
        },

        asyncFindEntityOption(query) {
            this.isLoading = true
            let resource = this.entityPath;
            Nova.request().get(`/nova-api/${resource}?search=${query}`).then(response => {
                this.isLoading = false;
                this.entityOptions = response.data.resources.map(item => {
                    return {
                        id: item.id.value,
                        label: item.title,
                    };
                });
                this.entityOptions.unshift({id: '0', label: this.__('novaMenuBuilder.indexOption')});
            })
        },

        setPath(path) {
            this.entityPath = path;
            this.asyncFindEntityOption('');
        },

        selectEntity(value) {
            this.setPath(value.path);
            this.$emit('onLinkEntityIdUpdate', value.id);

            return value.id;
        },
    },
};
</script>

<style lang="scss">
$white: #fff;
$slate50: #f8fafc;
$slate100: #f1f5f9;
$slate200: #e2e8f0;
$slate300: #cbd5e1;
$slate400: #94a3b8;
$slate500: #64748b;
$slate600: #475569;
$slate700: #334155;
$slate800: #1e293b;
$slate900: #0f172a;

$red400: #f87171;
$red500: #ef4444;

.add-new-menu-item-modal {
    .menu-item-component {
        div.py-6.px-8 {
            &:nth-child(1) {
                padding: 1rem 2rem 1rem 0;
            }

            &:nth-child(2) {
                padding: 1rem 0 1rem 0;
                width: 80%;
            }
        }
    }
}

/* Multiselect styles */
.menu-builder-multiselect-wrapper {
    .multiselect {
        min-height: 36px;
        border: none;
        border-radius: 0;
        background: none;
    }

    .multiselect__tags {
        --tw-border-opacity: 1;
        border-width: 1px;

        border-color: $slate300;
        background-color: $white;
        color: $slate600;

        padding: 6px 56px 0 6px;
        min-height: 36px;

        border-radius: 4px;
        overflow: hidden;

        .dark & {
            border-color: $slate700;
            background-color: $slate900;
            color: $slate400;
        }
    }

    .multiselect__input {
        border: none;
        border-color: rgba(var(--colors-gray-100), var(--tw-border-opacity));
        background-color: $white;
        color: rgba(var(--colors-gray-400));

        font-size: 14px;
        line-height: 14px;

        padding-left: 8px;

        .dark & {
            background-color: $slate900;
            color: $slate400;
        }
    }

    .multiselect__tag {
        background-color: rgba(var(--colors-primary-500));
        color: $white;
        font-weight: 600;

        padding: 4px 24px 4px 8px;
        margin: 1px 8px 1px 0;

        .multiselect__tag-icon {
            &::after {
                color: $white;
            }

            &:hover {
                background: rgba(var(--colors-primary-500));

                &::after {
                    color: $red500;
                }
            }
        }
    }

    .multiselect > .multiselect__clear {
        &::before,
        &::after {
            width: 2px;
            background: rgba(var(--colors-gray-400));
        }

        &:hover {
            &::before,
            &::after {
                background: rgba(var(--colors-red-400));
            }
        }
    }

    .multiselect__single {
        background-color: $white;
        color: $slate600;

        font-size: 14px;
        line-height: 18px;
        font-weight: 700;
        min-height: 18px;

        padding-top: 2px;
        padding-left: 8px;

        color: $slate600;

        .dark & {
            color: rgba(var(--colors-gray-400));
            background-color: $slate900;
        }
    }

    .multiselect__spinner {
        background-color: $white;
        color: $slate600;

        .dark & {
            background-color: $slate900;
            color: $slate400;
        }

        &:before,
        &:after {
            border-color: rgba(var(--colors-primary-500)) transparent transparent;
        }
    }

    .multiselect__content-wrapper {
        border-color: $slate300;
        transition: none;
        height: 100%;
        min-height: 150px;

        .multiselect__content {
            overflow: hidden;
            width: 100%;
        }

        .dark & {
            border-color: $slate700;
            background-color: $slate900;
        }

        li > span.multiselect__option {
            background-color: #fff;
            color: $slate400;

            min-height: 32px;
            font-size: 14px;
            line-height: 14px;

            .dark & {
                background-color: $slate900;
            }
        }

        .multiselect__element {
            background-color: $white;
            color: $slate600;

            .dark & {
                background-color: $slate900;
                color: $slate400;
            }

            .multiselect__option {
                color: $slate600;

                padding: 8px 12px;
                min-height: 32px;
                font-size: 14px;
                line-height: 14px;

                .dark & {
                    color: $slate400;
                }

                &.multiselect__option--selected {
                    color: rgba(var(--colors-primary-500));
                    background-color: $white;

                    .dark & {
                        background-color: $slate900;
                    }
                }

                &.multiselect__option--highlight {
                    background-color: rgba(var(--colors-primary-500));
                    color: $white;

                    &::after {
                        background-color: rgba(var(--colors-primary-500));
                        font-weight: 600;
                    }

                    &.multiselect__option--selected {
                        background-color: $red400;

                        .dark & {
                            background-color: $red400;
                        }
                    }
                }
            }
        }
    }

    .reorder__tag {
        background-color: rgba(var(--colors-primary-500));
        border-radius: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 5px;
        font-weight: 600;
        transition: all 0.2s ease-in-out;

        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }

    .multiselect__select {
        height: 36px;
    }

    .multiselect__placeholder {
        margin-bottom: 8px;
        padding-top: 0px;
        padding-left: 8px;
        min-height: 16px;
        line-height: 16px;
        cursor: default;

        color: #475569;

        .dark & {
            color: #64748b;
        }
    }

    .multiselect__clear {
        position: absolute;
        right: 36px;
        top: 8px;
        height: 20px;
        width: 20px;
        display: block;
        cursor: pointer;
        z-index: 2;

        &::before,
        &::after {
            content: '';
            display: block;
            position: absolute;
            width: 3px;
            height: 16px;
            background: #aaa;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            margin: auto;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }
}
</style>
