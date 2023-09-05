import React from 'react'
import './styles.css'

const CartGrid = () => {
  return (
    <div className='cart-container'>

      <div className='direcciones-container'>

        <div className='guardadas'>
            <h3 className='mis-direcciones'>Mis Domicilios</h3>

            <div className='direcciones-guardadas'>
                <div className='direccion'>
                    <input type="radio" name='address-1' id='ad1' value={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quis."}/>
                    <label for="ad1"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quis.</p></label>
                </div>
            </div>

                <p className='mas-opciones'>Mas Opciones </p>
        </div>

        <div className='direccion-nueva'>
            <h4>Completa con tus datos para el envío</h4>
            <form action="" className='completar-direccion'>
                <input type="text" placeholder='Nombre y Apellido'/>
                <input type="text" placeholder='Dirección'/>
                <input type="text" placeholder='Ciudad'/>
                <input type="text" placeholder='Provincia'/>
                <input type="text" placeholder='Código Postal'/>
                <input type="text" placeholder='Teléfono'/>
                <button className='checkout-button'>Continuar al pago</button>
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