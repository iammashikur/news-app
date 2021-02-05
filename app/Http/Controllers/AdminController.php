<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use RealRashid\SweetAlert\Facades\Alert;
use App\Posts;
use App\Categories;
use App\Galleries;
use App\Videos;
use App\Files;
use App\Settings;
use App\User;
use Carbon\Carbon;






class AdminController extends Controller
{

    ################################
    ##      LOGIN/DASHBOARD       ##
    ################################

    public function index()
    {

        if (Auth::check() && Auth::user()->is_admin == 1) {
            return view('backend.index');
        } else {
            return view('backend.login_form');
        }
    }

    ################################
    ##         DASHBOARD          ##
    ################################



    ################################
    ##            NEWS            ##
    ################################


    // Show All News
    public function news_all()
    {
        $posts = Posts::where('status', 'published')->orWhere('status', 'drafted')->latest()->paginate(10);
        return view('backend.news_all', compact('posts'));
    }

    // Show All News
    public function news_trash()
    {
        $posts = Posts::where('status', 'trashed')->latest()->paginate(10);
        return view('backend.news_trash', compact('posts'));
    }

    // Search From News
    public function news_search_trash(Request $request)
    {
        $query = str_replace(" ", "%", $request->get('query'));
        $posts = Posts::where('status', 'trashed')
            ->where('title', 'like', '%' . $query . '%')
            ->orderBy("id", "desc")
            ->paginate(10);
        return view('backend.news_trash', compact('posts'));
    }


    public function news_recycle_id(Request $request)
    {

        //News Update
        Posts::find($request->id)->update([
            'status'      => 'drafted',
            'updated_at'  => Carbon::now(),
        ]);

        Alert::toast('News Recycled !', 'success');
        return redirect()->back();
    }

    // Search From News
    public function news_search(Request $request)
    {

        $query = str_replace(" ", "%", $request->get('query'));
        $posts = Posts::where('status', 'published')
            ->orWhere('status', 'drafted')
            ->where('title', 'like', '%' . $query . '%')

            ->orderBy("id", "desc")
            ->paginate(8);
        return view('backend.news_all', compact('posts'));
    }

    // News Insert Form
    public function news_form()
    {
        return view('backend.news_form');
    }

    // News Insert
    public function news_store(Request $request)
    {

        // News Status
        if ($request->status == 'published') {
            $status = 'Published';
        }

        if ($request->status == 'drafted') {
            $status = 'Drafted';
        }

        // News Status
        if ($request->has('main_lead')) {
            $main_lead = $request->main_lead;
        } else {
            $main_lead = 0;
        }

        // News Status
        if ($request->has('sub_lead')) {
            $sub_lead = $request->sub_lead;
        } else {
            $sub_lead = 0;
        }

        // News insert
        Posts::insert([

            'title'       => $request->title,
            'content'     => $request->content,
            'image'       => $request->image,
            'caption'     => $request->caption,
            'description' => $request->description,
            'slug'        => Str::slug($request->title, '-'),
            'tags'        => $request->tags,
            'category_id' => $request->category_id,
            'author_id'   => Auth::id(),
            'source'      => $request->source,
            'sub_lead'    => $sub_lead,
            'main_lead'   => $main_lead,
            'status'      => $request->status,
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),

        ]);

        Alert::toast('News ' . $status . ' !', 'success');
        return redirect()->route('news_all');
    }

    // News Update Form
    public function news_update_form(Request $request)
    {
        $news = Posts::find($request->id)->get();
        return view('backend.news_update_form', compact('news'));
    }
    // News Update
    public function news_update(Request $request)
    {
        // News Status
        if ($request->status == 'published') {
            $status = 'Published';
        }

        if ($request->status == 'drafted') {
            $status = 'Drafted';
        }

        // News Status
        if ($request->has('main_lead')) {
            $main_lead = $request->main_lead;
        } else {
            $main_lead = 0;
        }

        // News Status
        if ($request->has('sub_lead')) {
            $sub_lead = $request->sub_lead;
        } else {
            $sub_lead = 0;
        }


        //News Update
        Posts::find($request->id)->update([

            'title'       => $request->title,
            'content'     => $request->content,
            'image'       => $request->image,
            'caption'     => $request->caption,
            'description' => $request->description,
            //'slug'        => Str::slug($request->title, '-'),
            'tags'        => $request->tags,
            'category_id' => $request->category_id,
            'source'      => $request->source,
            'sub_lead'    => $sub_lead,
            'main_lead'   => $main_lead,
            'status'      => $request->status,
            'updated_at'  => Carbon::now(),

        ]);

        Alert::toast('News Updated & ' . $status . ' !', 'success');
        return redirect()->back();
    }

    // News Delete
    public function news_trash_id(Request $request)
    {

        //News Update
        Posts::find($request->id)->update([
            'status'      => 'trashed',
        ]);

        Alert::toast('News Moved To Trash !', 'success');
        return redirect()->back();
    }

    // News Delete
    public function news_delete_id(Request $request)
    {
        Posts::find($request->id)->delete();
        Alert::toast('News Deleted Permanently !', 'success');
        return redirect()->back();
    }


    ################################
    ##          CATEGORY          ##
    ################################


    // Show All Categories
    public function category_all(Request $request)
    {
        $categories = Categories::latest()->paginate(10);
        return view('backend.category_all', compact('categories'));
    }

    // Category Insert Form
    public function category_form()
    {
        return view('backend.category_form');
    }


    // Category Insert
    public function category_store(Request $request)
    {
        // News insert
        Categories::insert([

            'name'        => $request->name,
            'order'       => $request->order,
            'slug'        => Str::slug($request->name, '-'),
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),

        ]);

        Alert::toast('Category Added !', 'success');
        return redirect()->route('category_all');
    }

    public function category_update_form(Request $request)
    {


        $category = Categories::find($request->id);
        return view('backend.category_update_form', compact('category'));
    }

    // Category Update
    public function category_update_id(Request $request)
    {

        Categories::find($request->id)->update([
            'name' => $request->name,
            'order' => $request->order,
        ]);

        Alert::toast('Category Added !', 'success');
        return redirect()->route('category_all');
    }

    // Category Delete
    public function category_delete(Request $request)
    {

        Categories::find($request->id)->delete();
        Alert::toast('Category Deleted !', 'success');
        return redirect()->back();
    }

    ################################
    ##           GALLERY          ##
    ################################

    // Show All Categories
    public function gallery_all(Request $request)
    {
        $galleries = Galleries::latest()->paginate(10);
        return view('backend.gallery_all', compact('galleries'));
    }

    // Category Insert Form
    public function gallery_form(Request $request)
    {
        return view('backend.gallery_form');
    }


    // Category Insert
    public function gallery_store(Request $request)
    {

        // News insert
        Galleries::insert([

            'image'       => $request->image,
            'caption'     => $request->caption,
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),

        ]);

        Alert::toast('Image Added !', 'success');
        return redirect()->route('gallery_all');
    }

    // Category Update Form
    public function gallery_update_form(Request $request)
    {
        $gallery = Galleries::find($request->id);
        return view('backend.gallery_update_form', compact('gallery'));
    }


    // Category Insert
    public function gallery_update(Request $request)
    {
        // News insert
        Galleries::find($request->id)->update([

            'image'       => $request->image,
            'caption'     => $request->caption,
            'updated_at'  => Carbon::now(),

        ]);

        Alert::toast('Image Updated !', 'success');
        return redirect()->route('gallery_all');
    }

    // Category Delete
    public function gallery_delete(Request $request)
    {
        Galleries::find($request->id)->delete();

        Alert::toast('Image Deleted !', 'success');

        return redirect()->back();
    }




    ################################
    ##            VIDEO           ##
    ################################

    // Show All Categories
    public function video_all(Request $request)
    {
        $galleries = Videos::latest()->paginate(10);
        return view('backend.video_all', compact('galleries'));
    }

    // Category Insert Form
    public function video_form(Request $request)
    {
        return view('backend.video_form');
    }


    // Category Insert
    public function video_store(Request $request)
    {

        // News insert
        Videos::insert([

            'link'        => $request->link,
            'title'       => $request->title,
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),

        ]);

        Alert::toast('Video Added !', 'success');
        return redirect()->route('video_all');
    }

    // Category Update Form
    public function video_update_form(Request $request)
    {
        $video = Videos::find($request->id);
        return view('backend.video_update_form', compact('video'));
    }


    // Category Insert
    public function video_update(Request $request)
    {
        // News insert
        Videos::find($request->id)->update([

            'link'        => $request->link,
            'title'       => $request->title,
            'updated_at'  => Carbon::now(),

        ]);

        Alert::toast('Video Updated !', 'success');
        return redirect()->route('video_all');
    }

    // Category Delete
    public function video_delete(Request $request)
    {
        Videos::find($request->id)->delete();

        Alert::toast('Video Deleted !', 'success');
        return redirect()->back();
    }


    ################################
    ##            VIDEO           ##
    ################################

    // Show All Categories
    public function files_all(Request $request)
    {
        $files = Files::latest()->paginate(10);
        return view('backend.filemanager', compact('files'));
    }


    // Category Delete
    public function files_delete(Request $request)
    {
        $file = Files::find($request->id);
        File::delete(public_path($file->file_path));
        File::delete(public_path(str_replace('frontend/news_image', 'frontend/news_image/thumb', $file->file_path)));
        Files::find($request->id)->delete();

        return response([
            'status' => 'deleted'
        ]);
    }

    ################################
    ##          SETTINGS          ##
    ################################


    public function profile()
    {
        $user = User::find(Auth::user()->id);
        return view('backend.profile', compact('user'));
    }

    public function profile_update(Request $request)
    {

        User::find(Auth::user()->id)->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);


        if ($request->password !== null) {

            if ($request->has('password') && $request->has('confirm')) {
                if ($request->has('password') == $request->has('confirm')) {

                    User::find(Auth::user()->id)->update([
                        'password' => bcrypt($request->password),
                    ]);
                }

                Alert::toast('Confirm password not matched !', 'error');
                return redirect()->back();
            }

            Alert::toast('Please enter confirm password !', 'success');
            return redirect()->back();
        }

        Alert::toast('Profile Updated !', 'success');
        return redirect()->back();
    }

    public function roles()
    {

        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }

        $users = User::paginate(10);
        return view('backend.roles', compact('users'));
    }

    public function roles_form()
    {
        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }

        return view('backend.roles_form');
    }

    public function roles_store(Request $request)
    {
        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }



        if (strlen($request->password) < 8) {

            Alert::toast('Password should be 8 characters !', 'error');
            return redirect()->back();
        }

        if ($request->password !== $request->confirm) {

            Alert::toast('Confirm password not matched !', 'error');
            return redirect()->back();

        }


        if (User::where('email', $request->email)->count()) {

            Alert::toast('Email already exist !', 'error');
            return redirect()->back();

        }


        User::insert([
            'name' => $request->name,
            'email' => $request->email,
            'is_admin' => $request->role,
            'password' => $request->password,
        ]);

        Alert::toast('User Added !', 'success');
        return redirect()->route('roles');

    }

    public function roles_update_form()
    {
        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }
        return view('backend.roles_update_form');
    }

    public function roles_update()
    {
        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }
    }

    public function roles_delete()
    {
        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }
    }

    public function settings()
    {
        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }
        return view('backend.settings');
    }

    public function settings_update()
    {
        if (Auth::user()->is_admin !== 1) {
            return abort(403, 'Unauthorized action.');
        }
    }
}
