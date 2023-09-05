import React from 'react'
import './styles.css'

const CartGrid = () => {

    //Function to prevent the default behavior of the form
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario enviado');
        //Aca deberia ir el codigo para enviar los datos al backend
        const data = {
            nombre: e.target.nombre.value,
            direccion: e.target.direccion.value,
            ciudad: e.target.ciudad.value,
            provincia: e.target.provincia.value,
            codigoPostal: e.target.codigoPostal.value,
            telefono: e.target.telefono.value,
            }
            console.log(data);
    }


  return (
    <div className='cart-container'>

      <div className='direcciones-container'>

        <div className='guardadas'>
            <h3 className='mis-direcciones'>Mis Domicilios</h3>

            <div className='direcciones-guardadas'>
                <div className='direccion'>
                    <input type="radio" name='address-1' id='ad1' value={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quis."}/>
                    <label htmlFor="ad1"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quis.</p></label>
                </div>
            </div>

                <p className='mas-opciones'>Mas Opciones </p>
        </div>

        <div className='direccion-nueva'>
            <h4>Completa con tus datos para el envío</h4>
            <form onSubmit={handleSubmit} className='completar-direccion'>
                <input type="text" placeholder='Nombre y Apellido' name='nombre'/>
                <input type="text" placeholder='Dirección' name='direccion'/>
                <input type="text" placeholder='Ciudad' name='ciudad'/>
                <input type="text" placeholder='Provincia' name='provincia'/>
                <input type="text" placeholder='Código Postal' name='codigoPostal'/>
                <input type="text" placeholder='Teléfono' name='telefono'/>
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