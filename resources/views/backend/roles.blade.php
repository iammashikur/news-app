@extends('backend.partials.stracture')
@section('main')



<div class="main-content" style="min-height: 562px;">
    <section class="section">
      <div class="section-body">

        <div class="row">
          <div class="col-md-8 col-12">
            <div class="card">
              <div class="card-header">
               Roles & Users
              </div>
              <div class="card-body">

                <div class="float-left">


                    <a class="btn btn-md btn-primary" href="{{route('roles_form')}}"> <i class="fas fa-plus    "></i> New</a>


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
                            <th>Category Name</th>
                            <th>Menu Order</th>
                            <th>Type</th>
                            <th class="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        @foreach ($users as $user)



                        <tr>




                            <td>{{$user->name}}</td>
                            <td>{{$user->email}}</td>
                            <td>
                                @if ($user->is_admin == 1)
                                    Admin
                                @elseif($user->is_admin == 2)
                                    Publisher
                                @endif
                            </td>
                            <td class="text-right">
                                @if (Auth::user()->id !== $user->id)
                                <a  href="{{route('roles_delete', ['id'=>$user->id])}}" class="btn btn-sm btn-danger text-white"> <i class="fas fa-trash    "></i> Delete</a>
                                <a href="{{route('roles_update_form', ['id'=>$user->id])}}" class="btn btn-sm btn-primary"> <i class="fas fa-edit    "></i> Update</a>
                                @else
                                <button class="btn btn-sm btn-danger text-white" disabled><i class="fas fa-trash"></i> Delete</button>
                                <button class="btn btn-sm btn-primary" disabled><i class="fas fa-edit"></i> Update</button>
                                @endif
                            </td>
                        </tr>





                        @endforeach



                    </tbody>
                </table>


                {{$users->links()}}



              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>



@endsection
