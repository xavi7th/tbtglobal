<!doctype html>
<html lang="{{ app()->getLocale() }}">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="robots" content="noindex,nofollow">
        <title>{{ env('APP_TITLE') }}</title>
        <link id="stylesheet" href="{{ mix('css/dashboard-app.css') }}">
        <noscript>
            <link rel="stylesheet" href="{{ mix('css/dashboard-app.css') }}"></noscript> @yield('customCSS')
    </head>

    <body>
        @include('sweetalert::alert')
        @yield('contents')

        <script src="{{ mix('js/dashboard-app.js') }}"></script>

        <script>
            document.querySelector( '#stylesheet' ).setAttribute( 'rel', 'stylesheet' );

        </script>
        @yield('customJS')
    </body>

</html>
