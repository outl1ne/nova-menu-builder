<template>
  <ResourceIndex :resource-name="resourceName" />
</template>

<script>
export default {
  data: () => ({
    resourceName: Nova.config('menuBuilderUriKey'),
  }),
};
</script>
