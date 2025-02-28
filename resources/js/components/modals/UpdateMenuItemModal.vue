<template>
  <Modal :show="showModal" class="bg-white dark:bg-gray-800 rounded-lg shadow-lg" align="flex justify-end">
    <ModalHeader class="flex flex-wrap justify-between">
      {{ __(update ? 'novaMenuBuilder.updateModalTitle' : 'novaMenuBuilder.createModalTitle') }}

      <CheckboxWithLabel
        v-show="maxDepth !== 1"
        class="ml-auto mr-4"
        :checked="newItem.nestable"
        @input="newItem.nestable = $event.target.checked"
      >
        <span class="ml-1">{{ __('novaMenuBuilder.nestableLabel') }}</span>
      </CheckboxWithLabel>

      <CheckboxWithLabel :checked="newItem.enabled" @input="newItem.enabled = $event.target.checked">
        <span class="ml-1">{{ newItem.enabled ? this.toggleLabels.checked : this.toggleLabels.unchecked }}</span>
      </CheckboxWithLabel>
    </ModalHeader>

    <div class="o1-pt-2 o1-pb-6">
      <form @submit.prevent="$emit(update ? 'updateItem' : 'confirmItemCreate')" autocomplete="off">
        <DefaultField
          :errors="wrappedErrors"
          :fullWidthContent="true"
          :field="{
            ...defaultFieldProps,
            validationKey: 'name',
            name: __('novaMenuBuilder.menuItemName'),
          }"
        >
          <template #field>
            <input
              :placeholder="__('novaMenuBuilder.menuItemName')"
              :class="{ 'o1-border-red-400': getError('name') }"
              class="w-full form-control form-input form-control-bordered"
              id="name"
              type="text"
              v-model="newItem.name"
            />
          </template>
        </DefaultField>

        <DefaultField
          :errors="wrappedErrors"
          :fullWidthContent="true"
          :field="{
            ...defaultFieldProps,
            validationKey: 'class',
            name: __('novaMenuBuilder.menuItemType'),
          }"
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

        <DefaultField
          v-if="linkType.type === 'static-url'"
          :errors="wrappedErrors"
          :fullWidthContent="true"
          :field="{
            ...defaultFieldProps,
            validationKey: 'value',
            name: __('novaMenuBuilder.menuItemUrlFieldName'),
          }"
        >
          <template #field>
            <input
              :placeholder="__('novaMenuBuilder.menuItemUrlFieldName')"
              :class="{ 'o1-border-red-400': getError('value') }"
              class="w-full form-control form-input form-control-bordered"
              id="url"
              type="text"
              v-model="newItem.value"
            />
          </template>
        </DefaultField>

        <DefaultField
          v-if="linkType.type === 'select'"
          class="option-select-field o1-menu-builder-multiselect-wrapper"
          :errors="wrappedErrors"
          :fullWidthContent="true"
          :field="{
            ...defaultFieldProps,
            validationKey: 'value',
            name: __('novaMenuBuilder.menuItemValue'),
          }"
        >
          <template #field>
            <multiselect
              ref="multiselect"
              :options="options"
              :placeholder="__('novaMenuBuilder.chooseOption')"
              :value="selectedOption"
              @input="handleChange"
              @close="handleClose"
              @remove="handleRemove"
              @open="handleOpen"
              label="label"
              track-by="id"
              selectLabel=""
              selectGroupLabel=""
              selectedLabel=""
              deselectLabel=""
              deselectGroupLabel=""
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

        <DefaultField
          v-if="linkType.type && linkType.type !== 'text'"
          :fullWidthContent="true"
          :field="{
            ...defaultFieldProps,
            name: __('Open in'),
          }"
        >
          <template #field>
            <SelectControl
              v-model:selected="newItem.target"
              :options="[
                {
                  value: '_self',
                  label: __('novaMenuBuilder.menuItemTargetSameWindow'),
                },
                {
                  value: '_blank',
                  label: __('novaMenuBuilder.menuItemTargetNewWindow'),
                },
              ]"
            />
          </template>
        </DefaultField>

        <template v-if="fields && fields.length">
          <component
            v-for="(field, i) in fields"
            :is="`form-${field.component}`"
            :key="`${linkType.class}_${i}`"
            :field="field"
            :resource-id="resourceId"
            :resource-name="resourceName"
            :errors="wrappedErrors"
            :show-errors="true"
            class="menu-item-component"
            :fullWidthContent="true"
          />
        </template>
      </form>
    </div>

    <ModalFooter class="flex justify-end">
      <div class="ml-auto">
          <Button
              state="danger"
              dusk="cancel-action-button"
              @click.prevent="$emit('closeModal')"
              :label="__('novaMenuBuilder.closeModalTitle')"
              class="mr-3"
          />

        <Button
          type="button"
          dusk="confirm-action-button"
          state="default"
          variant="solid"
          :disabled="isMenuItemUpdating"
          :loading="isMenuItemUpdating"
          :label="__(update ? 'novaMenuBuilder.updatebuttonTitle' : 'novaMenuBuilder.createButtonTitle')"
          @click.prevent="storeWithData(update ? 'updateItem' : 'confirmItemCreate')"
        />
      </div>
    </ModalFooter>
  </Modal>
</template>

<script>
import { HandlesValidationErrors } from 'laravel-nova';
import { Errors } from 'form-backend-validation';
import { Button } from 'laravel-nova-ui';
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
    'maxDepth',
  ],

  data: () => ({
    toggleLabels: false,
    defaultFieldProps: {
      fullWidth: true,
      stacked: true,
      withLabel: true,
      visible: true,
    },
    overflowHiddenParent: null,
  }),

  components: { Button, Multiselect },

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
    this.switchColor = { checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4' };

    this.$nextTick(() => {
      if (!this.overflowHiddenParent && this.$refs.multiselect && this.$refs.multiselect.$el) {
        let parent = this.$refs.multiselect.$el.parentElement;
        let parentWithOverflowHidden = null;
        while (parent && !parentWithOverflowHidden) {
          if (parent.classList.contains('overflow-hidden')) parentWithOverflowHidden = parent;
          parent = parent.parentElement;
        }
        this.overflowHiddenParent = parentWithOverflowHidden;
      }

      if (this.overflowHiddenParent) this.overflowHiddenParent.style.overflow = 'visible';
    });
  },

  computed: {
    options() {
      const options = [...this.linkType.options];
      options.unshift({ id: '', label: this.__('novaMenuBuilder.chooseOption') });
      return options;
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
      let newerror = new Errors(ogErrors || {});
      return newerror;
    },

    selectedOption() {
      if (this.linkType.type === 'select') {
        return this.options.find(option => option.id === this.newItem.value);
      }
      return void 0;
    },
  },

  methods: {
    handleChange(value) {
      this.$emit('onLinkModelUpdate', value ? value.id : void 0);
      this.$nextTick(this.repositionDropdown);
    },

    handleOpen() {
      this.$nextTick(this.repositionDropdown);
    },

    handleClose() {
      if (this.overflowHiddenParent) this.overflowHiddenParent.style.overflow = null;
    },

    handleRemove() {
      this.$nextTick(this.repositionDropdown);
    },

    storeWithData(eventType) {
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

        const { height } = el.getBoundingClientRect();

        const top = height;

        ms.$refs.list.style.position = 'absolute';
        ms.$refs.list.style.width = `${el.clientWidth + 1}px`;
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
.o1-menu-builder-multiselect-wrapper {
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
