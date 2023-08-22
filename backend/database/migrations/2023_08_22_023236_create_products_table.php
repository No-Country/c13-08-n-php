<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre');
            $table->string('Descripcion');
            $table->integer('Precio');
            $table->integer('Stock');
            $table->string('Imagen');
            //Tabla de categorias de productos haciedo referencia al id de la tabla de categorias
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->date('Creado_En'); // created at
            $table->timestamp('Updated_at')->useCurrent(); // updated at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
