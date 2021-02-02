<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Posts;
use App\Categories;
use App\Galleries;
use App\Videos;
use App\Settings;
use Carbon\Carbon;


class AdminController extends Controller
{

    ################################
    ##           LOGIN            ##
    ################################

    public function login_form()
    {

        if(Auth::check() && Auth::user()->is_admin == 1)
        {
            return view('backend.index');
        }
        else
        {
            return view('backend.login_form');

        }

    }

    ################################
    ##         DASHBOARD          ##
    ################################


    // Show Admin Index (Dashboard)
    public function index()
    {
        return view('backend.index');
    }


    ################################
    ##            NEWS            ##
    ################################


    // Show All News
    public function news_all()
    {
        $posts = Posts::latest()->paginate(10);
        return view('backend.news_all', compact('posts'));
    }

    // Search From News
    public function news_search(Request $request)
    {

        $query = $request->search();
        $query = str_replace(" ", "%", $query);
        $posts = Posts::where('title', 'like', '%' . $query . '%')
            ->orWhere('content', 'like', '%' . $query . '%')
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
        if ($request->status == 'publish') {
            $status = 'Published';
        }
        if ($request->status == 'draft') {
            $status = 'Drafted';
        }

        // News insert
        Posts::insert([

            'title'       => $request->title,
            'content'     => $request->content,
            'image'       => $request->image,
            'description' => $request->description,
            'slug'        => Str::slug($request->title, '-'),
            'tags'        => $request->tags,
            'category_id' => $request->category_id,
            'status'      => $request->status,
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),

        ]);

        return redirect()->route('news_form')->with('success', 'News ' . $status . ' !');
    }

    // News Update Form
    public function news_update_form()
    {
        return view('backend.news_update_form');
    }

    // News Update
    public function news_update(Request $request)
    {
        // News Status
        if ($request->status == 'publish') {
            $status = 'Published';
        }

        if ($request->status == 'draft') {
            $status = 'Drafted';
        }


        //News Update
        Posts::find($request->id)->insert([

            'title'       => $request->title,
            'content'     => $request->content,
            'image'       => $request->image,
            'description' => $request->description,
            //'slug'        => Str::slug($request->title, '-'),
            'tags'        => $request->tags,
            'category_id' => $request->category_id,
            'status'      => $request->status,
            'updated_at'  => Carbon::now(),

        ]);

        return redirect()->back()->with('success', 'News Updated &' . $status . ' !');
    }

    // News Delete
    public function news_delete(Request $request)
    {
        Posts::find($request->id)->delete();
        return redirect()->route('news_all')->with('success', 'News Deleted');
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
            'created_at'  => Carbon::now(),
            'updated_at'  => Carbon::now(),

        ]);

        return redirect()->route('category_all')->with('success', 'Category Added !');

    }

     // Category Update
     public function category_update(Request $request)
     {
          // Category Update
          Categories::find($request->id)->update([

            'name'        => $request->name,
            'order'       => $request->order,
            'updated_at'  => Carbon::now(),

         ]);

         return redirect()->route('category_all')->with('success', 'Category Updated !');

     }

    // Category Delete
    public function category_delete(Request $request)
    {
        return $request;
    }

    ################################
    ##           GALLERY          ##
    ################################

    // Show All Categories
    public function gallery_all(Request $request)
    {
        $galleries = Galleries::latest()->paginate(10);
        return view('backend.news_all', compact('galleries'));
    }

    // Category Insert Form
    public function gallery_form(Request $request)
    {
        return $request;
    }


    // Category Insert
    public function gallery_store(Request $request)
    {
        return $request;
    }

    // Category Delete
    public function gallery_delete(Request $request)
    {
        return $request;
    }




    ################################
    ##            VIDEO           ##
    ################################


    // Show All Categories
    public function video_all(Request $request)
    {
        $videos = Videos::latest()->paginate(10);
        return view('backend.news_all', compact('videos'));
    }

    // Category Insert Form
    public function video_form(Request $request)
    {
        return $request;
    }


    // Category Insert
    public function video_store(Request $request)
    {
        return $request;
    }

    // Category Delete
    public function video_delete(Request $request)
    {
        return $request;
    }


    ################################
    ##          SETTINGS          ##
    ################################


    public function settings()
    {
        $posts = Settings::get();
        return view('backend.news_all', compact('posts'));
    }

    ################################
    ##          SETTINGS          ##
    ################################
}
