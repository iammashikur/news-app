<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    protected $fillable = [
        'title', 'content', 'image', 'description' , 'slug' , 'tags' , 'category_id', 'author_id' , 'main_lead' ,  'sub_lead' , 'status', 'views',
    ];
}
