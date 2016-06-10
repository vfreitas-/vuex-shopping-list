<template lang="jade">
    header.mdl-layout__header.mdl-color--indigo-500.mdl-color-text--white
        .mdl-layout__header-row
            span.mdl-layout-title Home
            .mdl-layout-spacer
            .mdl-textfield.mdl-js-textfield.mdl-textfield--expandable
                label.mdl-button.mdl-js-button.mdl-button--icon(for="search")
                    i.material-icons search
                .mdl-textfield__expandable-holder.mdl-color-text--white
                    input.mdl-textfield__input(
                        type="text"
                        id="search"
                        v-model="term"
                        @keyup="searchByTerm(term) | debounce 300"
                    )
                    label.mdl-textfield__label.mdl-color--white(for="search") Enter your query...
</template>

<script>
    import {searchByTerm} from '_vuex/actions/products';

    export default {
        vuex: {
            actions: {
                searchByTerm
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
