<template>
  <modal align="flex justify-end" :show="showModal" class="add-new-menu-item-modal">
    <div slot="container">
      <div class="flex flex-wrap justify-between mb-6">
        <h2 class="text-90 font-normal text-xl">
          {{ __(update ? 'novaMenuBuilder.updateModalTitle' : 'novaMenuBuilder.createModalTitle') }}
        </h2>

        <toggle-button v-model="newItem.enabled" :color="switchColor" :labels="toggleLabels" :sync="true" :width="78" />
      </div>

      <form @submit.prevent="$emit(update ? 'updateItem' : 'confirmItemCreate')" autocomplete="off">
        <div class="flex">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('novaMenuBuilder.menuItemName') }}</label>
          </div>

          <div class="py-4 w-4/5">
            <input
              :placeholder="__('novaMenuBuilder.menuItemName')"
              :class="{ 'border-danger': getError('name') }"
              class="w-full form-control form-input form-input-bordered"
              id="name"
              type="text"
              v-model="newItem.name"
            />

            <help-text class="error-text mt-2 text-danger" v-if="getError('name')">
              {{ getError('name') }}
            </help-text>
          </div>
        </div>

        <div class="flex border-t border-40">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('novaMenuBuilder.menuItemType') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select
              :value="linkType.class"
              @input="e => $emit('onLinkTypeUpdate', e.target.value)"
              class="w-full form-control form-select"
              :class="{ 'border-danger': getError('class') }"
            >
              <option disabled="disabled" selected="selected" value="">
                {{ __('novaMenuBuilder.chooseMenuItemType') }}
              </option>
              <option :key="i" :value="type.class" v-for="(type, i) of menuItemTypes">
                {{ __(type.name) }}
              </option>
            </select>

            <help-text class="error-text mt-2 text-danger" v-if="getError('class')">
              {{ __('novaMenuBuilder.menuTypeRequired') }}
            </help-text>
          </div>
        </div>

        <template v-if="linkType.type === 'static-url'">
          <div class="flex border-t border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">
                {{ __('novaMenuBuilder.menuItemUrlFieldName') }}
              </label>
            </div>
            <div class="py-4 w-4/5">
              <input
                id="url"
                type="text"
                v-model="newItem.value"
                :class="{ 'border-danger': getError('value') }"
                :placeholder="__('novaMenuBuilder.menuItemUrlFieldName')"
                class="w-full form-control form-input form-input-bordered"
              />

              <help-text class="error-text mt-2 text-danger" v-if="getError('value')">
                {{ getError('value') }}
              </help-text>
            </div>
          </div>
        </template>

        <!-- Select -->
        <template v-if="linkType.type === 'select'">
          <div class="flex border-t border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('novaMenuBuilder.menuItemValue') }}</label>
            </div>

            <div class="py-4 w-4/5">
              <multiselect
                :options="options"
                :placeholder="__('novaMenuBuilder.chooseOption')"
                :value="options.find(option => option.id === newItem.value)"
                @input="value => $emit('onLinkModelUpdate', value.id)"
                label="label"
                track-by="id"
                selectLabel=""
                selectGroupLabel=""
                selectedLabel=""
                deselectLabel=""
                deselectGroupLabel=""
              />

              <help-text class="error-text mt-2 text-danger" v-if="getError('value')">
                {{ getError('value') }}
              </help-text>
            </div>
          </div>
        </template>

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

        <div class="flex border-t border-40" v-if="linkType.type && linkType.type !== 'text'">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Open in') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select class="w-full form-control form-select" v-model="newItem.target">
              <option value="_self">{{ __('novaMenuBuilder.menuItemTargetSameWindow') }}</option>
              <option value="_blank">{{ __('novaMenuBuilder.menuItemTargetNewWindow') }}</option>
            </select>
          </div>
        </div>
      </form>
    </div>

    <div slot="buttons">
      <div class="ml-auto">
        <button
          @click.prevent="$emit('closeModal')"
          class="btn text-80 font-normal h-9 px-3 mr-3 btn-link"
          type="button"
        >
          {{ __('novaMenuBuilder.closeModalTitle') }}
        </button>

        <progress-button
          @click.native.prevent="storeWithData(update ? 'updateItem' : 'confirmItemCreate')"
          :disabled="isMenuItemUpdating"
          :processing="isMenuItemUpdating"
        >
          {{ __(update ? 'novaMenuBuilder.updatebuttonTitle' : 'novaMenuBuilder.createButtonTitle') }}
        </progress-button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal';
import Multiselect from 'vue-multiselect';
import { HandlesValidationErrors } from 'laravel-nova';
import { Errors } from 'form-backend-validation';

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
  components: { Modal, Multiselect },
  data: () => ({
    toggleLabels: false,
  }),

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
      }

      return fields || [];
    },

    errors() {
      const ogErrors = this.$props.errors;
      if (ogErrors && typeof ogErrors.has === 'function') return ogErrors;
      return new Errors(ogErrors || {});
    },
  },

  methods: {
    storeWithData(eventType) {
      this.fields.forEach(field => {
        const formData = new FormData();
        field.fill(formData);

        const values = Array.from(formData.values());

        if (field.component === 'trix-field') {
          this.$set(this.newItem, field.attribute, values[0]);
          return;
        }

        // Is array
        const firstKey = Array.from(formData.keys())[0];
        if (firstKey && firstKey.endsWith(']')) {
          this.$set(this.newItem, field.attribute, values || []);
        } else {
          if (values.length === 0) this.$set(this.newItem, field.attribute, void 0);
          if (values.length === 1) this.$set(this.newItem, field.attribute, values[0]);
          if (values.length > 1) this.$set(this.newItem, field.attribute, values);
        }
      });

      this.$emit(eventType);
    },

    getError(key) {
      return (this.errors && this.errors[key] && this.errors[key][0]) || void 0;
    },
  },
};
</script>

<style lang="scss">
@import '~vue-multiselect/dist/vue-multiselect.min.css';

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

  .multiselect {
    > .multiselect__tags {
      border-color: var(\-\-60);
      border-radius: 0.5rem;
      box-shadow: none;
    }
  }
}
</style>
