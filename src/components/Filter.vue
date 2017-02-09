<template>
    <div>
        <accordion :id="filterField" appearence="mdl-color-text--indigo-500">
            <h6>
                {{ filterField }}
            </h6>
            <ul class="mdl-list">
                <li v-for="(enabled, prop) in checkboxData" class="mdl-list__item">
                    <div class="mdl-list__item-primary-content">
                        <label :id="`${filterField}_${prop}`" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
                            <input @change="updateFilters(filterField, productField, prop, $event.target.checked)" 
                                :checked="enabled" 
                                :id="`${filterField}_${prop}`" 
                                type="checkbox" />
                            <span>
                                {{ prop }}
                            </span>
                        </label>
                    </div>
                </li>
            </ul>
        </accordion>
    </div>
</template>

<script>
    import {updateFilters} from '_vuex/actions/filters'

    import Accordion from './Accordion.vue'

    export default {
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
        vuex: {
            actions: {
                updateFilters
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
