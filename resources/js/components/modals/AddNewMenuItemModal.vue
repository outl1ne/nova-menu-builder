<template>
  <modal :align="'flex justify-end'" :show="showModal" class="add-new-menu-item-modal">
    <div slot="container">
      <div class="flex flex-wrap justify-between mb-6">
        <h2 class="text-90 font-normal text-xl">{{ __('Add Menu item') }}</h2>
        <toggle-button :color="switchColor" :labels="toggleLabels" :sync="true" :width="70" v-model="newItem.enabled"/>
      </div>

      <form @submit.prevent="$emit(update ? 'updateItem' : 'confirmItemCreate')" autocomplete="off">
        <div class="flex border-b border-40">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Name') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <input
              :placeholder="this.__('Name')"
              class="w-full form-control form-input form-input-bordered"
              id="name"
              type="text"
              v-model="newItem.name"
            />
          </div>
        </div>
        <div class="flex border-b border-40">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Type') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select
              :value="linkType.class"
              @input="e => $emit('onLinkTypeUpdate', e.target.value)"
              class="w-full form-control form-select"
            >
              <option disabled="disabled" selected="selected" value="">{{ __('Choose an option') }}</option>

              <option :key="i" :value="type.class" v-for="(type, i) of linkTypes">{{ __(type.name) }}</option>
            </select>
          </div>
        </div>

        <template v-if="linkType.type === 'static-url'">
          <div class="flex border-b border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('URL') }}</label>
            </div>
            <div class="py-4 w-4/5">
              <input
                :placeholder="__('URL')"
                class="w-full form-control form-input form-input-bordered"
                id="url"
                type="text"
                v-model="newItem.value"
              />
            </div>
          </div>
        </template>

        <template v-if="linkType.type === 'select'">
          <div class="flex border-b border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('Model') }}</label>
            </div>

            <div class="py-4 w-4/5">
              <multiselect
                :options="options"
                :value="options.find(option => option.id === newItem.value)"
                @input="value => $emit('onLinkModelUpdate', value.id)"
                label="label"
                track-by="id"
              />
            </div>
          </div>
        </template>

        <card v-if="linkType.fields">
          <component
            :class="{  'remove-bottom-border': index === linkType.fields.length - 1,    }"
            :field="field"
            :is="`form-${field.component}`"
            :key="index"
            :resource-id="resourceId"
            :resource-name="resourceName"
            class="menu-item-component"
            v-for="(field, index) in fields"
          />
        </card>

        <div class="flex border-b border-40">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Parameters') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <codemirror :options="cmOptions" :placeholder="cmPlaceholder" v-model="newItem.parameters"></codemirror>
          </div>
        </div>
        <div class="flex border-b border-40" v-if="linkType.type && linkType.type !== 'text'">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Open in') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select class="w-full form-control form-select" v-model="newItem.target">
              <option value="_self">{{ __('Same window') }}</option>
              <option value="_blank">{{ __('New window') }}</option>
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

        <button @click.prevent="storeWithData('confirmItemCreate')" class="btn btn-default btn-primary"
                v-if="update === false">
          {{ __('Create menu item') }}
        </button>

        <button @click.prevent="storeWithData('updateItem')" class="btn btn-default btn-primary" v-else>
          {{ __('Update menu item') }}
        </button>
      </div>
    </div>
  </modal>
</template>
<script>
import Modal from './Modal';
import { codemirror } from 'vue-codemirror';

import 'codemirror/addon/display/placeholder.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';

export default {
  props: ['newItem', 'showModal', 'update', 'linkType', 'linkTypes', 'resourceName', 'resourceId'],
  components: {
    Modal,
    codemirror,
  },
  data: () => ({
    toggleLabels: false,
    switchColor: {},
    cmOptions: {
      tabSize: 2,
      theme: 'dracula',
      lineNumbers: false,
      lineWrapping: true,
      foldGutter: true,
      line: true,
      mode: {
        name: 'javascript',
        json: true,
      },
    },
    cmPlaceholder: '{\n  "exampleValue": 5\n}',
  }),

  mounted() {
    this.toggleLabels = { checked: this.__('Enabled'), unchecked: this.__('Disabled') };
    this.switchColor = { checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4' };
  },

  computed: {
    fields() {
      return this.newItem.fields || this.linkType.fields;
    },

    options() {
      const options = Object.keys(this.linkType.options).map(id => ({ id, label: this.linkType.options[id] }));
      options.unshift({ id: '', label: this.__('Choose an option') });
      return options;
    },
  },

  methods: {
    storeWithData(eventType) {
      this.fields.forEach(field => {
        const formData = new FormData();
        field.fill(formData);
        this.newItem[field.attribute] = formData.get(field.attribute);
      });

      delete this.newItem.classProp;
      this.$emit(eventType);
    },
  },
};
</script>

<style lang="scss">
.add-new-menu-item-modal {
  .CodeMirror {
    height: 100px;
    border-radius: 0.5rem;
    padding: 5px;

    .CodeMirror-placeholder {
      color: rgba(#6272a4, 0.7);
    }
  }

  .menu-item-component {
    div:nth-child(1) {
      padding-left: 0;
    }

    div:nth-child(2) {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
    }
  }
}
</style>
