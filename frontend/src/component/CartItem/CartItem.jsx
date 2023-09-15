import React from "react"
import { useState } from "react"


import "./CartItem.css"

const CartItem = ({id, nombre, precio, imagen, cantidad, handleDelete, handleAdd, handleSubtract, item}) => {

    return (
        <div className="cardProducto">
            <figure>
                <img className="imgProducto" src={item.imagen} alt={nombre}></img>
                <div className="detalles">
                    <h3>{item.nombre}</h3>
                    <p>${item.precio} </p>
                    <p>Cantidad: {item.cantidad}</p>
                    <button onClick={() => handleAdd(item.id)}>+</button>
                    <button onClick={() => handleSubtract(item.id)}>-</button>
                    <button onClick={() => handleDelete(item.id)}>Eliminar</button>
                </div>
            </figure>
        </div>
    )
}

export default CartItem

