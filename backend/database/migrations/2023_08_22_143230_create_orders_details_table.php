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
        Schema::create('orders_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id'); // id del pedido
            $table->foreign('order_id')->references('id')->on('orders'); // referencia a la tabla de pedidos
            $table->unsignedBigInteger('products_id'); // id de los productos
            $table->foreign('products_id')->references('id')->on('products'); // referencia a la tabla de productos
            $table->integer('cantidad'); 
            $table->integer('precio'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders_details');
    }
};
