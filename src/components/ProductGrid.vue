<template>
    <div style="padding-top: 10px;">
        <md-progress v-show="loading" md-indeterminate></md-progress>
        <transition-group name="scale" tag="div" class="grid">
            <product v-for="product in products" :product="product" :key="product.id"></product>
        </transition-group>
    </div>
</template>

<script>
    import Product from './Product.vue'

    export default {
        name: 'ProductGrid',
        computed: {
            products () {
                return this.$store.state.products.filtered
            },
            loading () {
                return this.$store.state.products.loader
            }
        },
        methods: {
            getAllProducts () {
                this.$store.dispatch('getAllProducts')
            }
        },
        mounted () {
            this.getAllProducts()
        },
        components: {
            Product
        }
    }
</script>

<style lang="sass" scoped>
    .grid {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        transition: all .4s ease;

        position: relative;
        padding: 0 20px;
        margin: 20px auto;
    }

    .scale-move, .scale-enter-active, .scale-leave-active {
        transition: transform 1s;
    }

    .scale-enter, .scale-leave-to {
        transform: scale(0);
        // animation: product-in .3s ease;
    }

    .scale-leave-to {
        // animation: product-out .3s ease;
    }

    @keyframes product-in {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes product-out {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
