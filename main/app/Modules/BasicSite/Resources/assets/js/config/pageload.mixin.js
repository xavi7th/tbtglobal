export default {
    computed:{
      app : () => window.app
    },
    mounted() {
        this.$nextTick( () => {
            this.$emit( "page-loaded" );
        } )
    },

    beforeDestroy() {
        this.$unloadScript( "/js/main.js" );
        console.log( 'destroying' );

        vueEventBus.$off( "clients-loaded" );
        vueEventBus.$off( "projects-loaded" );
        vueEventBus.$off( "mainjs-loaded" );
        vueEventBus.$off( "slide-loaded" );

    },
    activated() {
        this.$nextTick( () => {
            this.$emit( "page-loaded" );
        } )
    },

    deactivated() {
        this.$unloadScript( "/js/main.js" );
        console.log( 'deactivating' );
    },
}
