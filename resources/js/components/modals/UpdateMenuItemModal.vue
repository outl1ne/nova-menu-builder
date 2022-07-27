<template>
  <Modal
    :show="showModal"
    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    align="flex justify-end"
  >
    <ModalHeader class="flex flex-wrap justify-between">
      {{ __(update ? 'novaMenuBuilder.updateModalTitle' : 'novaMenuBuilder.createModalTitle') }}

      <CheckboxWithLabel
        class="ml-auto mr-4"
        :checked="newItem.nestable"
        @input="newItem.nestable = $event.target.checked"
      >
        {{ __('novaMenuBuilder.nestableLabel') }}
      </CheckboxWithLabel>

      <CheckboxWithLabel :checked="newItem.enabled" @input="newItem.enabled = $event.target.checked">
        {{ newItem.enabled ? this.toggleLabels.checked : this.toggleLabels.unchecked }}
      </CheckboxWithLabel>
    </ModalHeader>
    <div>
      <form @submit.prevent="$emit(update ? 'updateItem' : 'confirmItemCreate')" autocomplete="off">
        <DefaultField
          :field="{
            visible: true,
            hasError: !!getError('name'),
            firstError: getError('name'),
            name: __('novaMenuBuilder.menuItemName'),
          }"
        >
          <template #field>
            <input
              :placeholder="__('novaMenuBuilder.menuItemName')"
              :class="{ 'border-danger': getError('name') }"
              class="w-full form-control form-input form-input-bordered"
              id="name"
              type="text"
              v-model="newItem.name"
            />
          </template>
        </DefaultField>

        <DefaultField
          :field="{
            visible: true,
            hasError: !!getError('class'),
            firstError: __('novaMenuBuilder.menuTypeRequired'),
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
          :field="{
            visible: true,
            hasError: !!getError('value'),
            firstError: getError('value'),
            name: __('novaMenuBuilder.menuItemUrlFieldName'),
          }"
        >
          <template #field>
            <input
              :placeholder="__('novaMenuBuilder.menuItemUrlFieldName')"
              :class="{ 'border-danger': getError('value') }"
              class="w-full form-control form-input form-input-bordered"
              id="url"
              type="text"
              v-model="newItem.value"
            />
          </template>
        </DefaultField>

        <DefaultField
          v-if="linkType.type === 'select'"
          class="option-select-field"
          :field="{
            visible: true,
            hasError: !!getError('value'),
            name: __('novaMenuBuilder.menuItemValue'),
          }"
        >
          <template #field>
            <multiselect
              :options="options"
              :placeholder="__('novaMenuBuilder.chooseOption')"
              :value="selectedOption"
              @input="value => $emit('onLinkModelUpdate', value ? value.id : void 0)"
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

        <div v-if="fields && fields.length">
          <component
            v-for="(field, i) in fields"
            :is="`form-${field.component}`"
            :key="`${linkType.class}_${i}`"
            :field="field"
            :resource-id="resourceId"
            :resource-name="resourceName"
            :errors="errors"
            :show-errors="true"
            class="menu-item-component border-t border-40 remove-bottom-border"
          />
        </div>

        <DefaultField
          v-if="linkType.type && linkType.type !== 'text'"
          :field="{
            visible: true,
            name: __('Open in'),
          }"
        >
          <template #field>
            <SelectControl
              v-model:selected="newItem.target"
              @change="newItem.target = $event"
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
      </form>
    </div>

    <ModalFooter class="flex justify-end">
      <div class="ml-auto">
        <CancelButton
          component="button"
          type="button"
          dusk="cancel-action-button"
          @click.prevent="$emit('closeModal')"
        />

        <LoadingButton
          class="ml-3"
          type="submit"
          ref="runButton"
          :disabled="isMenuItemUpdating"
          :loading="isMenuItemUpdating"
          @click="storeWithData(update ? 'updateItem' : 'confirmItemCreate')"
        >
          {{ __(update ? 'novaMenuBuilder.updatebuttonTitle' : 'novaMenuBuilder.createButtonTitle') }}
        </LoadingButton>
      </div>
    </ModalFooter>
  </Modal>
</template>

<script>
import { HandlesValidationErrors } from 'laravel-nova';
import { Errors } from 'form-backend-validation';
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
  ],

  data: () => ({
    toggleLabels: false,
  }),

  components: { Multiselect },

  watch: {
    'newItem.name'(newName) {
      this.emitFieldValueChange('name', newName);
    },
  },

  mounted() {
    this.toggleLabels = {
      checked: this.__('novaMenuBuilder.menuItemActive'),
      unchecked: this.__('novaMenuBuilder.menuItemDisabled'),
    };
    this.switchColor = { checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4' };
  },

  computed: {
    options() {
      const options = [...this.linkType.options];
      options.unshift({ id: '', label: this.__('novaMenuBuilder.chooseOption') });
      return options;
    },

    fields() {
      let fields = this.linkType.fields;
      if (this.update) {
        fields = this.linkType.class === this.newItem.class ? this.newItem.fields : this.linkType.fields;
        fields.forEach(f => {
          if (f.component === 'slug-field') {
            f.updating = true;
            f.readonly = true;
            f.showCustomizeButton = true;
          }
        });
      }
      return fields || [];
    },

    errors() {
      const ogErrors = this.$props.errors;
      if (ogErrors && typeof ogErrors.has === 'function') return ogErrors;
      return new Errors(ogErrors || {});
    },

    selectedOption() {
      if (this.linkType.type === 'select') {
        return this.options.find(option => option.id === this.newItem.value);
      }
      return void 0;
    },
  },

  methods: {
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

    getError(key) {
      return (this.errors && this.errors[key] && this.errors[key][0]) || void 0;
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
.option-select-field {
  .multiselect__tags {
    --tw-border-opacity: 1;
    border-width: 1px;
    border-color: rgba(var(--colors-gray-300), var(--tw-border-opacity));
    background-color: rgba(var(--colors-white), var(--tw-bg-opacity));
    color: rgba(var(--colors-gray-600), var(--tw-text-opacity));

    .dark & {
      border-color: rgba(var(--colors-gray-700), var(--tw-border-opacity));
      background-color: rgba(var(--colors-gray-900), var(--tw-bg-opacity));
      color: rgba(var(--colors-gray-400), var(--tw-text-opacity));
    }
  }
  .multiselect__input {
    border: none;
    background-color: rgba(var(--colors-white), var(--tw-bg-opacity));
    color: rgba(var(--colors-gray-600), var(--tw-text-opacity));

    .dark & {
      background-color: rgba(var(--colors-gray-900), var(--tw-bg-opacity));
      color: rgba(var(--colors-gray-400), var(--tw-text-opacity));
    }
  }
  .multiselect__tag {
    background-color: rgba(var(--colors-primary-500));
    color: rgba(var(--colors-white), var(--tw-text-opacity));
    --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    font-weight: 700;

    .multiselect__tag-icon {
      &::after {
        color: rgba(var(--colors-white));
      }
      &:hover {
        background: rgba(var(--colors-primary-400));
        &::after {
          color: rgba(var(--colors-red-500));
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
    background-color: rgba(var(--colors-white), var(--tw-bg-opacity));
    color: rgba(var(--colors-gray-600), var(--tw-text-opacity));

    .dark & {
      background-color: rgba(var(--colors-gray-900), var(--tw-bg-opacity));
      color: rgba(var(--colors-gray-400), var(--tw-text-opacity));
    }
  }
  .multiselect__spinner {
    background-color: rgba(var(--colors-white), var(--tw-bg-opacity));
    color: rgba(var(--colors-gray-600), var(--tw-text-opacity));

    .dark & {
      background-color: rgba(var(--colors-gray-900), var(--tw-bg-opacity));
      color: rgba(var(--colors-gray-400), var(--tw-text-opacity));
    }
    &:before,
    &:after {
      border-color: rgba(var(--colors-primary-500)) transparent transparent;
    }
  }
  .multiselect__content-wrapper {
    border-color: rgba(var(--colors-gray-300), var(--tw-border-opacity));

    .dark & {
      border-color: rgba(var(--colors-gray-700), var(--tw-border-opacity));
    }

    li > span.multiselect__option {
      background-color: #fff;
      color: rgba(var(--colors-gray-400));

      .dark & {
        background-color: rgba(var(--colors-gray-900));
      }
    }
    .multiselect__element {
      background-color: rgba(var(--colors-white), var(--tw-bg-opacity));
      color: rgba(var(--colors-gray-600), var(--tw-text-opacity));

      .dark & {
        background-color: rgba(var(--colors-gray-900), var(--tw-bg-opacity));
        color: rgba(var(--colors-gray-400), var(--tw-text-opacity));
      }

      .multiselect__option {
        color: rgba(var(--colors-gray-600));

        .dark & {
          color: rgba(var(--colors-gray-400));
        }

        &.multiselect__option--selected {
          color: rgba(var(--colors-primary-400));
          background-color: rgba(var(--colors-white));

          .dark & {
            background-color: rgba(var(--colors-gray-900));
          }
        }
        &.multiselect__option--highlight {
          background-color: rgba(var(--colors-primary-500));
          color: rgba(var(--colors-white));

          &::after {
            background-color: rgba(var(--colors-primary-500));
            font-weight: 700;
          }

          &.multiselect__option--selected {
            background-color: rgba(var(--colors-red-500));

            .dark & {
              background-color: rgba(var(--colors-red-500));
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
    font-weight: 700;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .multiselect__clear {
    position: absolute;
    right: 41px;
    height: 40px;
    width: 40px;
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
      top: 12px;
      right: 4px;
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
