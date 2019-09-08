window._ = require( 'lodash' )
window.axios = require( 'axios' )
window.swal = require( 'sweetalert2' )

window.Toast = swal.mixin( {
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000000,
    type: "success"
} );

window.BlockToast = swal.mixin( {
    showConfirmButton: false,
    showCloseButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false
} );

window.swalWithBootstrapButtons = swal.mixin( {
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
} );

window.axios.defaults.headers.common[ 'X-Requested-With' ] = 'XMLHttpRequest'

window.axios.interceptors.response.use(
    res => {
        return res
    },
    err => {
        if ( err.response ) {
            // console.log( err.response )
            if ( err.response.status == 422 ) {
                var rawErrors = err.response.data.errors || err.response.data.message;

                if ( _.isString( rawErrors ) ) {
                    var errs = rawErrors
                } else if ( _.size( rawErrors ) == 1 ) {
                    var errs = _.reduce( rawErrors, function ( val, n ) {
                        return val.join( '<br>' ) + '<br>' + n
                    } )[ 0 ];
                } else {
                    var errs = _.reduce( rawErrors, function ( val, n ) {
                        return val.join( '<br>' ) + '<br>' + n
                    } );
                }

                swal.fire( {
                    html: errs,
                    type: 'warning',
                } )
                return
            } else if ( err.response.status == 500 && err.response.data == 'Expired token' ) {
                swal.fire( {
                    title: 'Session timed out',
                    text: 'You have been logged out automatically to protect your account',
                    type: 'info',
                } ).then( () => {
                    location.reload()
                } )
            } else if ( err.response.status == 404 ) {
                swal.fire( {
                    title: '404',
                    text: 'Resource Not Found',
                    type: 'info',
                } )
            } else if ( err.response.status == 403 ) {
                swal.fire( {
                    title: 'Forbidden',
                    text: 'Action is forbidden to user',
                    type: 'error',
                } )
            } else if ( err.response.status == 401 ) {
                swal.fire( {
                    title: 'Access Denied',
                    text: 'Access to requested resource is denied',
                    type: 'error',
                } ).then( () => {
                    location.reload()
                } )
            } else if ( err.response.status == 429 ) {
                swal.fire( {
                    title: 'Too many attempts',
                    text: 'You have made too many attempts. Try again later.',
                    type: 'error',
                } )
            } else {
                return Promise.reject( err )
            }
        } else if ( err.request ) {
            console.log( err.request )

            if ( err.request.status == 422 ) {
                swal.fire( {
                    title: err.request.data.error,
                    html: err.request.data.message,
                    type: 'warning',
                } )
            } else {
                return Promise.reject( err )
            }
        } else {
            console.log( err )
            swal.fire( 'Request Error', `${err.message}`, 'error' )
        }
    }
)

let token = document.head.querySelector( 'meta[name="csrf-token"]' )
if ( token ) {
    window.axios.defaults.headers.common[ 'X-CSRF-TOKEN' ] = token.content
} else {
    console.error( 'CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token' )
}
