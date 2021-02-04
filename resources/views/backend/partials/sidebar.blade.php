<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <a href="{{route('index')}}"> <img alt="image" src="{{url('assets/backend/img/logo.png')}}" class="header-logo" /> <span class="logo-name">itFactory</span>
            </a>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-header">Main</li>

            <li class="dropdown @if(Request::segment(1) == 'admin' && Request::segment(2) == null) active @endif">
                <a href="{{route('index')}}" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
            </li>

            <li class="dropdown @if(Request::segment(2) == 'news-publish' || Request::segment(2) == 'news-manage' || Request::segment(2) == 'news-trash')) active @endif">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i
      data-feather="layout"></i><span>News</span></a>
                <ul class="dropdown-menu">

                    <li class="@if(Request::segment(2) == 'news-publish') active @endif"><a class="nav-link" href="{{route('news_form')}}">Publish News</a></li>
                    <li class="@if(Request::segment(2) == 'news-manage') active @endif"><a class="nav-link" href="{{route('news_all')}}">Manage News</a></li>
                    <li class="@if(Request::segment(2) == 'news-trash') active @endif"><a class="nav-link" href="{{route('news_trash')}}">Trash Bin</a></li>

                </ul>
            </li>
            <li class="dropdown @if(Request::segment(2) == 'category-publish' || Request::segment(2) == 'category-manage') active @endif">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i data-feather="command"></i><span>Category</span></a>
                <ul class="dropdown-menu">
                    <li class="@if(Request::segment(2) == 'category-publish') active @endif"><a class="nav-link" href="{{route('category_form')}}">Add Catrgoty</a></li>
                    <li class="@if(Request::segment(2) == 'category-manage') active @endif"><a class="nav-link" href="{{route('category_all')}}">Manage Category</a></li>

                </ul>
            </li>

            <li class="menu-header">Media</li>

            <li class="dropdown @if(Request::segment(2) == 'gallery') active @endif">
                <a href="{{route('gallery_all')}}" class="nav-link"><i data-feather="image"></i><span>Gallery</span></a>
            </li>

            <li class="dropdown @if(Request::segment(2) == 'video') active @endif">
                <a href="{{route('video_all')}}" class="nav-link"><i data-feather="video"></i><span>Videos</span></a>
            </li>

            <li class="dropdown @if(Request::segment(2) == 'filemanager') active @endif">
                <a href="{{route('filemanager_all')}}" class="nav-link"><i data-feather="folder"></i><span>File Manager</span></a>
            </li>



            <li class="menu-header">Extras</li>

            <li class="dropdown">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i data-feather="settings"></i><span>Settings
      </span></a>
                <ul class="dropdown-menu">


                    <li><a class="nav-link" href="alert">Search Engine</a></li>
                    <li><a class="nav-link" href="badge">Google Ads</a></li>
                    <li><a class="nav-link" href="breadcrumb">Site Config</a></li>
                    <li><a class="nav-link" href="breadcrumb">Site Config</a></li>

                </ul>
            </li>

            <li class="dropdown">
                <a href="{{url('/')}}" class="nav-link"><i data-feather="link"></i><span>Visit Frontend</span></a>
            </li>



        </ul>
    </aside>
</div>
