import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './styles.css';
import { redirect } from 'react-router-dom';

const CartGrid = () => {
    const [Profile, setProfile] = useState([]);

    useEffect(() => {
        getProfile();
    }, []);


    function getProfile() {
        //check if the user have cookies with the token
        if (document.cookie.includes('token')) {
            const token = document.cookie.split('=')[1];
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            axios.get('https://c13-08-n-php.fly.dev/api/user-profile')
            .then((response) => {
                const data = response.data.data[0];
                setProfile(data);
                console.log(data);

            })
            .catch((error) => {
                console.log(error);
            });
        }else{
            console.log('No hay token');
            redirect('/');
        }
    }


    //Function to prevent the default behavior of the form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado');
        //Aca deberia ir el codigo para enviar los datos al backend
        const data = {
            nombre: e.target.nombre.value,
            // telefono: e.target.telefono.value,
            localidad: e.target.provincia.value + ' - ' + e.target.codigoPostal.value,
            calle: e.target.ciudad.value  + ' - ' +  e.target.direccion.value,
        }
        console.log(data);

        axios.put('https://c13-08-n-php.fly.dev/api/user-profile/update', data)
        .then(response => {
            console.log(response);
        }
        )
        .catch(error => {
            console.log(error);
        }
        )
    }


  return (
    <div className='cart-container'>

      <div className='direcciones-container'>

        <div className='guardadas'>
            <h3 className='mis-direcciones'>Mi Domicilio</h3>

            <div className='direcciones-guardadas'>
                <div className='direccion'>
                    <input type="radio" name='address-1' id='ad1' value={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quis."}/>
                    <label htmlFor="ad1">
                        <p className='address1'>
                            {/* while the data isnt ready show loading */}
                            {Profile.length === 0 ? 'Loading...' : Profile.calle + ' - ' + Profile.localidad
                            }
                        </p>
                    </label>
                </div>
            </div>

                <p className='mas-opciones'>Mas Opciones <img src='/static/images/ep_arrow-up.svg' className='arrow'/></p>
        </div>

        <div className='direccion-nueva'>
            <h4>Completa con tus datos para el envío</h4>
            <form onSubmit={handleSubmit} className='completar-direccion'>
                <input className="new-address" type="text" placeholder='Nombre y Apellido' name='nombre'/>
                <input className="new-address" type="text" placeholder='Dirección' name='direccion'/>
                <input className="new-address" type="text" placeholder='Ciudad' name='ciudad'/>
                <input className="new-address" type="text" placeholder='Provincia' name='provincia'/>
                <input className="new-address" type="text" placeholder='Código Postal' name='codigoPostal'/>
                <input className="new-address" type="text" placeholder='Teléfono' name='telefono'/>
                <button type='submit' className='checkout-button'>Continuar al pago</button>
            </form>
        </div>

    </div>

      <div className='productos-container'>
        <h3>Tu Carrito de compras</h3>
      </div>

    </div>
  )
}

export default CartGrid