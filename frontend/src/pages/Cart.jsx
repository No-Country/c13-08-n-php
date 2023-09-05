import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Context/CarritoContext';
import CartGrid from '../component/CartGrid/CartGrid';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  // if (cantidadTotal === 0) {
  //   return (
  //     <>
  //       <h2>No hay productos en el carrito </h2>
  //       <Link to='/'> Seguir Comprando </Link>
  //     </>
  //   );
  // }

  return (
    <div>
      <CartGrid />
      {/* {carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
            <h3> Cantidad Total: {cantidadTotal} </h3>
            <h3> Total: {total} </h3>
            <button onClick={()=> vaciarCarrito()} className="btnVaciar">Vaciar Carrito </button>
            <Link className="miBtnCheckout" to="/checkout" style={{ textDecoration: 'none'}}> Finalizar Compra </Link>
            <Link className="btnSeguirComprando" to="/" style={{ textDecoration: 'none'}}> Seguir Comprando </Link> */}
    </div>
  );
};

export default Cart;
