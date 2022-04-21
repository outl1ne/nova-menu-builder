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
      console.log(eventType);
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
</style>
