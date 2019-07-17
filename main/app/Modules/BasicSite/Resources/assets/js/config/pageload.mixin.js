export default {
    mounted() {
        this.$emit( "page-loaded" );
    },

    beforeDestroy() {
        this.$unloadScript( "/js/main.js" );
    }
}
