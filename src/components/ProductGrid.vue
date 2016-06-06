<template lang="jade">
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
                loading: true,
                products: []
            }
        },
        vuex: {
            getters: {
                products: ({ products }) => products.list
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

        position: relative;
        padding: 0 20px;
        margin: 20px auto;
    }
</style>
