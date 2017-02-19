<template>
    <div class="cart-list">
        <template v-for="product in products">
            <cart-item :item="product"></cart-item>
            <div class="cart-list__divider"></div>
        </template>
    </div>
</template>

<script>
    import CartItem from './CartItem.vue'

    export default {
        name: 'CartList',
        props: {
            products: {
                required: true,
                type: Array
            }
        },
        components: {
            CartItem
        }
    }
</script>

<style lang="sass" scoped>
    .cart-list {
        height: 100%;
        overflow: auto;

        &__divider {
            height: 1px;
            width: 100%;
            background-color: rgba(0,0,0,.12);
        }
    }
</style>