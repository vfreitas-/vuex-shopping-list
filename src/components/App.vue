<template lang="jade">
    .mdl-layout.mdl-js-layout.mdl-layout--fixed-drawer.mdl-layout--fixed-header
        theader
        side-panel
        main.mdl-layout__content.mdl-color--grey-100
            products


</template>

<script>
    import Header from './Header.vue';
    import SidePanel from './SidePanel.vue';
    import ProductGrid from './ProductGrid.vue';

    export default {
        ready: function() {

        },
        components: {
            'theader': Header,
            'side-panel': SidePanel,
            'products': ProductGrid
        }
    }
</script>

<style lang="sass">
    html, body {
        font-family: 'Roboto', 'Helvetica', sans-serif;
    }
</style>
