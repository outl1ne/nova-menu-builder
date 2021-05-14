<template>
  <resource-index :resourceName="resourceName" />
</template>

<script>
export default {
  data: () => ({
    resourceName: Nova.config.menuBuilderUriKey,
  }),
};
</script>
