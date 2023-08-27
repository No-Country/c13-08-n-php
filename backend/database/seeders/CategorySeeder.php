<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Categories;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categories::create([
            'nombre' => 'Panes',
            'descripcion' => 'Elaboración de panes de masa madre'
        ]);
        Categories::create([
            'nombre' => 'Pizzas',
            'descripcion' => 'Elaboración de cinco tipos de pizzas'
        ]);
        Categories::create([
            'nombre' => 'Focaccias',
            'descripcion' => 'Elaboración de tres tipos de focaccias'
        ]);
        Categories::create([
            'nombre' => 'Combos',
            'descripcion' => 'Combo clásico y combo integral'
        ]);
    }
}
