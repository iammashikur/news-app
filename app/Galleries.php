<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Galleries extends Model
{
    protected $fillable = [
        'image', 'caption',
    ];
}
