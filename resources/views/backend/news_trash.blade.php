@extends('backend.partials.stracture')
@section('main')



<div class="main-content" style="min-height: 562px;">
    <section class="section">
      <div class="section-body">

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                Trash
              </div>
              <div class="card-body">

                <div class="float-right">
                  <form method="GET" action="{{route('news_search_trash')}}">

                    <div class="input-group">
                      <input name="query" type="text" class="form-control" placeholder="Search">
                      <div class="input-group-append">
                        <button class="btn btn-primary"><i class="fas fa-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>


                <div class="clearfix mb-3"></div>



                <table class="table table-responsive-sm table-striped border">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th width="220px">Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Views</th>
                            <th>Status</th>
                            <th class="text-right" class="text-right" width="200px">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($posts as $post)




                        <tr>
                            <td scope="row"><img src="{{url($post->image)}}" alt="" width="100px"></td>
                            <td>{{$post->title}}</td>
                            <td>{{App\User::find($post->author_id)->name}}</td>
                            <td>{{$post->created_at}}</td>
                            <td>{{$post->views}}</td>
                            <td>{{$post->status}}</td>
                            <td class="text-right">

                                    <a href="{{route('news_delete_id',['id'=>$post->id])}}" class="btn btn-sm btn-danger text-white"> <i class="fas fa-trash    "></i>Delete</a>
                                    <a href="{{route('news_recycle_id',['id'=>$post->id])}}" class="btn btn-sm btn-primary text-white"> <i class="fas fa-sync    "></i> Restore</a>

                            </td>
                        </tr>

                        @endforeach



                    </tbody>
                </table>



                {{$posts->links()}}



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>



@endsection
