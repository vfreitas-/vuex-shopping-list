<template>
    <div class="mdl-layout mdl-js-layout mdl-js-layout--fixed-drawer mdl-layout--fixed-header">
        <app-header></app-header>
        <side-panel></side-panel>
        <main class="mdl-layout__content mdl-color--grey-100">
            <product-grid></product-grid>
        </main>
    </div>
</template>

<script>
    import AppHeader from './Header.vue'
    import SidePanel from './SidePanel.vue'
    import ProductGrid from './ProductGrid.vue'

    export default {
        name: 'App',
        components: {
            AppHeader,
            SidePanel,
            ProductGrid
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
</style>
