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
        return view('index');

    }

    public function menu(){
        return response(Categories::orderBy('order', 'Asc')->get());
    }

    public function news(){

        return response(Posts::where(['main_lead' => 1, 'status' => 'published',])->latest()->get());
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

    public function show(){
    }
}
