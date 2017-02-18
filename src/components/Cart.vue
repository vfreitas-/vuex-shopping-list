<template>
    <div class="shopping-cart" :class="{'shopping-cart--active': isActive}">
        <div class="shopping-cart__icon" :data-count="count" @click="isActive = !isActive">
            <transition name="fade" mode="out-in">
                <md-icon v-if="!isActive" class="md-primary md-size-2x" key="cart">
                    add_shopping_cart
                </md-icon>
                <md-icon v-else class="md-primary md-size-2x" key="close">
                    close
                </md-icon>
            </transition>
        </div>
        <div class="shopping-cart__wrapper">
            <div class="shopping-cart__content cart-content">
                <div class="cart-content__header">
                    <md-toolbar>
                        <h2 class="md-title">Shopping Cart</h2>
                    </md-toolbar>
                </div>
                <div class="cart-content__list">
                    <cart-list :products="products"></cart-list>
                </div>
                <div class="cart-content__footer">
                    <p class="cart-content__footer__text">Total: ${{ total.toFixed(2) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import CartList from './CartList.vue'

    export default {
        name: 'Cart',
        data () {
            return {
                isActive: false
            }
        },
        computed: {
            ...mapState({
                products: ({ cart }) => cart.products,
                total: ({ cart }) => cart.total,
                count: ({ cart }) => cart.count
            })
        },
        components: {
            CartList
        }
    }
</script>

<style lang="sass">
    .shopping-cart {
        &__icon {
            z-index: 10;

            height: 72px;
            width: 72px;
            border-radius: 6px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.27);

            display: flex;

            cursor: pointer;
            background: #ffffff;

            user-select: none;

            &:after {
                content: attr(data-count);

                position: absolute;
                top: -5px;
                right: -5px;
                height: 25px;
                width: 25px;

                display: flex;
                justify-content: center;
                align-items: center;

                border-radius: 50%;
                background-color: #3f51b5;
                color: white;
                font-weight: bold;
            }
        }

        &__wrapper {
            z-index: 9;
            width: 90%;
            max-width: 450px;
            height: 400px;
            max-height: 90%;
            pointer-events: none;
        }

        &__icon, &__wrapper {
            position: fixed;
            bottom: 20px;
            right: 2vw;
        }

        &__content {
            z-index: 8;
            height: 72px;
            width: 72px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.27);

            & .md-title, .cart-content__footer__text {
                opacity: 0;
                transform: translateY(-20px);
            }
        }

        &--active {
            .shopping-cart__content {
                width: 100%;
                height: 100%;

                & .md-title, .cart-content__footer__text {
                    transition: opacity .3s, transform .3s .3s;
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
    }

    .cart-content {
        position: absolute;
        bottom: 0;
        right: 0;
        overflow: hidden;
        border-radius: 6px;
        background: #ffffff;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.27);

        transition: height .4s, width .4s;
        transition-timing-function: cubic-bezier(0.67, 0.17, 0.32, 0.95);
        pointer-events: auto;

        display: flex;
        flex-direction: column;

        &__header {
            flex: 0 0 65px;
        }

        &__list {
            display: flex;
            flex: 1;
        }

        &__footer {
            flex: 0 0 72px;

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 15px;
            background-color: #3F51B5;
            font-size: 1.3rem;
            color: white;
        }
    }
</style>