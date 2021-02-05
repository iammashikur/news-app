<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            'name' => 'Mirash Rahman',
            'email' => 'iammashikur@gmail.com',
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // password
            'is_admin' =>  1,
            'remember_token' => Str::random(10),
            'created_at' =>  now(),
            'updated_at' =>  now(),

        ]);
    }
}
