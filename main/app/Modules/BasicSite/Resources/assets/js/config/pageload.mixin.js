export default {
    mounted() {
        this.$nextTick( () => {
            this.$emit( "page-loaded" );
        } )
    },

    beforeDestroy() {
        this.$unloadScript( "/js/main.js" );
    },
    activated() {
        this.$nextTick( () => {
            this.$emit( "page-loaded" );
        } )
    },

    deactivated() {
        this.$unloadScript( "/js/main.js" );
    },
}
