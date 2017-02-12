<template>
    <div>
        <accordion :id="filterField" appearence="mdl-color-text--indigo-500">
            <h6>
                {{ filterField }}
            </h6>
            <ul class="mdl-list">
                <li v-for="(enabled, prop) in checkboxData" class="mdl-list__item">
                    <div class="mdl-list__item-primary-content">
                        <md-checkbox :id="`${filterField}_${prop}`"
                        class="md-primary"
                        @change="updateFilters(filterField, productField, prop, $event.target.checked)"
                        name="categories" >
                            {{ prop }}
                        </md-checkbox>
                    </div>
                </li>
            </ul>
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
            updateFilters () {
                return this.$store.dispatch('updateFilters')
            }
        },
        components: {
            accordion: Accordion
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
