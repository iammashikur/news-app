<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class AdminController extends Controller
{
    public function index()
    {
        return view('backend.index');
    }

    public function news_add()
    {
        return view('backend.news_add');
    }

    public function news_store(Request $request)
    {


        if($request->hasFile('image'))
        {

            $image = $request->file('image');
            $name = 'news_image_'.time();
            $folder = 'assets/frontend/news_image/';
            $path = $folder. $name . '.' . $image->getClientOriginalExtension();
            $edit = Image::make($image);
            $edit->fit(320, 320);
            $edit->save(public_path($path));


        }

        else
        {
            return 'sorry';
        }




        return $request;

    }
}
