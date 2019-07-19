export const apiDomain = '/admin/api/';
/**
 *
 * @param {string} url
 */
export const rootUrl = ( url ) => '/admin/' + ( url || '' );
export const apiRootUrl = ( url ) => ( apiDomain + ( url || '' ) );

export const siteRootUrl = rootUrl();
export const createSlider = apiRootUrl( 'slider/create' );
export const getSliders = apiRootUrl( 'sliders' );
export const deleteSlider = id => apiRootUrl( `slider/${id}/delete` );
export const createProject = apiRootUrl( 'project/create' );
export const getProjects = apiRootUrl( 'projects' );
export const deleteProject = id => apiRootUrl( `project/${id}/delete` );
export const createTeamMember = apiRootUrl( 'team-member/create' );
export const getTeamMembers = apiRootUrl( 'team-members' );
export const deleteTeamMember = id => apiRootUrl( `team-member/${id}/delete` );
export const createClient = apiRootUrl( 'client/create' );
export const getClients = apiRootUrl( 'clients' );
export const deleteClient = id => apiRootUrl( `client/${id}/delete` );



export const logout = ( msg = null ) => {
    if ( !msg ) {
        msg = "Logging you out....";
    }
    swal.fire( {
        text: msg,
        showConfirmButton: false,
    } );
    axios.post( rootUrl( 'logout' ) ).then( rsp => {
        location.reload();
    } );
};
