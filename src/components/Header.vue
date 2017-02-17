<template>
    <md-toolbar>
        <md-button @click.native="toggleSidebar">
            <md-icon>menu</md-icon>
        </md-button>

        <h1 class="md-title">Filter</h1>

        <span style="flex: 1"></span>

        <md-input-container>
            <md-input v-model="term" @change="searchByTerm"></md-input>
            <md-icon>search</md-icon>
        </md-input-container>
        
    </md-toolbar>
</template>

<script>
    import {debounce} from '../util'

    export default {
        name: 'Header',
        data () {
            return {
                term: ''
            }
        },
        methods: {
            toggleSidebar () {
                return this.$store.dispatch('toggle', 'sidebar')
            },
            searchByTerm () {
                debounce(() => {
                    this.$store.dispatch('searchByTerm', this.term)
                }, 300)()
            }
        }
    }
</script>

<style lang="sass" scoped>
    .md-theme-default {
        .md-toolbar {
            padding: 0 15px;
        }
        
        .md-input-container {
            width: 150px;

            & {
                .md-icon {
                    &:not(.md-icon-delete):after {
                        background: none;
                    }
                }
            }
        }
    }
</style>
