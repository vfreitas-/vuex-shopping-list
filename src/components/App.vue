<template>
    <div>
        <app-header></app-header>
        <side-panel></side-panel>
        <main class="mdl-layout__content mdl-color--grey-100">
            <product-grid></product-grid>
        </main>
        <cart></cart>
    </div>
</template>

<script>
    import AppHeader from './Header.vue'
    import SidePanel from './SidePanel.vue'
    import ProductGrid from './ProductGrid.vue'
    import Cart from './Cart.vue'

    export default {
        name: 'App',
        components: {
            AppHeader,
            SidePanel,
            ProductGrid,
            Cart
        }
    }
</script>

<style lang="sass">
    *, *:after, *:before {
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Roboto', 'Helvetica', sans-serif;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
