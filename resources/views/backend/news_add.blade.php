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

                            <div class="card">

                                <div class="card-body">


                                    <div class="form-group">
                                        <label for="">Title</label>
                                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId"
                                            placeholder="">
                                        <small id="helpId" class="form-text text-muted">Help text</small>
                                    </div>


                                    <div class="form-group">
                                        <label for="">Title</label>
                                        <select class="form-control selectric">
                                            <option selected disabled>-- Select --</option>
                                            <option>Tech</option>
                                            <option>News</option>
                                            <option>Political</option>
                                        </select>
                                    </div>


                                    <div class="form-group">
                                        <label for="">Title</label>
                                        <textarea class="summernote-simple"></textarea>
                                    </div>










                                    <div class="form-group">



                                        <label for="">News Image</label>



                                        <div class="form-control-file mb-4">
                                            <button class="btn btn-success btn-sm" data-toggle="modal"
                                                data-target="#modelId" id="image-select"> Select File </button> From
                                            Media Gallery
                                        </div>

                                        <img id="post-image" width="200px">

                                    </div>



                                    <div class="form-group">
                                        <label for="">Title</label>
                                        <input type="text" class="form-control inputtags">
                                    </div>


                                    <div class="form-group">
                                        <label for="">Status</label>
                                        <select class="form-control selectric">
                                            <option>Publish</option>
                                            <option>Draft</option>
                                            <option>Pending</option>
                                        </select>
                                    </div>


                                    <div class="form-group">

                                        <button class="btn btn-primary">Create Post</button>

                                    </div>











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

                        <button id="select" type="button" class="btn btn-sm btn-primary float-right">Select</button>


                    </div>





                </form>










            </div>
        </div>
    </div>
</div>





@endsection
