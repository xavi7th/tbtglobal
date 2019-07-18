export default {
    mounted() {
        this.$emit( "page-loaded" );
    },

    beforeDestroy() {
        this.$unloadScript( "/js/main.js" );
    },
    activated() {
        this.$emit( "page-loaded" );
    },

    deactivated() {
        this.$unloadScript( "/js/main.js" );
    },
}
