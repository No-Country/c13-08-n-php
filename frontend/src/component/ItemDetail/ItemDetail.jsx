import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { useContext } from 'react'
import axios from 'axios'

const ItemDetail = ({id, nombre, precio, imagen, stock, descripcion}) => {

  const [ agregarCantidad, setAgregarCantidad ] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

 const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio,imagen};
    agregarProducto(item, cantidad);
  }
  return (
    
   <div className="contenedorDetail">
      <div className="contenedorItem">
            <h2> {nombre}</h2>
                    
            <div className="contenedorImgBtn">
              <img src={imagen} alt={nombre} />
              <div className="contenedorTextBtn">
                <h3>${precio}</h3> 
                <p>{descripcion}</p>
                {
                agregarCantidad > 0 ? (< Link className="miBtn" to='/cart'> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} onAdd={manejadorCantidad}/>)
              }
              </div> 
            </div>         
      </div> 
   </div>   
    
  )
}

export default ItemDetail
