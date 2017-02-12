<template>
    <div class="mdl-layout__drawer mdl-color--white">
        <header class="mdl-color--pink-500 mdl-color-text--white">
            <div class="title mdl-color--pink-500">
                <h5>Filters</h5>
            </div>
        </header>
        <app-filter filter-field="categories" product-field="category" 
            :checkbox-data="filters.categories" 
            type="checkbox">
        </app-filter>
        <app-filter filter-field="variations" product-field="variation" 
            :checkbox-data="filters.variations"
            type="checkbox">
        </app-filter>
    </div>
</template>

<script>
    import AppFilter from './Filter.vue'

    export default {
        name: 'SidePanel',
        computed: {
            filters () {
                return this.$store.state.filters.values
            }
        },
        components: {
            AppFilter
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
