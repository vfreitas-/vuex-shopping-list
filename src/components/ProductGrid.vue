<template>
    <div style="padding-top: 10px;">
        <md-progress v-show="loading" md-indeterminate></md-progress>
        <div class="grid">
            <product v-for="product in products" :product="product"></product>
        </div>
    </div>
</template>

<script>
    import Product from './Product.vue'

    export default {
        name: 'ProductGrid',
        computed: {
            products () {
                return this.$store.state.products.list
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
