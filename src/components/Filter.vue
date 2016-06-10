<template lang="jade">
    div
        accordion(
            v-bind:id="filterField"
            appearence="mdl-color-text--indigo-500"
        )
            h6 {{ filterField | capitalize }}
            ul.mdl-list(slot="content")
                li.mdl-list__item(
                    v-for="(prop, enabled) in checkboxData"
                )
                    .mdl-list__item-primary-content
                        label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(
                            v-bind:for="filterField + '_' + $index"
                        )
                            input.mdl-checkbox__input(
                                type="checkbox"
                                v-bind:checked="enabled"
                                v-bind:id="filterField + '_' + $index"
                                @change="updateFilters(filterField, productField, prop, $event.target.checked)"
                            )
                            span.mdl-checkbox__label {{ prop | capitalize }}
</template>

<script>
    import {updateFilters} from '_vuex/actions/filters';

    import Accordion from './Accordion.vue';

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
        ready: function() {
            console.log(this.filterField);
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
