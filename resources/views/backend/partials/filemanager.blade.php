

@foreach ($data as $files)

<div class="col-3 mb-4">
    <div class="custom-control custom-radio image-checkbox">
        <input type="radio" class="custom-control-input" id="{{$files->id}}" name="image" value="{{$files->file_path}}">
        <label class="custom-control-label" for="{{$files->id}}">
            <img src="{{ str_replace('news_image/', 'news_image/thumb/', $files->file_path) }}" alt="{{$files->file_name}}" class="w-100 file-manager-image">
        </label>
    </div>
</div>

@endforeach

@if($data->count() == 0)

<div class="col-12">

    <div class="alert alert-light alert-has-icon">
        <div class="alert-icon"><i class="far fa-sad-tear"></i></div>
        <div class="alert-body">
            <div class="alert-title">Sorry !</div>
            No Image Found..
        </div>
    </div>

</div>





@endif


<div class="col-12 mt-4">
    <nav aria-label="Page navigation">
        {!! $data->links() !!}
    </nav>
</div>

<script>

$('input[name=image]').change(function(){
var value = $( 'input[name=image]:checked' ).val();

$('#select').removeAttr('disabled');;


});
</script>
