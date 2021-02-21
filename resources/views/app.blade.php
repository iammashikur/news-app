<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ App\Settings::find(1)->title }}</title>
    <!-- Styles -->

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/bootswatch.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

    <link rel="shortcut icon" href="{{url(App\Settings::find(1)->favicon)}}" type="image/x-icon">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" integrity="sha384-O8whS3fhG2OnA5Kas0Y9l3cfpmYjapjI0E4theH4iuMD+pLhbf6JI0jIMfYcK3yZ" crossorigin="anonymous">


    <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=602d315b4f31370012544885&product=sop' async='async'></script>

    <script>

    // Meta Data
    const Settings = {

        logo         : '<?= url(App\Settings::find(1)->logo) ?>',
        favicon      : '<?= url(App\Settings::find(1)->favicon) ?>',
        title        : '<?= App\Settings::find(1)->title ?>',
        description  : '<?= App\Settings::find(1)->description ?>',
        tags         : '<?= App\Settings::find(1)->tags ?>',
        banner_ad    : '<?= App\Settings::find(1)->banner_ad ?>',
        sidebar_ad   : '<?= App\Settings::find(1)->sidebar_ad ?>',
        post_ad      : '<?= App\Settings::find(1)->post_ad ?>',
        auto_ad      : '<?= App\Settings::find(1)->auto_ad ?>',
        share_button : '<?= App\Settings::find(1)->share_button ?>',
        wetget       : '<?= App\Settings::find(1)->wetget ?>',

    }

    window.localStorage.setItem('Settings', JSON.stringify(Settings));

    // Video Slider
    window.localStorage.setItem('VideoOne',   JSON.stringify(<?= App\Videos::skip(0)->take(4)->get() ?>));
    window.localStorage.setItem('VideoTwo',   JSON.stringify(<?= App\Videos::skip(4)->take(4)->get() ?>));
    window.localStorage.setItem('VideoThree', JSON.stringify(<?=  App\Videos::skip(8)->take(4)->get() ?>));

    // Photo Slider
    window.localStorage.setItem('PhotoOne',   JSON.stringify(<?= App\Galleries::skip(0)->take(4)->get() ?>));
    window.localStorage.setItem('PhotoTwo',   JSON.stringify(<?= App\Galleries::skip(4)->take(4)->get() ?>));
    window.localStorage.setItem('PhotoThree', JSON.stringify(<?=  App\Galleries::skip(8)->take(4)->get() ?>));


    // Menu
    window.localStorage.setItem('PreMenu',   JSON.stringify(<?= $premenu  ?>));
    window.localStorage.setItem('MainMenu',  JSON.stringify(<?= $mainmenu ?>));
    window.localStorage.setItem('PostMenu',  JSON.stringify(<?= $postmenu ?>));


    </script>


</head>

<body>

    <!-- React root DOM -->
    <div id="index">


    </div>

    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

</body>
</html>
