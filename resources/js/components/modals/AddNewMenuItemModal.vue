<template>
  <modal ref="showModal" :show="showModal" :name="'showModal'" :align="'flex justify-end'">
    <div slot="container">
      <div class="flex flex-wrap justify-between mb-6">
        <h2 class="text-90 font-normal text-xl">{{ __('Add Menu item') }}</h2>
        <toggle-button v-model="newItem.enabled" :color="switchColor" :width="70" :sync="true" :labels="toggleLabels" />
      </div>

      <form autocomplete="off">
        <div class="flex border-b border-40">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Name') }}</label>
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
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Type') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select
              :value="linkType.class"
              @input="e => this.$emit('linkType', e.target.value)"
              class="w-full form-control form-select"
              @change="onChangeType"
            >
              <option value="" selected="selected" disabled="disabled">{{ __('Choose an option') }}</option>

              <option :value="type.class" v-for="(type, i) of linkTypes" :key="i">{{ type.name }}</option>
            </select>
          </div>
        </div>
        {{ log('linkType', linkType) }}
        <template v-if="linkType.type == 'static-url'">
          <div class="flex border-b border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('URL') }}</label>
            </div>
            <div class="py-4 w-4/5">
              <input
                v-model="newItem.value"
                id="url"
                type="text"
                :placeholder="this.__('URL')"
                class="w-full form-control form-input form-input-bordered"
              />
            </div>
          </div>
        </template>

        <template v-if="linkType.type == 'select'">
          <div class="flex border-b border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('Model') }}</label>
            </div>

            <div class="py-4 w-4/5">
              <select v-model="newItem.value" class="w-full form-control form-select">
                <option value="" selected="selected" disabled="disabled">{{ __('Choose an option') }}</option>

                <option :value="key" v-for="(key, i) of Object.keys(linkType.options)" :key="i">
                  {{ linkType.options[key] }}
                </option>
              </select>
            </div>
          </div>
          <div class="flex border-b border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('Parameters') }}</label>
            </div>
            <div class="py-4 w-4/5">
              <codemirror v-model="newItem.parameters" :options="cmOptions" :placeholder="cmPlaceholder"></codemirror>
            </div>
          </div>
        </template>
        <div class="flex border-b border-40" v-if="linkType.type && linkType.type !== 'text'">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('Open in') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <select v-model="newItem.target" class="w-full form-control form-select">
              <option value="_self">{{ __('Same window') }}</option>
              <option value="_blank">{{ __('New window') }}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
    <div slot="buttons">
      <div class="ml-auto">
        <button type="button" @click.prevent="closeModal" class="btn text-80 font-normal h-9 px-3 mr-3 btn-link">
          {{ __('Cancel') }}
        </button>

        <button
          v-if="update == false"
          ref="confirmButton"
          @click.prevent="confirmItemCreate"
          class="btn btn-default btn-primary"
        >
          {{ __('Create menu item') }}
        </button>

        <button v-else ref="confirmButton" @click.prevent="updateItem" class="btn btn-default btn-primary">
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
//themes
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';

export default {
  props: [
    'newItem',
    'showModal',
    'updateItem',
    'closeModal',
    'confirmItemCreate',
    'update',
    'linkType',
    'linkTypes',
    'onChangeType',
  ],
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
  }),
  mounted() {
    this.toggleLabels = { checked: this.__('Enabled'), unchecked: this.__('Disabled') };
    this.switchColor = { checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4' };
  },
};
</script>
