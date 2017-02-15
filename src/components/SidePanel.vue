<template>
    <md-sidenav class="md-left" ref="sidebar">
        <md-toolbar class="md-dense">
            <div class="md-toolbar-container">
                <h3 class="md-title">Filters</h3>
            </div>
        </md-toolbar>

        <app-filter filter-field="categories"
            :checkbox-data="filters.categories" 
            type="checkbox">
        </app-filter>
        <app-filter filter-field="variations"
            :checkbox-data="filters.variations"
            type="checkbox">
        </app-filter>
    </md-sidenav>
</template>

<script>
    import AppFilter from './Filter.vue'

    export default {
        name: 'SidePanel',
        computed: {
            isActive () {
                return this.$store.state.toggle.sidebar
            },
            filters () {
                return this.$store.state.filters.values
            }
        },
        watch: {
            isActive (val, oldVal) {
                if (val !== oldVal) {
                    this.$refs.sidebar.toggle()
                }
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
