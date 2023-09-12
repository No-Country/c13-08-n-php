# API

## Tecnologías usadas 🛠️
[![PHP](https://img.shields.io/badge/PHP-8.1-7A86B8?style=for-the-badge&logo=php&logoColor=white)](https://www.php.net/) [![Laravel](https://img.shields.io/badge/Laravel-10.22-F9322C?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com/) [![MySQL](https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) [![Apache](https://img.shields.io/badge/Apache-CA2136?style=for-the-badge&logo=apache&logoColor=white)](https://apache.org/) [![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/) [![Clever Cloud](https://img.shields.io/badge/Clever%20Cloud-CF3942?style=for-the-badge&logoColor=white)](https://www.clever-cloud.com/) [![Fly.io](https://img.shields.io/badge/Fly.io-8F32E8?style=for-the-badge)](https://fly.io/) [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/) [![Cloudinary](https://img.shields.io/badge/Cloudinary-777BB4?style=for-the-badge)](https://cloudinary.com/)

## Ejecutar el proyecto

Este es un proyecto hecho con Laravel, PHP y MySQL. Para ejecutar el proyecto, sigue los siguientes pasos para levantar el proyecto en tu máquina local.

### Instalación local

```bash
git clone https://github.com/No-Country/c13-08-n-php.git 
cd backend
composer install # Instala los paquetes composer
npm install
```
*Genera una key para la aplicación*
```bash
php artisan key:generate
```

#### Migraciones

Variables necesarias para el uso de la aplicación:
- `DB_CONNECTION` Tipo de base de datos
- `DB_HOST` Host de la base de datos
- `DB_PORT` Puerto de conexión
- `DB_DATABASE` Nombre de la base de datos
- `DB_USERNAME` Usuario
- `DB_PASSWORD` Contraseña
- `GOOGLE_CLIENT_ID` Cliente para la autenticación con google
- `GOOGLE_CLIENT_SECRET` Clave secreta generada por google

Luego de insetar los datos, ejecutar los siguientes comandos

```bash
php artisan migrate --seed
php artisan serve # Correr el servidor
```

## Características

El proyecto incluye las siguientes funcionalidades:

- Autenticación manual y de terceros (con Google) a través de la biblioteca Laravel Socialite.
- Edición y actualización de datos del usuario.
- Creación, edición y actualización de categorías.
- Creación, edición y actualización de productos.
- Generación de reviews de usuarios por productos.
- Gestión de productos favoritos por usuarios.
- Integración de cloudinary para almacenamiento de imágenes.
- Implementación de carrito de compras de productos por usuarios.
- Generación de ordenes y detalle de compra.
- Despliegues en fly.io y clever cloud.

### Endpoints

- Autenticación
- Categorías
- Productos
- Carrito
- Favoritos
- Reviews
- Orden y detalle de compra

## Desarrolladores

|  <img src="https://ca.slack-edge.com/T02KS88FB0E-U054BARC4KY-239641bad062-512" width="130" height="120">  | <img src="https://ca.slack-edge.com/T02KS88FB0E-U05KN05NE2V-0c07e79d8667-512" width="130" height="120">  | <img src="https://ca.slack-edge.com/T02KS88FB0E-U058F07JNGM-bc23040b3726-512" width="130" height="120">  | 
|:-:|:-:|:-:|
| **Ignacio Zolorza** <img src="https://i.ibb.co/Ln0vhg4/AR.png"> | **Maria Ines Godoy** <img src="https://i.ibb.co/Ln0vhg4/AR.png">| **Gabriel Mendoza** <img src="https://i.ibb.co/276DbnR/VE.png"> | 
| [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/byZhetta) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ignacio-zdev/) | [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/godoyFlorio) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mariainesgodoy/) | [![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/xzAnarchy) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-mendoza-a1a077227/) |
