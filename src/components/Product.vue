<template>
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
            <md-button>Add To Cart</md-button>
        </md-card-actions>
    </md-card>
</template>

<script>
    export default {
        name: 'Product',
        props: {
            product: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="sass" scoped>
    .product {
        width: 300px;
        margin: 0 auto 20px;

        transform-origin: center center;
    }

    .animate-enter {
        animation: product-in .3s ease;
    }

    .animate-leave-active {
        animation: product-out .3s ease;
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
