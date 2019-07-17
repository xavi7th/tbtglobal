export const apiDomain = '/api/';

/**
 *
 * @param {string} url
 */
export const rootUrl = ( url ) => '/' + ( url || '' );
export const apiRootUrl = ( url ) => ( apiDomain + ( url || '' ) );

export const siteRootUrl = rootUrl();
export const siteWelcome = rootUrl( 'welcome' );


export const logout = ( msg = null ) => {
    if ( !msg ) {
        msg = "Logging you out....";
    }
    swal( msg, {
        buttons: false,
    } );
    axios.post( rootUrl( 'logout' ) ).then( rsp => {
        location.reload();
    } );
};
