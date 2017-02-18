<template>
    <div>
        <md-card class="product">
            <md-card-media>
                <img :src="product.image">
            </md-card-media>

            <md-card-header>
                <div class="md-title">
                    {{ product.name }}
                </div>
                <div class="md-subhead">
                    {{ product.variation }}
                </div>
            </md-card-header>

            <md-card-content>
                {{ product.category }}
            </md-card-content>

            <md-card-actions>
                <md-button @click.native="addProduct(product)">Add To Cart</md-button>
            </md-card-actions>
        </md-card>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'Product',
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        methods: {
            ...mapActions([
                'addProduct'
            ])
        }
    }
</script>

<style lang="sass" scoped>
    .product {
        min-height: 440px;
        width: 300px;
        margin: 0 5px 20px;

        transform-origin: center center;
        transition: all .5s;
    }
</style>
