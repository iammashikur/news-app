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


                            <form action="{{route('settings_update')}}" method="post" enctype="multipart/form-data">

                                @csrf




                           <div class="card">
                               <div class="card-header">
                                   Site Settings
                               </div>
                               <div class="card-body">
                                <img src="{{ url($settings->logo) }}" width="200px">
                                <div class="form-group">
                                  <label for="">Logo</label>
                                  <input type="file" class="form-control-file" name="logo" id="" aria-describedby="fileHelpId">
                                </div>

                                <img src="{{ url($settings->favicon) }}" width="200px">

                                <div class="form-group">
                                    <label for="">Favicon</label>
                                    <input type="file" class="form-control-file" name="favicon" id="" aria-describedby="fileHelpId">
                                </div>

                               </div>
                           </div>


                           <div class="card">
                            <div class="card-header">
                                SEO Settings
                            </div>
                            <div class="card-body">

                                <div class="form-group">
                                    <label for="">Title</label>
                                    <input type="text"
                                      class="form-control" name="title" id="" aria-describedby="helpId" value="{{$settings->title}}">
                                  </div>

                                  <div class="form-group">
                                    <label for="">Description</label>
                                    <textarea type="text"
                                      class="form-control" name="description" id="" aria-describedby="helpId">{{$settings->description}}</textarea>
                                  </div>

                                  <div class="form-group">
                                    <label for="">Tags</label>
                                    <input type="text"
                                      class="form-control" name="tags" id="" aria-describedby="helpId" value="{{$settings->tags}}">
                                  </div>
                            </div>
                        </div>


                        <div class="card">
                            <div class="card-header">
                                Ads Settings (Google Ads)
                            </div>
                            <div class="card-body">



                                <div class="form-group">
                                    <label for="">Banner Ad</label>
                                    <textarea type="text"
                                      class="form-control" name="banner_ad" id="" aria-describedby="helpId">{{$settings->banner_ad}}</textarea>
                                  </div>



                                  <div class="form-group">
                                    <label for="">Sidebar Ad</label>
                                    <textarea type="text"
                                      class="form-control" name="sidebar_ad" id="" aria-describedby="helpId" >{{$settings->sidebar_ad}}</textarea>
                                  </div>


                                  <div class="form-group">
                                    <label for="">Post Ad</label>
                                    <textarea type="text"
                                      class="form-control" name="post_ad" id="" aria-describedby="helpId">{{$settings->post_ad}}</textarea>
                                  </div>


                                  <div class="form-group">
                                    <label for="">Auto Ads</label>
                                    <textarea type="text"
                                      class="form-control" name="auto_ad" id="" aria-describedby="helpId">{{$settings->auto_ad}}</textarea>
                                  </div>


                            </div>
                        </div>


                        <div class="card">
                            <div class="card-header">
                                Social Settings
                             </div>
                            <div class="card-body">

                                <div class="form-group">
                                    <label for="">Social Share Button</label>
                                    <textarea type="text"
                                      class="form-control" name="share_button" id="" aria-describedby="helpId">{{$settings->share_button}}</textarea>
                                  </div>


                                  <div class="form-group">
                                    <label for="">Facebook Wetget</label>
                                    <textarea type="text"
                                      class="form-control" name="wetget" id="" aria-describedby="helpId">{{$settings->wetget}}</textarea>
                                  </div>

                            </div>
                        </div>


                        <div class="card">

                            <div class="card-body">

                                <button class="btn btn-success" type="submit">
                                    <i class="fas fa-save"></i>
                                    Save</button>


                            </div>
                        </div>


                    </form>






                        </div>
                    </div>




                </div>
            </div>
        </div>
    </section>

</div>




@endsection
