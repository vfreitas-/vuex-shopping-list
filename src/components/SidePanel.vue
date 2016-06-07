<template lang="jade">
    .mdl-layout__drawer.mdl-color--white
        header.mdl-color--pink-500.mdl-color-text--white
            .title.mdl-color--pink-500
                h5 Filters
        accordion(
            id="categories"
            appearence="mdl-color-text--indigo-500"
        )
            h6 Categories
            ul.mdl-list(slot="content")
                li.mdl-list__item(
                    v-for="(prop, enabled) in filters.categories"
                )
                    .mdl-list__item-primary-content
                        label.mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect(
                            v-bind:for="$index"
                        )
                            input.mdl-checkbox__input(
                                type="checkbox"
                                v-bind:checked="enabled"
                                v-bind:id="$index"
                                @change="updateFilters('categories', prop, $event.target.checked)"
                            )
                            span.mdl-checkbox__label {{ prop | capitalize }}
</template>

<script>
    import ProductService from '_services/product';
    import {getFilteredProducts} from '_vuex/modules/products/actions';
    import {updateFilters} from '_vuex/modules/filters/actions';

    import Accordion from './Accordion.vue';

    export default {
        vuex: {
            getters: {
                filters: ({ filters }) => filters.values
            },
            actions: {
                getFilteredProducts,
                updateFilters
            }
        },
        ready: function() {

        },
        components: {
            accordion: Accordion
        }
    }
</script>

<style lang="sass" scoped>
    .title {
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;

        h5 {
            margin: 0;
        }
    }

    .mdl-list {
        margin: 4px;

        .mdl-list__item {
            padding: 0 16px;
            min-height: 30px;
        }
    }

</style>
