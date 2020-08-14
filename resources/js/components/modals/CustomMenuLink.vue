<template class="custom-menu-link">
  <div class="flex border-b border-40" v-if="linkType.type === 'custom-link-type'">
    <div class="w-1/5 py-4">
      <label class="inline-block text-80 pt-2 leading-tight">User link type</label>
    </div>

    <div class="py-4 w-4/5">
      <input
        :placeholder="'Custom implementation'"
        class="w-full form-control form-input form-input-bordered"
        type="text"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['linkType'],
};

</script>
