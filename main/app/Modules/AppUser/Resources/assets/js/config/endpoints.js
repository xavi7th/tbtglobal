// import { mix } from 'laravel-mix';
//
// if (mix.inProduction()) {
//     const domain = 'https://playground.fastplay24.com/admin/api/';
// }
// else{
//   // const domain = 'http://localhost:3000/tcom01/agents/api/';
//   const domain = 'https://playground.fastplay24.com/admin/api/';
// }

export const apiDomain = 'http://localhost:8000/dashboard/api';

// End Points

/**
 *
 * @param {string} url
 */
export const rootUrl = ( url ) => '/dashboard/' + ( url || '' );
export const apiRootUrl = ( url ) => ( apiDomain + ( url || '' ) );
export const httpUserApiRootUrl = ( url ) => ( apiDomain + 'dashboard/api/' + ( url || '' ) );
export const httpAdminApiRootUrl = ( url ) => ( apiDomain + 'admin/api/' + ( url || '' ) );

export const dashboardRootUrl = rootUrl();
export const userProfile = rootUrl( 'profile' );
export const pageNotFound = rootUrl( 'page-not-found' );


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
