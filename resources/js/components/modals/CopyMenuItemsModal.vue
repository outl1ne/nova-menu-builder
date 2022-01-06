<template>
  <modal align="flex justify-end" :show="showModal" class="copy-menu-items-modal">
    <div slot="container">
      <div class="flex flex-wrap justify-between mb-6">
        <h2 class="text-90 font-normal text-xl">
          {{ __('novaMenuBuilder.copyMenuItemsFromTitle') }}
        </h2>
      </div>

      <form @submit.prevent="copyMenuItems" autocomplete="off">
        <div class="flex">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{
              __('novaMenuBuilder.menuResourceSingularLabel')
            }}</label>
          </div>

          <div class="py-4 w-4/5">
            <multiselect
              :options="menuOptions"
              :placeholder="__('novaMenuBuilder.menuResourceSingularLabel')"
              :value="selectedMenu"
              @input="value => (selectedMenu = value)"
              label="title"
              track-by="id"
              selectLabel=""
              selectGroupLabel=""
              selectedLabel=""
              deselectLabel=""
              deselectGroupLabel=""
            />
          </div>
        </div>

        <div class="flex border-t border-40">
          <div class="w-1/5 py-4">
            <label class="inline-block text-80 pt-2 leading-tight">{{ __('novaMenuBuilder.locale') }}</label>
          </div>
          <div class="py-4 w-4/5">
            <multiselect
              :options="localeOptions"
              :placeholder="__('novaMenuBuilder.locale')"
              :value="selectedLocale"
              @input="value => (selectedLocale = value)"
              label="name"
              track-by="id"
              selectLabel=""
              selectGroupLabel=""
              selectedLabel=""
              deselectLabel=""
              deselectGroupLabel=""
            />
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

        <progress-button @click.native.prevent="copyMenuItemsFromMenu" :disabled="isCopying" :processing="isCopying">
          {{ __('novaMenuBuilder.copyMenuItemsButtonTitle') }}
        </progress-button>
      </div>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal';
import Multiselect from 'vue-multiselect';
import api from '../../api';

export default {
  props: ['showModal', 'activeLocale', 'locales', 'resourceName', 'resourceId'],
  components: { Modal, Multiselect },
  data: () => ({
    isCopying: false,
    menuOptions: [],
    selectedMenu: void 0,
    selectedLocale: void 0,
    localeOptions: [],
  }),

  async mounted() {
    this.setLocaleDataBasedOnActiveLocale();
    await this.fetchMenuOptions();
    this.selectedMenu = this.menuOptions.find(m => String(m.id) === String(this.resourceId));
  },

  watch: {
    activeLocale() {
      this.setLocaleDataBasedOnActiveLocale();
    },
  },

  methods: {
    async fetchMenuOptions() {
      this.menuOptions = (await api.getMenus()).data;
    },

    async copyMenuItemsFromMenu() {
      if (!this.selectedMenu || !this.selectedLocale) return;
      this.isCopying = true;
      try {
        await api.copyItems(this.selectedMenu.id, this.selectedLocale.id, this.resourceId, this.activeLocale);
        this.$emit('refreshItems');
        this.$emit('closeModal');
      } catch (e) {
        console.info(e);
      }
      this.isCopying = false;
    },

    setLocaleDataBasedOnActiveLocale() {
      this.localeOptions = Object.keys(this.locales)
        .filter(key => key !== this.activeLocale)
        .map(key => ({
          id: key,
          name: this.locales[key],
        }));

      this.selectedLocale = this.localeOptions[0];
    },
  },
};
</script>
