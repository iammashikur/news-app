<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('content');
            $table->string('image')->nullable()->default('/assets/frontend/placeholder.jpg');
            $table->text('caption')->nullable();
            $table->text('description')->nullable();
            $table->text('slug');
            $table->text('tags')->nullable();
            $table->integer('category_id');
            $table->integer('author_id');
            $table->text('source')->nullable();
            $table->boolean('main_lead')->default(0);
            $table->boolean('sub_lead')->default(0);
            $table->text('status');
            $table->integer('views')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
