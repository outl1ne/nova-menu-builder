<template>
  <div class="flex items-center mb-3">
    <h4 class="text-90 font-normal text-2xl flex-no-shrink">{{ __('Menu Items') }}</h4>
    <div class="ml-3 w-full flex items-center">
      <div class="flex w-full justify-end items-center"></div>
      <div class="ml-3"></div>
      <button
        :title="__('Add')"
        class="btn btn-default btn-icon bg-primary text-white flex-no-shrink"
        @click="$emit('addNewMenuItem')"
      >
        {{ __('Add item') }}
      </button>
    </div>
  </div>
</template>
