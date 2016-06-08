<template lang="jade">
    .mdl-layout__drawer.mdl-color--white
        header.mdl-color--pink-500.mdl-color-text--white
            .title.mdl-color--pink-500
                h5 Filters
        filter(
            filter-field="categories"
            product-field="category"
            v-bind:checkbox-data="filters.categories"
            type="checkbox"
        )
        filter(
            filter-field="variations"
            product-field="variation"
            v-bind:checkbox-data="filters.variations"
            type="checkbox"
        )
</template>

<script>
    import Filter from './Filter.vue';

    export default {
        vuex: {
            getters: {
                filters: ({ filters }) => filters.values
            }
        },
        components: {
            filter: Filter
        }
    }
</script>

<style lang="sass" scoped>
    header {
        margin-bottom: 10px;
    }

    .title {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
