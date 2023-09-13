import React from "react"


import "./CartItem.css"

const CartItem = ({id, nombre, precio, imagen, cantidad, handleDelete, handleAdd, handleSubtract}) => {

    return (
        <div className="cardProducto">
            <figure>
                <img className="imgProducto" src={imagen} alt={nombre}></img>
                <div className="detalles">
                    <h3>{nombre}</h3>
                    <p>${precio} </p>
                    <p>Cantidad: {cantidad}</p>
                    <button onClick={() => handleAdd(id)}>+</button>
                    <button onClick={() => handleSubtract(id)}>-</button>
                    <button onClick={() => handleDelete(id)}>Eliminar</button>
                </div>
            </figure>
        </div>
    )
}

export default CartItem

