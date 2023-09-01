import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext} from '../../Context/CarritoContext'

const CartWidget = () => {

    const cantidadCarrito = useContext(CarritoContext);
    const imgCarrito = "../asses/carrito.png";
  return (
    < Link to='/cart' style={{paddingLeft: 13, textDecoration: 'none'}}>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />    
        {
          cantidadCarrito.cantidadTotal > 0 && <span > {cantidadCarrito.cantidadTotal} </span>
        }
      
     
    </Link>
    
  )
}

export default CartWidget
