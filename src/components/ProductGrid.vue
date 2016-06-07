<template lang="jade">
    div
        .mdl-progress.mdl-js-progress.mdl-progress__indeterminate(
            v-show="loading"
        )
        .grid
            product(
                v-for="product in products"
                v-bind:product="product"
            )
</template>

<script>
    import Product from './Product.vue';
    import {getAllProducts} from '_vuex/modules/products/actions';

    export default {
        data: function() {
            return {

            }
        },
        vuex: {
            getters: {
                products: ({ products }) => products.list,
                loading: ({ products }) => products.loader
            },
            actions: {
                getAllProducts
            }
        },
        ready: function() {
            this.getAllProducts();
        },
        components: {
            'product': Product
        }
    }
</script>

<style lang="sass" scoped>
    .grid {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        transition: all .4s ease;

        position: relative;
        padding: 0 20px;
        margin: 20px auto;
    }

    .mdl-progress {
        width: 100%;
        margin: 5px 0;
    }
</style>
