<template>
    <header class="mdl-layout__header mdl-color--indigo-500 mdl-color-text--white">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Home</span>
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
                    <i class="material-icons">search</i>
                </label>
                <div class="mdl-textfield__expandable-holder mdl-color-text--white">
                    <input class="mdl-textfield__input"
                        type="text"
                        id="search"
                        v-model="term"
                        @keyup="searchByTerm(term)"/>
                    <label class="mdl-textfield__label mdl-color--white" for="search">
                        Enter your query...
                    </label>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
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
