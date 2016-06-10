<template lang="jade">
    header.mdl-layout__header.mdl-color--indigo-500.mdl-color-text--white
        .mdl-layout__header-row
            span.mdl-layout-title Home
            .mdl-layout-spacer
            .mdl-textfield.mdl-js-textfield.mdl-textfield--expandable
                label.mdl-button.mdl-js-button.mdl-button--icon(for="search")
                    i.material-icons search
                .mdl-textfield__expandable-holder.mdl-color-text--white
                    input.mdl-textfield__input(type="text" id="search")
                    label.mdl-textfield__label.mdl-color--white(for="search") Enter your query...
            button.mdl-button.mdl-js-button.mdl-js-ripple-effect.mdl-button--icon(
                id="hdrbtn"
            )
            ul.mdl-menu.mdl-js-menu.mdl-js-ripple-effect.mdl-menu--bottom-right(
                for="hdrbtn"
            )
                li.mdl-menu__item About
                li.mdl-menu__item Contact
                li.mdl-menu__item Info
</template>

<script>
    export default {
        ready: function() {

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
