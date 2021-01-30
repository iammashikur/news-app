<div class="main-sidebar sidebar-style-2">
    <aside id="sidebar-wrapper">
        <div class="sidebar-brand">
            <a href="index"> <img alt="image" src="{{url('assets/backend/img/logo.png')}}" class="header-logo" /> <span class="logo-name">itFactory</span>
            </a>
        </div>
        <ul class="sidebar-menu">
            <li class="menu-header">Main</li>

            <li class="dropdown active">
                <a href="index" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></a>
            </li>

            <li class="dropdown">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i
      data-feather="layout"></i><span>News</span></a>
                <ul class="dropdown-menu">

                    <li><a class="nav-link" href="{{route('news_add')}}">Add News</a></li>
                    <li><a class="nav-link" href="widget-data">Edit News</a></li>
                    <li><a class="nav-link" href="widget-chart">Manage News</a></li>
                    <li><a class="nav-link" href="widget-data">Draft</a></li>
                    <li><a class="nav-link" href="widget-data">Trash Bin</a></li>

                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i data-feather="command"></i><span>Category</span></a>
                <ul class="dropdown-menu">
                    <li><a class="nav-link" href="chat">Add Catrgoty</a></li>
                    <li><a class="nav-link" href="portfolio">Edit Category</a></li>
                    <li><a class="nav-link" href="portfolio">Manage Category</a></li>

                </ul>
            </li>

            <li class="menu-header">Media</li>

            <li class="dropdown">
                <a href="index" class="nav-link"><i data-feather="image"></i><span>Gallery</span></a>
            </li>

            <li class="dropdown">
                <a href="index" class="nav-link"><i data-feather="video"></i><span>Videos</span></a>
            </li>

            <li class="dropdown">
                <a href="index" class="nav-link"><i data-feather="folder"></i><span>File Manager</span></a>
            </li>



            <li class="menu-header">Extras</li>

            <li class="dropdown">
                <a href="#" class="menu-toggle nav-link has-dropdown"><i data-feather="settings"></i><span>Settings
      </span></a>
                <ul class="dropdown-menu">
                    <li><a class="nav-link" href="alert">Search Engine</a></li>
                    <li><a class="nav-link" href="badge">Google Ads</a></li>
                    <li><a class="nav-link" href="breadcrumb">Site Config</a></li>

                </ul>
            </li>

            <li class="dropdown">
                <a href="index" class="nav-link"><i data-feather="link"></i><span>Visit Frontend</span></a>
            </li>



        </ul>
    </aside>
</div>
