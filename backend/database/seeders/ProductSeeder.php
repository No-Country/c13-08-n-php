<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Products;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Products::create([
            'nombre' => 'Campo Clásico',
            'descripcion' => 'Campo Clásico: liviano, fresco y de suave textura.',
            'precio' => 1400,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000654/bread-ecommerce/pan-campo_clasico_qilmtu.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Campo Integral',
            'descripcion' => 'Campo Integral: liviano, fresco y de suave textura.',
            'precio' => 1500,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000665/bread-ecommerce/pan-campo_integral_qhedi7.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Campo semi integral, miel y nuez',
            'descripcion' => 'Campo semi integral con miel y nuez de suave textura.',
            'precio' => 1700,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000683/bread-ecommerce/pan-campo_semi_integral_d5irvt.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Semi Baguette',
            'descripcion' => 'Semi baguette más suave, esponjoso y crujiente corteza.',
            'precio' => 700,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000785/bread-ecommerce/pan-semi_baguettes_x6ojez.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Molde Centeno',
            'descripcion' => 'Molde centeno es la elección perfecta para los amantes de los sabores intensos y saludables.',
            'precio' => 1700,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000708/bread-ecommerce/pan-molde_centeno_g5eyy8.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Molde Clásico',
            'descripcion' => 'Molde clásico con textura suave, perfecto para todo tipo de usos y ocasiones.',
            'precio' => 1400,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000736/bread-ecommerce/pan-molde_clasico_m52ofp.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Molde integral con semillas',
            'descripcion' => 'Molde integral con semillas con un toque de textura y un sabor ligeramente crujiente que te encantará.',
            'precio' => 1600,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000769/bread-ecommerce/pan-molde_integral_semillas_gzegbr.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Molde integral con arándanos',
            'descripcion' => 'Molde integral con arándanos aporta un toque de dulzura y un estallido de sabor en cada bocado.',
            'precio' => 1600,
            'stock' => 50,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000754/bread-ecommerce/pan-molde_integral_arandanos_rw70gq.jpg',
            'category_id' => 1
        ]);
        Products::create([
            'nombre' => 'Cebolla Caramelizada',
            'descripcion' => 'Cebolla caramelizada, panceta y parmesano.',
            'precio' => 3500,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000816/bread-ecommerce/pizza-cebolla_caramelizada_wqbu1h.jpg',
            'category_id' => 2
        ]);
        Products::create([
            'nombre' => 'Fugazzeta',
            'descripcion' => 'Fugazzeta con una base de masa esponjosa y una generosa capa de cebolla y queso.',
            'precio' => 3200,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000831/bread-ecommerce/pizza-fugazzeta_tjm5s3.jpg',
            'category_id' => 2
        ]);
        Products::create([
            'nombre' => '5 quesos miel y nuez',
            'descripcion' => 'Cinco quesos con miel y nuez.',
            'precio' => 3800,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000799/bread-ecommerce/pizza-5-quesos_boqlaw.jpg',
            'category_id' => 2
        ]);
        Products::create([
            'nombre' => 'Margarita',
            'descripcion' => 'Margarita se compone de rojo con el tomate, blanco con el queso mozzarella y verde con la albahaca.',
            'precio' => 3500,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000867/bread-ecommerce/pizza-margarita_w1r2bo.jpg',
            'category_id' => 2
        ]);
        Products::create([
            'nombre' => 'Hongos y Brie',
            'descripcion' => 'Cobertura deliciosa de cebollas y champiñones con queso brie.',
            'precio' => 3500,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000854/bread-ecommerce/pizza-hongos-brie_uwv8nu.jpg',
            'category_id' => 2
        ]);
        Products::create([
            'nombre' => 'Clásica',
            'descripcion' => 'Focaccia clásica: cherrys, cebolla morada y romero',
            'precio' => 1450,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000619/bread-ecommerce/focaccia-clasica_klmiv4.jpg',
            'category_id' => 3
        ]);
        Products::create([
            'nombre' => 'Full Quesos',
            'descripcion' => 'Focaccia full quesos: queso azul, parmesano, reggianito.',
            'precio' => 1600,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000632/bread-ecommerce/focaccia-full_quesos_zbifr6.jpg',
            'category_id' => 3
        ]);
        Products::create([
            'nombre' => 'Morazul',
            'descripcion' => 'Focaccia Morazul: cabolla morada, queso azul, parmesano gratinado.',
            'precio' => 1450,
            'stock' => 30,
            'imagen' => 'https://res.cloudinary.com/dhpf7lthd/image/upload/v1693000642/bread-ecommerce/focaccia-morazul_lsvw0w.jpg',
            'category_id' => 3
        ]);
        Products::create([
            'nombre' => 'Clásico',
            'descripcion' => 'Combo clásico: campo clásico + focaccia clásica.',
            'precio' => 2600,
            'stock' => 20,
            'imagen' => '-',
            'category_id' => 4
        ]);
        Products::create([
            'nombre' => 'Integral',
            'descripcion' => 'Combo integral: campo integral + molde integral.',
            'precio' => 2700,
            'stock' => 20,
            'imagen' => '-',
            'category_id' => 4
        ]);
    }
}
