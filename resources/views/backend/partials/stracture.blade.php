<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
  <title>Otika - Admin Dashboard Template</title>

  @include('backend.partials.links')

</head>

<body>
  <div class="loader"></div>
  <div id="app">
    <div class="main-wrapper main-wrapper-1">

      @include('backend.partials.header')
      @include('backend.partials.sidebar')
      @yield('main')
      @include('backend.partials.footer')


    </div>
  </div>
  @include('sweetalert::alert')
  @include('backend.partials.scripts')
</body>

</html>
