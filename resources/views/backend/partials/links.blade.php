

 @if (Request::segment('1') == 'news-add' || Request::segment('1') == 'news-edit')


  <!-- General CSS Files -->
  <link rel="stylesheet" href="assets/backend/css/app.min.css">
  <link rel="stylesheet" href="assets/backend/bundles/summernote/summernote-bs4.css">
  <link rel="stylesheet" href="assets/backend/bundles/jquery-selectric/selectric.css">
  <link rel="stylesheet" href="assets/backend/bundles/bootstrap-tagsinput/dist/bootstrap-tagsinput.css">
  <!-- Template CSS -->
  <link rel="stylesheet" href="assets/backend/css/style.css">
  <link rel="stylesheet" href="assets/backend/css/components.css">
  <!-- Custom style CSS -->
  <link rel="stylesheet" href="assets/backend/css/custom.css">
  <link rel='shortcut icon' type='image/x-icon' href='assets/img/favicon.ico' />


@else

  <!-- General CSS Files -->
  <link rel="stylesheet" href="assets/backend/css/app.min.css">
  <!-- Template CSS -->
  <link rel="stylesheet" href="assets/backend/css/style.css">
  <link rel="stylesheet" href="assets/backend/css/components.css">
  <!-- Custom style CSS -->
  <link rel="stylesheet" href="assets/backend/css/custom.css">
  <link rel='shortcut icon' type='image/x-icon' href='assets/backend/img/favicon.ico' />





@endif


