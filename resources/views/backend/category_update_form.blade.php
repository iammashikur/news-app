e4wtwert
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
                                   Add Category
                                </div>


                                <div class="card-body">


                                <form method="POST" action="{{ route('category_update_id', ['id' => $category->id]) }}">


                                        @csrf


                                    <div class="form-group">
                                        <label for="">Category Name</label>
                                        <input name="name" type="text" class="form-control" name="title" id="" aria-describedby="helpId"
                                            value="{{$category->name}}" required>

                                    </div>

                                    <div class="form-group">
                                        <label for="">Menu Order</label>
                                        <input name="order" type="number" class="form-control" name="title" id="" aria-describedby="helpId"
                                            value="{{$category->order}}" required>

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
