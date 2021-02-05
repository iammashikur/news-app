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
                                   Add Video
                                </div>


                                <div class="card-body">

                                <form method="POST" {{ route('video_store') }}>


                                        @csrf




                                        <div class="form-group">
                                            <label for="">Video Link (YouTube)</label>
                                            <input type="text" class="form-control" name="link" id="" aria-describedby="helpId"
                                                placeholder="Link" required>
                                        </div>


                                    <div class="form-group">
                                        <label for="">Video Title</label>
                                        <input type="text" class="form-control" name="title" id="" aria-describedby="helpId"
                                            placeholder="title" required>

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




@endsection
