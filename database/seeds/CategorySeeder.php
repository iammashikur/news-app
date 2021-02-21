<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


            $category = array(
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


            App\Categories::insert($category);


    }
}
