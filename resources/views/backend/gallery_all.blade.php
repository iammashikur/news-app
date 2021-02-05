@extends('backend.partials.stracture')
@section('main')



<div class="main-content" style="min-height: 562px;">
    <section class="section">
      <div class="section-body">

        <div class="row">
          <div class="col-md-8 col-12">
            <div class="card">
              <div class="card-header">
               Gallery
              </div>
              <div class="card-body">

                <div class="float-left">


                    <a class="btn btn-md btn-primary" href="{{route('gallery_form')}}"> <i class="fas fa-plus    "></i> New</a>


                </div>



                <div class="float-right">
                  <form>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search">
                      <div class="input-group-append">
                        <button class="btn btn-primary"><i class="fas fa-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>


                <div class="clearfix mb-3"></div>


                <table class="table table-striped border">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Caption</th>
                            <th class="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($galleries as $item)

                        <tr>

                            <td>
                                <img src="{{url($item->image)}}" alt="" style="width:200px; padding:5px;">
                            </td>
                            <td>{{$item->caption}}</td>
                            <td class="text-right">




                                <a href="{{route('gallery_delete', ['id'=>$item->id])}}" class="btn btn-sm btn-danger text-white"> <i class="fas fa-trash    "></i> Delete</a>
                                <a href="{{route('gallery_update_form', ['id'=>$item->id])}}" class="btn btn-sm btn-primary"> <i class="fas fa-edit    "></i> Edit</a>


                            </td>
                        </tr>

                        @endforeach



                    </tbody>
                </table>


                {{$galleries->links()}}



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>



@endsection
