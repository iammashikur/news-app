<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories;
use App\Posts;
use Symfony\Component\HttpFoundation\Response;

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


        return response(Posts::where(['category_id' => $request->category, 'status' => 'published',])
        ->latest()
        ->skip($request->skip)
        ->take($request->take)
        ->get());

    }

    public function show(){
    }
}
