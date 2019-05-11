// import { mix } from 'laravel-mix';
//
// if (mix.inProduction()) {
//     const domain = 'https://playground.fastplay24.com/admin/api/';
// }
// else{
//   // const domain = 'http://localhost:3000/tcom01/agents/api/';
//   const domain = 'https://playground.fastplay24.com/admin/api/';
// }

export const apiDomain = 'http://localhost:8000/admin/api';

// End Points

/**
 *
 * @param {string} url
 */
export const rootUrl = (url) => '/' + (url || '');
export const apiRootUrl = (url) => (apiDomain + (url || ''));
export const httpUserApiRootUrl = (url) => (apiDomain + 'admin/api/' + (url || ''));


export const siteRootUrl = rootUrl();
export const siteWelcome = rootUrl('welcome');


export const logout = (msg = null) => {
    if (!msg) {
        msg = "Logging you out....";
    }
    swal(msg, {
        buttons: false,
    });
    axios.post(rootUrl('logout')).then(rsp => {
        location.reload();
    });
};