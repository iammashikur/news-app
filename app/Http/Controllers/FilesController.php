<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManagerStatic as Image;
use App\Files;

class FilesController extends Controller
{
    public function images()
    {
        return 'hello';
    }

    public function index()
    {
        $data = DB::table('images')->paginate(8);
        return view('pagination', compact('data'));
    }


    public function fetch_data(Request $request)

    {

        if($request->ajax())
        {

            $query = $request->get('query');

            $query = str_replace(" ", "%", $query);
            $data = DB::table('files')
                    ->where('file_path', 'like', '%'.$query.'%')
                    ->orWhere('file_name', 'like', '%'.$query.'%')
                    ->orderBy("id", "desc")
                    ->paginate(8);
            return view('backend.partials.filemanager', compact('data'))->render();
        }


    }

    public function upload_data(Request $request)
    {

        if(!$request->hasFile('image'))
        {
            return response([
                'img_status' => 'notselected',
            ]);

        }

        if(!$request->name)
        {
            return response([
                'name_status' => 'missing',
            ]);

        }


        if($request->hasFile('image'))
        {

            // Upload File
            $image = $request->file('image');
            $name = 'news_image_'.time();
            $main_folder  = 'assets/frontend/news_image/';
            $thumb_folder = 'assets/frontend/news_image/thumb/';

            $main_path  = $main_folder.  $name . '.' . $image->getClientOriginalExtension();
            $thumb_path = $thumb_folder. $name . '.' . $image->getClientOriginalExtension();

            //Resize Big Image
            $main = Image::make($image);
            $main->fit(724, 410);
            $main->save(public_path($main_path));

            //Resize Thumbnail
            $thumb = Image::make($image);
            $thumb->fit(294, 209);
            $thumb->save(public_path($thumb_path));


            // Insert Data
            DB::table('files')->insert([
                'file_name' => $request->name,
                'file_path' => $main_path,
                'file_type' => 'image',
            ]);

            // Ajax Respose
            return response([
                'name_status' => 'exist',
                'img_status' => 'uploaded',
            ]);


        }





    }
}
