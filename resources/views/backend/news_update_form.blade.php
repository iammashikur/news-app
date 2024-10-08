@extends('backend.partials.stracture')
@section('main')



<!-- Main Content -->
<div class="main-content">
    <section class="section">
        <div class="section-body">
            <div class="row">
                <div class="col-12">


                    <div class="row">

                        <div class="col-lg-8 col-12">



                            @if(Session::has('success'))

                            <div class="alert alert-success mb-4">
                                {{Session::get('success') }}
                              </div>
                            @endif

                            <div class="card">


                                <div class="card-header">
                                    Publish News
                                </div>


                                <div class="card-body">





                                    <form method="POST" {{ route('news_update' , ['id' => $news->id]) }}>


                                        @csrf


                                        <div class="form-group">
                                            <label for="">Title</label>
                                            <input type="text" class="form-control" name="title" id="" aria-describedby="helpId"
                                                value="{{$news->title}}" required>

                                        </div>


                                        <div class="form-group">
                                            <label for="">Category</label>
                                            <select class="form-control selectric" name="category_id" required>

                                                @foreach (App\Categories::all() as $category)
                                                <option value="{{$category->id}}" @if($category->id == $news->category_id) selected @endif>{{$category->name}}</option>
                                                @endforeach

                                            </select>
                                        </div>


                                        <div class="form-group">
                                            <label for="">Content</label>
                                            <textarea class="summernote" name="content" required>{{$news->content}}</textarea>
                                        </div>


                                        <div class="form-group">



                                            <label for="">News Image</label>

                                            <div class="form-control-file mb-4">
                                                <a class="btn btn-success btn-sm text-white" data-toggle="modal"
                                                    data-target="#modelId" id="image-select"> <i class="fas fa-image    "></i> Select File </a> From
                                                Media Gallery
                                            </div>

                                            <img id="news-image" width="200px" src="@if($news->image !== null) {{url($news->image)}} @endif">

                                            <input id="form-image" type="hidden" name="image" value="@if($news->image !== null) {{url($news->image)}} @endif">

                                        </div>

                                        <div class="form-group">
                                            <label for="">Caption</label>
                                            <input type="text"
                                              class="form-control" name="caption" id="" value="{{$news->caption}}">

                                          </div>

                                          <div class="form-group">
                                            <label for="">News Source</label>
                                            <input type="text"
                                              class="form-control" name="source" id="" value="{{$news->source}}" required>

                                          </div>


                                        <div class="form-group">
                                            <label for="">Short Description</label>
                                            <textarea name="description" type="text" class="form-control">{{$news->description}}</textarea>
                                        </div>




                                        <div class="form-group">
                                            <label for="">Tags</label>
                                            <input name="tags" type="text" class="form-control inputtags" value="{{$news->tags}}">
                                        </div>





                                        <div class="form-check form-check-inline mb-4">
                                            <label class="form-check-label">
                                                <input @if ($news->main_lead == 1) checked @endif class="form-check-input" type="checkbox" name="main_lead" id="" value="1"> Main Lead
                                            </label>
                                            <label class="form-check-label">
                                                <input @if ($news->sub_lead == 1) checked @endif class="form-check-input" type="checkbox" name="sub_lead" id="" value="1"> Sub Lead
                                            </label>

                                        </div>



                                        <div class="form-group">
                                            <label for="">Status</label>
                                            <select class="form-control selectric" name="status" required>

                                                <option value="published" @if ($news->status == 'published') selected @endif>Publish</option>
                                                <option value="drafted" @if ($news->status == 'drafted') selected @endif>Draft</option>

                                            </select>
                                        </div>


                                        <div class="form-group">

                                            <button type="submit" class="btn btn-primary"> <i class="fas fa-save    "></i> Save</button>

                                        </div>


                                    </form>



                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    </section>

</div>




<!-- Modal -->
<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Gallery</h5>

                <!-- Actual search box -->
                <div class="form-group has-search">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input name="serach" id="serach" type="text" class="form-control" placeholder="Search">
                </div>



            </div>
            <div class="modal-body">

                <div class="row" id="table_data">



                </div>

            </div>
            <div class="modal-footer d-block">

                <form id="formId" method="POST" enctype="multipart/form-data" action="<?= route('filemanager.upload') ?>">

                    @csrf

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
                        </div>
                        <div class="custom-file">
                            <input name="image" type="file" class="custom-file-input" id="inputGroupFile"
                                aria-describedby="inputGroupFileAddon01">
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                        </div>
                    </div>


                    <div class="form-group">

                      <input type="text" class="form-control" name="name" id="file-name" aria-describedby="helpId" placeholder="Image Name">

                    </div>


                    <div class="progress mb-4" id="image-progress">
                        <div class="progress-bar"
                             role="progressbar" aria-valuemin="0"
                             aria-valuemax="100">

                        </div>
                    </div>


                    <div class="form-group">

                        <button class="btn btn-sm btn-danger float-left" type="submit"> <i class="fas fa-upload    "></i> Upload</button>

                        <button  type="button" class="btn btn-sm btn-danger float-right ml-2" data-dismiss="modal">Close</button>

                        <button id="custom_button" type="button" class="btn btn-sm btn-primary float-right">Select</button>


                    </div>





                </form>










            </div>
        </div>
    </div>
</div>





@endsection
