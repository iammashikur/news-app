<?php

use Illuminate\Database\Seeder;
use App\Settings;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Settings::insert([
            'logo'         => 'logo',
            'favicon'      => 'favicon',
            'title'        => 'title',
            'description'  => 'description',
            'tags'         => 'tags',
            'banner_ad'    => 'banner',
            'sidebar_ad'   => 'sidebar',
            'post_ad'      => 'post',
            'auto_ad'      => 'auto',
            'share_button' => 'share',
            'wetget'       => 'wetget',
        ]);
    }
}
