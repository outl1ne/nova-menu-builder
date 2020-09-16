<template>
  <modal align="flex justify-end" :show="showModal" class="add-new-menu-item-modal">
    <div slot="container">
      <div class="flex flex-wrap justify-between mb-6">
        <h2 class="text-90 font-normal text-xl">
          {{ __(update ? 'novaMenuBuilder.updateModalTitle' : 'novaMenuBuilder.createModalTitle') }}
        </h2>
        <toggle-button :color="switchColor" :labels="toggleLabels" :sync="true" :width="70" v-model="newItem.enabled" />
      </div>

      <form @submit.prevent="$emit(update ? 'updateItem' : 'confirmItemCreate')" autocomplete="off">
        <div class="flex">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('novaMenuBuilder.menuItemName') }}</label>
          </div>

          <div class="py-4 w-4/5">
            <input
              :placeholder="__('novaMenuBuilder.menuItemName')"
              class="w-full form-control form-input form-input-bordered"
              id="name"
              type="text"
              v-model="newItem.name"
            />
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
            >
              <option disabled="disabled" selected="selected" value="">{{ __('Choose an option') }}</option>
              <option :key="i" :value="type.class" v-for="(type, i) of menuItemTypes">{{ __(type.name) }}</option>
            </select>
          </div>
        </div>

        <template v-if="linkType.type === 'static-url'">
          <div class="flex border-t border-40">
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

        <!-- Select -->
        <template v-if="linkType.type === 'select'">
          <div class="flex border-t border-40">
            <div class="w-1/5 py-4">
              <label class="inline-block text-80 pt-2 leading-tight">{{ __('novaMenuBuilder.menuItemValue') }}</label>
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

        <div v-if="linkType.fields">
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
          {{ __('novaMenuBuilder.closeModalTitle') }}
        </button>

        <button
          @click.prevent="storeWithData(update ? 'updateItem' : 'confirmItemCreate')"
          class="btn btn-default btn-primary"
        >
          {{ __(update ? 'novaMenuBuilder.updatebuttonTitle' : 'novaMenuBuilder.createButtonTitle') }}
        </button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal';
import Multiselect from 'vue-multiselect';

export default {
  props: ['newItem', 'showModal', 'update', 'linkType', 'menuItemTypes', 'resourceName', 'resourceId'],
  components: { Modal, Multiselect },
  data: () => ({
    toggleLabels: false,
  }),

  mounted() {
    this.toggleLabels = { checked: this.__('Enabled'), unchecked: this.__('Disabled') };
    this.switchColor = { checked: '#21b978', unchecked: '#dae1e7', disabled: '#eef1f4' };
  },

  computed: {
    options() {
      const options = Object.keys(this.linkType.options).map(id => ({ id, label: this.linkType.options[id] }));
      options.unshift({ id: '', label: this.__('Choose an option') });
      return options;
    },

    fields() {
      if (!this.newItem.fields) return this.linkType.fields;
      if (this.update) return this.newItem.fields;
      return this.linkType.fields;
    },
  },

  methods: {
    storeWithData(eventType) {
      this.fields.forEach(field => {
        const formData = new FormData();
        field.fill(formData);

        const values = Array.from(formData.values());
        if (values.length === 0) this.newItem[field.attribute] = void 0;
        if (values.length === 1) this.newItem[field.attribute] = values[0];
        if (values.length > 1) this.newItem[field.attribute] = values;
      });

      this.$emit(eventType);
    },
  },
};
</script>

<style lang="scss">
.add-new-menu-item-modal {
  .menu-item-component {
    > div:nth-child(1) {
      padding-left: 0;
    }

    > div:nth-child(2) {
      padding-left: 0;
      padding-right: 0;
      width: 80%;
    }
  }
}
</style>
