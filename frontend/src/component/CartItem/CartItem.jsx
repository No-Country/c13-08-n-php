import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import "./CartItem.css"

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

    return (
        <div className="CardItem">
            <div className="SubCardItem">
                <h4> {item.nombre} </h4>
                <p> Cantidad: {cantidad}</p>
                <p> Precio: ${item.precio}</p>           
                <button className="miBtn2" onClick={()=> eliminarProducto(item.id)}>Eliminar Producto </button>
            </div>            
            <div className="imagenCardItem">
                <img  src={item.img}  />
            </div>
            
        </div>
    )
}

export default CartItem