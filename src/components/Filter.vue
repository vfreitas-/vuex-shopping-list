<template>
    <div>
        <accordion :id="filterField" appearence="mdl-color-text--indigo-500">
            {{ filterField }}
            <md-list slot="content">
                <md-list-item v-for="(enabled, prop) in checkboxData">
                    <div class="mdl-list__item-primary-content">
                        <md-checkbox :id="`${filterField}_${prop}`"
                        class="md-primary"
                        @change.native="updateFilters(filterField, prop, $event.target.checked)">
                            {{ prop }}
                        </md-checkbox>
                    </div>
                </md-list-item>
            </md-list>
        </accordion>
    </div>
</template>

<script>
    import Accordion from './Accordion.vue'

    export default {
        name: 'Filter',
        props: {
            filterField: String,
            productField: String,
            checkboxData: Object,
            pricesData: Array,
            type: {
                type: String,
                default: 'checkbox'
            }
        },
        methods: {
            updateFilters (filterField, prop, enabled) {
                return this.$store.dispatch('updateFilters', {
                    filterField, prop, enabled
                })
            }
        },
        components: {
            Accordion
        }
    }
</script>

<style lang="sass">
    .accordion h6 {
        margin: 0;
    }

    .mdl-list {
        margin: 4px;
        padding: 0;

        .mdl-list__item {
            padding: 0 16px;
            min-height: 30px;
        }
    }
</style>
