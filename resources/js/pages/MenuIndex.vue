<template>
    <ResourceIndex :resource-name="resourceName" :shouldOverrideMeta="true"/>
</template>

<script>
export default {
    data: () => ({
        resourceName: Nova.config('menuBuilder').menuBuilderUriKey,
    }),
};
</script>
