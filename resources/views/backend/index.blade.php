@extends('backend.partials.stracture')
@section('main')



<div class="main-content" style="min-height: 100vh;">
    <section class="section">
        <div class="row mb-3">


            <div class="col-xl-3 col-lg-6">
              <div class="card dash-text dash-card">
                <div class="card-block">
                  <div class="rotate">
                    <i data-feather="activity"></i>
                  </div>
                  <p>Views</p>
                  <h2>0</h2>
                </div>
              </div>
            </div>


            <div class="col-xl-3 col-lg-6">
              <div class="card dash-text dash-card">
                <div class="card-block">
                  <div class="rotate">
                    <i data-feather="layout"></i>
                  </div>
                  <p>News</p>
                  <h2>
                      {{ App\Posts::count() }}
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card dash-text dash-card">
                <div class="card-block">
                  <div class="rotate">
                    <i data-feather="command"></i>
                  </div>
                  <p>Categories</p>
                  <h2>
                    {{ App\Categories::count() }}
                  </h2>
                </div>
              </div>
            </div>

          </div>
    </section>
</div>


@endsection
