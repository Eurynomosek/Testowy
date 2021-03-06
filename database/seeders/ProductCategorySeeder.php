<?php

namespace Database\Seeders;

use App\Models\ProductCategory;
use Illuminate\Database\Seeder;

class ProductCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['name' => 'Elektronika'],
            ['name' => 'Jedzenie'],
            ['name' => 'Słodycze'],
            ['name' => 'Akcesoria'],
            ['name' => 'Zwierzęta'],
            ['name' => 'Inne']
        ];
        ProductCategory::insert($data);


    }
}
