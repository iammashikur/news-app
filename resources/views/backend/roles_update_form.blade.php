roles_form
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
                                    Update User
                                </div>


                                <div class="card-body">

                                <form method="POST" {{ route('roles_update',['id' => $user->id]) }}>


                                        @csrf


                                    <div class="form-group">
                                        <label for="">Name</label>
                                        <input name="name" type="text" class="form-control" id="" value="{{$user->name}}"
                                             required>

                                    </div>

                                    <div class="form-group">
                                        <label for="">Email</label>
                                        <input type="email" class="form-control" name="email" id="" value="{{$user->email}}"
                                             disabled>
                                    </div>


                                    <div class="form-group">
                                      <label for="role">Role</label>
                                      <select class="form-control" name="role" id="role" required="">
                                        <option @if ($user->is_admin == 1) selected @endif value="1">Admin</option>
                                        <option @if ($user->is_admin == 2) selected @endif value="2" >Publisher</option>
                                      </select>
                                    </div>



                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" class="form-control" name="password">
                                    </div>

                                    <div class="form-group">
                                        <label for="">Confirm Password</label>
                                        <input type="password" class="form-control" name="confirm">
                                    </div>


                                    <div class="form-group">

                                        <button type="submit" class="btn btn-primary"> <i class="fas fa-save"></i> Save</button>

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
