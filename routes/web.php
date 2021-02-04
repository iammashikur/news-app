<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




Auth::routes();

// Admin Routes



Route::get('/admin', 'AdminController@login_form')->name('login_form');



Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function ()
{

    Route::get('/', 'AdminController@index')->name('index');

    // News Route

    Route::get('/news-publish',   'AdminController@news_form')->name('news_form');
    Route::post('/news-publish', 'AdminController@news_store')->name('news_store');
    Route::get('/news-manage',   'AdminController@news_all')->name('news_all');
    Route::get('/news-search',   'AdminController@news_search')->name('news_search');

    Route::get('/news-update/{id}', 'AdminController@news_update_form')->name('news_update');


    Route::get('/news-trash',   'AdminController@news_trash')->name('news_trash');
    Route::get('/news-trash/{id}', 'AdminController@news_trash_id')->name('news_trash_id');
    Route::get('/news-recycle/{id}', 'AdminController@news_recycle_id')->name('news_recycle_id');
    Route::get('/news-trash-search',   'AdminController@news_search_trash')->name('news_search_trash');
    Route::get('/news-delete/{id}', 'AdminController@news_delete_id')->name('news_delete_id');

    // Category Route

    Route::get('/category-manage',    'AdminController@category_all')->name('category_all');
    Route::get('/category-publish',   'AdminController@category_form')->name('category_form');
    Route::post('/category-publish',  'AdminController@category_store')->name('category_store');
    Route::get('/category-update/{id}', 'AdminController@category_update')->name('category_update');
    Route::get('/category-delete/{id}', 'AdminController@category_delete')->name('category_delete_id');

    // File Picker Route

    Route::get('/file-manager', 'FilesController@fetch_data')->name('filemanager.images');
    Route::post('/file-manager', 'FilesController@upload_data')->name('filemanager.upload');


     // Filemanager Route
     Route::get('/filemanager', 'AdminController@filemanager_all')->name('filemanager_all');
     Route::post('/filemanager', 'AdminController@filemanager_store')->name('filemanager_store');
     Route::get('/filemanager-delete/{id}', 'AdminController@filemanager_delete')->name('filemanager_delete');


     // Gallery Route
     Route::get('/gallery', 'AdminController@gallery_all')->name('gallery_all');
     Route::post('/gallery', 'AdminController@gallery_store')->name('gallery_store');
     Route::get('/gallery-update/{id}', 'AdminController@gallery_update')->name('gallery_update');
     Route::get('/gallery-delete/{id}', 'AdminController@gallery_delete')->name('gallery_delete');

     // Video Route
     Route::get('/video', 'AdminController@video_all')->name('video_all');
     Route::post('/video', 'AdminController@video_store')->name('video_store');
     Route::get('/video-update/{id}', 'AdminController@video_update')->name('video_update');
     Route::get('/video-delete/{id}', 'AdminController@video_delete')->name('video_delete');

});
