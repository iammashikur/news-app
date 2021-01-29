<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/' , 'AdminController@index');

Route::get('/news-add' , 'AdminController@news_add')->name('news_add');
Route::post('/news-add' , 'AdminController@news_store')->name('news_store');

Route::get('/news-edit' , 'AdminController@news_edit');




Route::get('/file-manager'   , 'FilesController@fetch_data')->name('filemanager.images');
Route::post('/file-manager' , 'FilesController@upload_data')->name('filemanager.upload');




Route::get('/blog' , function(){
    return view('backend.blog');
});


// Route::get('/', function () {
//     return view('welcome');
// });

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
