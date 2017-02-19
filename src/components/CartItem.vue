<template>
    <div class="cart-item">
        <div class="cart-item__image">
            <img  :src="item.image"/>
        </div>
        <div class="cart-item__content">
            <span>{{ item.name }}</span>
        </div>
        <div class="cart-item__price">
            {{ '$' + item.price.toFixed(2) }}
        </div>
        <div class="cart-item__remove">
            <md-icon @click.native="removeProduct(item.id)" class="md-primary md-size-1x">
                close
            </md-icon>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'CartItem',
        props: {
            item: {
                required: true,
                type: Object
            }
        },
        methods: {
            ...mapActions([
                'removeProduct'
            ])
        }
    }
</script>

<style lang="sass" scoped>
    .cart-item {
        position: relative;
        text-align: left;

        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        min-height: 90px;
        padding: 5px 10px;

        &__image {
            flex: 1;
        }

        &__content {
            flex: 3;

            display: flex;
            flex-flow: column nowrap;

            margin: 0 15px;
            overflow: hidden;
        }

        &__price {
            flex: 1;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__content, &__price {
            white-space: normal;
            font-size: 0.9rem;
            font-weight: bold;
        }

        &__remove {
            flex: 0 0 35px;

            display: flex;
            justify-content: center;

            & i {
                width: 34px;
                height: 34px;
                justify-content: center;

                padding: 5px;
                background-color: #f2f2f2;
                border-radius: 50%;

                cursor: pointer;

                transition: background-color .4s;

                &:hover {
                    background-color: #d4d2d2;
                }
            }
        }
    }
</style>