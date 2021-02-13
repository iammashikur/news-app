<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories;
use App\Posts;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;

class FrontendController extends Controller
{
    public function index()
    {
        return view('app');

    }

    public function menu(){
        return response(Categories::orderBy('order', 'Asc')->get());
    }



    public function fetch_news(Request $request){

        $news = [];

        $news_all = Posts::where(['category_id' => $request->category, 'status' => 'published',])->latest()->skip($request->skip)->take($request->take)->get();

        foreach($news_all as $item)
        {

            $news[] = [
                'id' => $item->id,
                'title' => $item->title,
                'content' => Str::words(strip_tags($item->content), 16),
                'image' => $item->image,
                'slug' => $item->slug,
                'date' =>  Carbon::parse($item->created_at)->format('d M Y'),
            ];
        }
        return response($news);
    }

    public function fetch_lead(Request $request){

        $news = [];

        $news_all = Posts::where(['main_lead' => 1 , 'status' => 'published',])->latest()->skip($request->skip)->take($request->take)->get();

        foreach($news_all as $item)
        {

            $news[] = [
                'id' => $item->id,
                'title' => $item->title,
                'content' => Str::words(strip_tags($item->content), 16),
                'image' => $item->image,
                'slug' => $item->slug,
                'date' =>  Carbon::parse($item->created_at)->format('d M Y'),
            ];
        }
        return response($news);
    }

    public function fetch_sublead(Request $request){

        $news = [];

        $news_all = Posts::where(['sub_lead' => 1, 'status' => 'published',])->latest()->skip($request->skip)->take($request->take)->get();

        foreach($news_all as $item)
        {

            $news[] = [
                'id' => $item->id,
                'title' => $item->title,
                'content' => Str::words(strip_tags($item->content), 16),
                'image' => $item->image,
                'slug' => $item->slug,
                'date' =>  Carbon::parse($item->created_at)->format('d M Y'),
            ];
        }
        return response($news);
    }

    public function fetch_latest(Request $request){

        $news = [];

        $news_all = Posts::where(['status' => 'published',])->latest()->skip($request->skip)->take($request->take)->get();

        foreach($news_all as $item)
        {

            $news[] = [
                'id' => $item->id,
                'title' => $item->title,
                'slug' => $item->slug,
            ];
        }
        return response($news);
    }

    public function fetch_news_slug(Request $request){

        //return $request->slug;
        $item = Posts::where('slug' , $request->slug)->first();

            $news = [
                'title' => $item->title,
                'content' => Str::words(strip_tags($item->content), 16),
                'image' => url($item->image),
                'slug' => $item->slug,
                'source' => $item->source,
                'caption' => $item->caption,
                'category' => Categories::find($item->category_id)->name,
                'category_slug' => Categories::find($item->category_id)->slug,
                'date' =>  Carbon::parse($item->created_at)->format('d M Y'),
            ];
        return response($news);
    }


    public function fetch_category_slug(Request $request){

        $item = Categories::where('slug' , $request->slug)->first();

        $news_all = Posts::where(['category_id' => $item->id, 'status' => 'published',])->latest()->paginate(1);

        return response($news_all);

    }

    public function fetch_category_name_slug(Request $request){

        $item = Categories::where('slug' , $request->slug)->first();

        return response($item);

    }


    public function show(){
    }
}
