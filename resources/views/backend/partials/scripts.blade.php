@if (Request::segment('2') == 'news-manage')

@endif

@if (Request::segment('2') == 'news-publish' || Request::segment('2') == 'news-update' || Request::segment('2') ==
'gallery-add'|| Request::segment('2') == 'gallery-update' || Request::segment('2') == 'files')

<!-- General JS Scripts -->
<script src="{{url('/')}}/assets/backend/js/app.min.js"></script>
<!-- JS Libraies -->
<script src="{{url('/')}}/assets/backend/bundles/summernote/summernote-bs4.js"></script>
<script src="{{url('/')}}/assets/backend/bundles/jquery-selectric/jquery.selectric.min.js"></script>
<script src="{{url('/')}}/assets/backend/bundles/upload-preview/assets/js/jquery.uploadPreview.min.js"></script>
<script src="{{url('/')}}/assets/backend/bundles/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js"></script>
<!-- Page Specific JS File -->
<script src="{{url('/')}}/assets/backend/js/page/create-post.js"></script>


@if (Request::segment('2') == 'files')

<script>
    $('#custom_button').on('click', function () {

        var value = $('input[name=image]:checked').attr('id');

        $.ajax({

            url: "<?= route('files_delete') ?>?id=" + value,

            success: function (data) {



                if (data.status == 'deleted') {
                    var query = $('#serach').val();
                    fetch_data(1, query);
                    $("#custom_button").attr("disabled", true);

                    $('#alert').addClass('d-block show');


                    setTimeout(function () {
                        $('#alert').removeClass('d-block show');
                        $('#alert').addClass('d-none');
                    }, 2000);





                }

            }
        });



    });

</script>

@endif


<script>
    $('#custom_button').on('click', function () {

        var value = $('input[name=image]:checked').val();
        $('#post-image').attr('src', '<?= url('/').'/' ?>' + value);
        $('#form-image').val(value);
        $('#post-image').addClass('file-manager-image');
        $('#modelId').modal('toggle');


    });


    $('#formId').on('submit', (function (e) {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });


        e.preventDefault();
        var formData = new FormData(this);
        $.ajax({
            enctype: 'multipart/form-data',
            type: 'POST',
            xhr: function () {
                var xhr = new window.XMLHttpRequest();
                xhr.upload.addEventListener("progress", function (evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);
                        console.log(percentComplete);
                        $('.progress-bar').css('width', percentComplete + '%');
                        if (percentComplete === 100) {
                            console.log('completed 100%')
                            setTimeout(function () {
                                $('.progress-bar').css('width', '0%');
                            }, 2000);

                        }
                    }
                }, false);
                return xhr;
            },
            url: "<?= route('filemanager.upload') ?>",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {




                if (data.img_status == 'uploaded' && data.name_status == 'exist') {
                    var query = $('#serach').val();
                    fetch_data(1, query);
                    $("#custom_button").attr("disabled", true);

                    $('#inputGroupFile').val(null);
                    $('.custom-file-label').html('Choose file');
                    $('#file-name').val(null);
                }

                if (data.img_status == 'notselected') {
                    $('.custom-file-label').html('Please select an image !');
                }

                if (data.name_status == 'missing') {
                    $('#file-name').attr("placeholder", "File name required !");
                }



            },
            error: function (data) {
                console.log(data);
            }
        });
    }));


    $('#inputGroupFile').on('change', function () {
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName);



    });

    // Fetch Files
    $('#image-select').click(function () {

        var query = $('#serach').val();
        fetch_data(1, query);

        $(document).on('click', '.pagination a', function (event) {
            event.preventDefault();

            var query = $('#serach').val();
            var page = $(this).attr('href').split('page=')[1];
            fetch_data(page, query);
        });

        $('#serach').on('keyup', function () {

            var query = $('#serach').val();
            fetch_data(1, query);

        });


    });


    $(document).ready(function () {
        var query = $('#serach').val();
        fetch_data(1, query);

        $(document).on('click', '.pagination a', function (event) {
            event.preventDefault();

            var query = $('#serach').val();
            var page = $(this).attr('href').split('page=')[1];
            fetch_data(page, query);
        });

        $('#serach').on('keyup', function () {

            var query = $('#serach').val();
            fetch_data(1, query);

        });
    });




    function fetch_data(page, query) {

        $.ajax({


            url: "<?= route('filemanager.images') ?>?page=" + page + "&query=" + query,

            success: function (data) {

                $('#table_data').html(data);
                $("#custom_button").attr("disabled", true);

            }
        });

    }

</script>




<!-- Template JS File -->
<script src="{{url('/')}}/assets/backend/js/scripts.js"></script>
<!-- Custom JS File -->
<script src="{{url('/')}}/assets/backend/js/custom.js"></script>


@else

<!-- General JS Scripts -->
<script src="{{url('/')}}/assets/backend/js/app.min.js"></script>
<!-- JS Libraies -->


<!-- Template JS File -->
<script src="{{url('/')}}/assets/backend/js/scripts.js"></script>
<!-- Custom JS File -->
<script src="{{url('/')}}/assets/backend/js/custom.js"></script>
@endif
