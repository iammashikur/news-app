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


Route::group(['prefix' => 'admin'], function () {


    Route::get('/', 'AdminController@index');

    // News Route
    Route::get('/news-publish',   'AdminController@news_form')->name('news_form');
    Route::post('/news-publish', 'AdminController@news_store')->name('news_store');
    Route::get('/news-manage',   'AdminController@news_form')->name('news_all');
    Route::get('/news-trash',   'AdminController@news_trash')->name('news_trash');
    Route::get('/news-update/{id}', 'AdminController@news_update')->name('news_update');
    Route::get('/news-delete/{id}', 'AdminController@news_update')->name('news_delete');

    // Category Route

    Route::get('/category-manage',   'AdminController@category_all')->name('category_all');
    Route::get('/category-publish',   'AdminController@category_form')->name('category_form');
    Route::post('/category-publish', 'AdminController@category_store')->name('category_store');
    Route::get('/category-update/{id}', 'AdminController@category_update')->name('category_update');
    Route::get('/category-delete/{id}', 'AdminController@category_update')->name('category_delete');




    Route::get('/file-manager', 'FilesController@fetch_data')->name('filemanager.images');
    Route::post('/file-manager', 'FilesController@upload_data')->name('filemanager.upload');




    Route::get('/blog', function () {
        return view('backend.blog');
    });
});


Route::get('/home', 'HomeController@index')->name('home');
