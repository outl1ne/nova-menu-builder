<template>
  <modal align="flex justify-end" :show="showModal" class="add-new-menu-item-modal">
    <div slot="container">
      <div class="flex flex-wrap justify-between mb-6">
        <h2 class="text-90 font-normal text-xl">
          {{ __(update ? 'nova-menu-builder::update_modal_title' : 'nova-menu-builder::create_modal_title') }}
        </h2>

        <toggle-button v-model="newItem.enabled" :color="switchColor" :labels="toggleLabels" :sync="true" :width="78" />
      </div>

      <form @submit.prevent="$emit(update ? 'updateItem' : 'confirmItemCreate')" autocomplete="off">
        <div class="flex">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('nova-menu-builder::menu_item_name') }}</label>
          </div>

          <div class="py-4 w-4/5">
            <input
              :placeholder="__('nova-menu-builder::menu_item_name')"
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
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('nova-menu-builder::menu_item_type') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select
              :value="linkType.class"
              @input="e => $emit('onLinkTypeUpdate', e.target.value)"
              class="w-full form-control form-select"
              :class="{ 'border-danger': getError('class') }"
            >
              <option disabled="disabled" selected="selected" value="">
                {{ __('nova-menu-builder::menu_item_type') }}
              </option>
              <option :key="i" :value="type.class" v-for="(type, i) of menuItemTypes">
                {{ type.name }}
              </option>
            </select>

            <help-text class="error-text mt-2 text-danger" v-if="getError('class')">
              {{ __('nova-menu-builder::menu_type_required') }}
            </help-text>
          </div>
        </div>

        <template v-if="linkType.type === 'static-url'">
          <div class="flex border-t border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">
                {{ __('nova-menu-builder::menu_item_url_field_name') }}
              </label>
            </div>
            <div class="py-4 w-4/5">
              <input
                id="url"
                type="text"
                v-model="newItem.value"
                :class="{ 'border-danger': getError('value') }"
                :placeholder="__('nova-menu-builder::menu_item_url_field_name')"
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
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('nova-menu-builder::menu_item_value') }}</label>
            </div>

            <div class="py-4 w-4/5">
              <multiselect
                :options="options"
                :placeholder="__('nova-menu-builder::choose_option')"
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
            :key="i"
            :field="field"
            :resource-id="resourceId"
            :resource-name="resourceName"
            class="menu-item-component border-t border-40 remove-bottom-border"
          />
        </div>

        <div class="flex border-t border-40" v-if="linkType.type && linkType.type !== 'text'">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Open in') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select class="w-full form-control form-select" v-model="newItem.target">
              <option value="_self">{{ __('nova-menu-builder::menu_item_target_same_window') }}</option>
              <option value="_blank">{{ __('nova-menu-builder::menu_item_target_new_window') }}</option>
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
          {{ __('Cancel') }}
        </button>

        <progress-button
          @click.native.prevent="storeWithData(update ? 'updateItem' : 'confirmItemCreate')"
          :disabled="isMenuItemUpdating"
          :processing="isMenuItemUpdating"
        >
          {{ __(update ? 'nova-menu-builder::update_button_title' : 'nova-menu-builder::create_button_title') }}
        </progress-button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal';
import Multiselect from 'vue-multiselect';

export default {
  props: [
    'newItem',
    'showModal',
    'update',
    'linkType',
    'menuItemTypes',
    'resourceName',
    'resourceId',
    'errors',
    'isMenuItemUpdating',
  ],
  components: { Modal, Multiselect },
  data: () => ({
    toggleLabels: false,
  }),

  mounted() {
    this.toggleLabels = {
      checked: this.__('nova-menu-builder::menu_item_active'),
      unchecked: this.__('nova-menu-builder::menu_item_disabled'),
    };
    this.switchColor = { checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4' };
  },

  computed: {
    options() {
      const options = Object.keys(this.linkType.options).map(id => ({ id, label: this.linkType.options[id] }));
      options.unshift({ id: '', label: this.__('nova-menu-builder::choose_option') });
      return options;
    },

    fields() {
      if (this.update) {
        return this.linkType.class === this.newItem.class ? this.newItem.fields : this.linkType.fields;
      }
      return this.linkType.fields || [];
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
