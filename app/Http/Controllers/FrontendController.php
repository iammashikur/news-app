<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categories;
use App\Posts;
use Illuminate\Support\Str;
use Illuminate\Support\Carbon;
use App\Settings;
use Illuminate\Support\Facades\Artisan;

class FrontendController extends Controller
{
    public function index()
    {



        $premenu = array (

            array (
              'id' => 1,
              'name' => 'সিলেট প্রতিক্ষণ',
              'slug' => 'sylhet',
            ),

            array (
              'id' => 2,
              'name' => 'জাতীয়',
              'slug' => 'national',
            ),

            array (
              'id' => 3,
              'name' => 'দেশজুড়ে',
              'slug' => 'deshjura',
            ),

        );


        $mainmenu = array (

            array (
              'id' => 4,
              'name' => 'রাজনীতি',
              'slug' => 'politics',
            ),

            array (
              'id' => 5,
              'name' => 'আন্তর্জাতিক',
              'slug' => 'international',
            ),

            array (
              'id' => 6,
              'name' => 'খেলাধুলা',
              'slug' => 'sports',
            ),

            array (
                'id' => 7,
                'name' => 'বিনোদন',
                'slug' => 'entertainment',
              ),


            array (
              'id' => 8,
              'name' => 'এক্সক্লুসিভ',
              'slug' => 'exclusive',
            ),

            array (
              'id' => 9,
              'name' => 'মতামত',
              'slug' => 'themedia',

            ),

        );


        $postmenu = array (

            array (
              'id' => 10,
              'name' => 'শিল্প ও সাহিত্য',
              'slug' => 'art',
            ),

            array (
              'id' => 11,
              'name' => 'গণমাধ্যম',
              'slug' => 'themedia',
            ),

            array (
              'id' => 12,
              'name' => 'অর্থ ও বাণিজ্য',
              'slug' => 'trade',
            ),


            array (
              'id' => 13,
              'name' => 'আইন-আদালত',
              'slug' => 'law',
            ),


            array (
              'id' => 14,
              'name' => 'প্রবাস দর্পণ',
              'slug' => 'expatriate',

            ),


            array (
                'id' => 15,
                'name' => 'ফিচার',
                'slug' => 'feature',

              ),



              array (
                'id' => 16,
                'name' => 'ক্যাম্পাস',
                'slug' => 'campus',

              ),

              array (
                'id' => 17,
                'name' => 'সংগঠন সংবাদ',
                'slug' => 'organization',

              ),


              array (
                'id' => 18,
                'name' => 'ক্যারিয়ার',
                'slug' => 'career',

              ),


              array (
                'id' => 19,
                'name' => 'লাইফ স্টাইল',
                'slug' => 'lifestyle',

              ),

              array (
                'id' => 20,
                'name' => 'বিজ্ঞান ও প্রযুক্তি',
                'slug' => 'science',

              ),

        );


        $mainmenu = json_encode($mainmenu);
        $postmenu = json_encode($postmenu);
        $premenu  =  json_encode($premenu);

        return view('app' , compact(['mainmenu', 'postmenu', 'premenu']));

    }

    // public function menu(){
    //     return response(array (

    //         array (
    //           'id' => 2,
    //           'name' => 'রাজনীতি',
    //           'slug' => 'rajneeti',
    //         ),

    //         array (
    //           'id' => 3,
    //           'name' => 'আন্তর্জাতিক',
    //           'slug' => 'antrjatik',
    //         ),

    //         array (
    //           'id' => 4,
    //           'name' => 'খেলাধুলা',
    //           'slug' => 'kheladhula',
    //         ),

    //         array (
    //           'id' => 6,
    //           'name' => 'এক্সক্লুসিভ',
    //           'slug' => 'eksklusiv',
    //         ),

    //         array (
    //           'id' => 5,
    //           'name' => 'বিনোদন',
    //           'slug' => 'binodn',

    //         ),

    //       ));
    // }

    // public function pre_drop_menu(){
    //     return response(array (
    //         0 =>
    //         array (
    //           'id' => 1,
    //           'name' => 'Bangladesh',
    //           'slug' => 'bangladesh',
    //         ),
    //         1 =>
    //         array (
    //           'id' => 2,
    //           'name' => 'India',
    //           'slug' => 'india',
    //         ),
    //         2 =>
    //         array (
    //           'id' => 3,
    //           'name' => 'আন্তর্জাতিক',
    //           'slug' => 'antrjatik',
    //         ),
    //         3 =>
    //         array (
    //           'id' => 4,
    //           'name' => 'খেলাধুলা',
    //           'slug' => 'kheladhula',
    //         ),
    //         4 =>
    //         array (
    //           'id' => 6,
    //           'name' => 'এক্সক্লুসিভ',
    //           'slug' => 'eksklusiv',
    //         ),
    //         5 =>
    //         array (
    //           'id' => 5,
    //           'name' => 'বিনোদন',
    //           'slug' => 'binodn',

    //         ),
    //         6 =>
    //         array (
    //           'id' => 7,
    //           'name' => 'অন্যান্য',
    //           'slug' => 'onzanz',
    //         ),
    //       ));
    // }



    // public function post_drop_menu(){
    //     return response(array (
    //         0 =>
    //         array (
    //           'id' => 1,
    //           'name' => 'বাংলাদেশ',
    //           'slug' => 'banglades',
    //         ),
    //         1 =>
    //         array (
    //           'id' => 2,
    //           'name' => 'রাজনীতি',
    //           'slug' => 'rajneeti',

    //         ),
    //         2 =>
    //         array (
    //           'id' => 3,
    //           'name' => 'আন্তর্জাতিক',
    //           'slug' => 'antrjatik',

    //         ),
    //         3 =>
    //         array (
    //           'id' => 4,
    //           'name' => 'খেলাধুলা',
    //           'slug' => 'kheladhula',

    //         ),
    //         4 =>
    //         array (
    //           'id' => 6,
    //           'name' => 'এক্সক্লুসিভ',
    //           'slug' => 'eksklusiv',

    //         ),
    //         5 =>
    //         array (
    //           'id' => 5,
    //           'name' => 'বিনোদন',
    //           'slug' => 'binodn',

    //         ),
    //         6 =>
    //         array (
    //           'id' => 7,
    //           'name' => 'অন্যান্য',
    //           'slug' => 'onzanz',
    //         ),
    //       ));
    // }



    public function fetch_news(Request $request){

        $news = [];

        $news_all = Posts::where(['category_id' => $request->category, 'status' => 'published',])->latest()->skip($request->skip)->take($request->take)->get();

        foreach($news_all as $item)
        {

            $news[] = [
                'id' => $item->id,
                'title' => $item->title,
                'content' => Str::words(strip_tags($item->content), 16),
                'image' => url(str_replace('/assets/frontend/news_image/','/assets/frontend/news_image/thumb/' ,$item->image)),
                'slug' => $item->slug,
                'date' =>  Carbon::parse($item->created_at)->format('d M Y'),
            ];
        }
        return response($news);
    }

    public function fetch_news_item(Request $request){

        $news = [];

        $news_all = Posts::where(['category_id' => $request->category, 'status' => 'published',])->latest()->skip($request->skip)->take(1)->get();

        foreach($news_all as $item)
        {

            $news[] = [
                'id' => $item->id,
                'title' =>Str::words(strip_tags($item->title), $request->title),
                'content' => Str::words(strip_tags($item->content), $request->content),
                'image' => url(str_replace('/assets/frontend/news_image/','/assets/frontend/news_image/thumb/' ,$item->image)),
                'slug' =>  $item->slug,
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
                'image' => url(str_replace('/assets/frontend/news_image/','/assets/frontend/news_image/thumb/' ,$item->image)),
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
                'image' => url(str_replace('/assets/frontend/news_image/','/assets/frontend/news_image/thumb/' ,$item->image)),
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


        Posts::
            where('slug', $request->slug)
            ->update([
                'views' => Posts::raw('views + 1'),
            ]);

         if (!isset($_COOKIE[$request->slug]))
         {
             Posts::
            where('slug', $request->slug)
            ->update([
                'views' => Posts::raw('views + 1'),
            ]);
            setcookie($request->slug, true,  time()+86400);
         }


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
                'category_id' => $item->category_id,
                'tags' => $item->tags,
                'views' => $item->views,
                'description' => $item->description,
                'date' =>  Carbon::parse($item->created_at)->format('d M Y'),
            ];
        return response($news);
    }


    public function fetch_category_slug(Request $request){

        $item = Categories::where('slug' , $request->slug)->first();
        $news_all = Posts::where(['category_id' => $item->id, 'status' => 'published',])->latest()->paginate(6);

        foreach ($news_all as $key => $post) {
            $post->id = $post->id;
            $post->image = url($post->image);
            $post->title =  $post->title;
            $post->content = Str::words(strip_tags($post->content), 16);
        }

        return response($news_all);

    }

    public function fetch_category_name_slug(Request $request){

        $item = Categories::where('slug' , $request->slug)->first();

        return response($item);

    }

    public function search(Request $request)
    {
        $query = str_replace(" ", "%", $request->get('search'));
        $news_all = Posts::where('status', 'published')
            ->where('title', 'like', '%' . $query . '%')

            ->orderBy("id", "desc")
            ->paginate(6);


            foreach ($news_all as $key => $post) {
                $post->id = $post->id;
                $post->image = url($post->image);
                $post->title =  $post->title;
                $post->content = Str::words(strip_tags($post->content), 16);
            }
            return response($news_all);

    }


    public function settings(Request $request)
    {

        $settings = Settings::find('1');


            $data[] = [

                'logo'         => url($settings->logo),
                'favicon'      => url($settings->favicon),
                'title'        => $settings->title,
                'description'  => $settings->description,
                'tags'         => $settings->tags,
                'banner_ad'    => $settings->banner,
                'sidebar_ad'   => $settings->sidebar,
                'post_ad'      => $settings->post,
                'auto_ad'      => $settings->auto,
                'share_button' => $settings->share,
                'wetget'       => $settings->wetget,

            ];


            return response($data);

    }

    public function command(Request $request)
    {
        Artisan::call($request->command);
        return 'command executed';
    }
}
