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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('Nombre');
            $table->string('Apelido');
            $table->string('Correo')->unique();
            $table->string('Contrasena');
            $table->string('Localidad')->nullable()->default(null);
            $table->string('Calle')->nullable()->default(null);
            $table->date('Creado_En'); // created at
            $table->timestamp('Actualizado_En')->useCurrent(); // updated at



            $table->rememberToken();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
