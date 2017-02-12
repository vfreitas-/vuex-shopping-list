<template>
    <md-toolbar>
        <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
            <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title">Home</h2>
    </md-toolbar>
</template>

<script>
    export default {
        name: 'Header',
        methods: {
            searchByTerm () {
                return this.$store.dispatch('searchByTerm')
            }
        },
        data: function() {
            return {
                term: ''
            }
        }
    }
</script>

<style lang="sass" scoped>
    .mdl-textfield {
        padding: 0px;
        margin-top: 41px;
    }
    .mdl-textfield .mdl-textfield__expandable-holder {
        bottom: 19px;
    }
</style>
