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


Route::resource('/', 'FrontendController');

Route::resource('/category', 'FrontendController');

// Api Routes

Route::get('/menu', 'FrontendController@menu');

Route::get('/news', 'FrontendController@news');

Route::get('/api/lead/{skip}/{take}' , 'FrontendController@fetch_lead');
Route::get('/api/sub/{skip}/{take}' , 'FrontendController@fetch_sub');
Route::get('/api/news/{category}/{skip}/{take}' , 'FrontendController@fetch_news');

Auth::routes(['register' => false]);

// Admin Routes

Route::get('admin', 'AdminController@index')->name('admin');

Route::group(['prefix' => 'admin', 'middleware' => 'admin'], function () {

    // News Route

    Route::get('/news-publish',   'AdminController@news_form')->name('news_form');
    Route::post('/news-publish', 'AdminController@news_store')->name('news_store');
    Route::get('/news-manage',   'AdminController@news_all')->name('news_all');
    Route::get('/news-search',   'AdminController@news_search')->name('news_search');
    Route::get('/news-update/{id}', 'AdminController@news_update_form')->name('news_update_form');
    Route::post('/news-update/{id}', 'AdminController@news_update')->name('news_update');


    Route::get('/news-trash',   'AdminController@news_trash')->name('news_trash');
    Route::get('/news-trash/{id}', 'AdminController@news_trash_id')->name('news_trash_id');
    Route::get('/news-recycle/{id}', 'AdminController@news_recycle_id')->name('news_recycle_id');
    Route::get('/news-trash-search',   'AdminController@news_search_trash')->name('news_search_trash');
    Route::get('/news-delete/{id}', 'AdminController@news_delete_id')->name('news_delete_id');

    // Category Route

    Route::get('/category-manage',    'AdminController@category_all')->name('category_all');
    Route::get('/category-publish',   'AdminController@category_form')->name('category_form');
    Route::post('/category-publish',  'AdminController@category_store')->name('category_store');
    Route::get('/category-update/{id}', 'AdminController@category_update_form')->name('category_update_form');
    Route::post('/category-update/{id}', 'AdminController@category_update_id')->name('category_update_id');
    Route::get('/category-delete/{id}', 'AdminController@category_delete')->name('category_delete_id');

    // File Picker Route

    Route::get('/file-manager', 'FilesController@fetch_data')->name('filemanager.images');
    Route::post('/file-manager', 'FilesController@upload_data')->name('filemanager.upload');

    // Gallery Route
    Route::get('/gallery', 'AdminController@gallery_all')->name('gallery_all');
    Route::get('/gallery-add', 'AdminController@gallery_form')->name('gallery_form');
    Route::post('/gallery-add', 'AdminController@gallery_store')->name('gallery_store');
    Route::get('/gallery-update/{id}', 'AdminController@gallery_update_form')->name('gallery_update_form');
    Route::post('/gallery-update/{id}', 'AdminController@gallery_update')->name('gallery_update');
    Route::get('/gallery-delete/{id}', 'AdminController@gallery_delete')->name('gallery_delete');

    // Video Route
    Route::get('/video', 'AdminController@video_all')->name('video_all');
    Route::get('/video-add', 'AdminController@video_form')->name('video_form');
    Route::post('/video-add', 'AdminController@video_store')->name('video_store');

    Route::get('/video-update/{id}', 'AdminController@video_update_form')->name('video_update_form');
    Route::post('/video-update/{id}', 'AdminController@video_update')->name('video_update');
    Route::get('/video-delete/{id}', 'AdminController@video_delete')->name('video_delete');

    // Files Route
    Route::get('/files', 'AdminController@files_all')->name('files_all');
    Route::get('/files-delete', 'AdminController@files_delete')->name('files_delete');

    // Profile

    Route::get('/profile', 'AdminController@profile')->name('profile');
    Route::post('/profile', 'AdminController@profile_update')->name('profile_update');


    // Admin Roles
    Route::get('/roles', 'AdminController@roles')->name('roles');
    Route::get('/roles-add', 'AdminController@roles_form')->name('roles_form');
    Route::post('/roles-add', 'AdminController@roles_store')->name('roles_store');

    Route::get('/roles-update/{id}', 'AdminController@roles_update_form')->name('roles_update_form');
    Route::post('/roles-update/{id}', 'AdminController@roles_update')->name('roles_update');

    Route::get('/roles-delete/{id}', 'AdminController@roles_delete')->name('roles_delete');

    // Settings
    Route::get('/settings', 'AdminController@settings')->name('settings');
    Route::post('/settings', 'AdminController@settings_update')->name('settings_update');

});
