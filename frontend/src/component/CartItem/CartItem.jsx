import React from "react"
import { useState } from "react"


import "./CartItem.css"

const CartItem = ({id, nombre, precio, imagen, cantidad, handleDelete, handleAdd, handleSubtract, item}) => {

    return (
        <div className="cardProducto">
            <figure>
                <img className="imgProducto" src={item.imagen} alt={nombre}></img>
                <div className="detalles">
                    <h3 className="title">{item.nombre}</h3>
                    <p className="precio">${item.precio} </p>
                    
                    <div className="controller">
                        <button onClick={() => handleSubtract(item.id)} className="minus">-</button>
                        <p>{item.cantidad}</p>
                        
                        <button onClick={() => handleAdd(item.id)} className="minus">+</button>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleDelete(item.id)}>
                            <path d="M4 6.99976H20M10 10.9998V16.9998M14 10.9998V16.9998M5 6.99976L6 18.9998C6 19.5302 6.21071 20.0389 6.58579 20.414C6.96086 20.789 7.46957 20.9998 8 20.9998H16C16.5304 20.9998 17.0391 20.789 17.4142 20.414C17.7893 20.0389 18 19.5302 18 18.9998L19 6.99976M9 6.99976V3.99976C9 3.73454 9.10536 3.48019 9.29289 3.29265C9.48043 3.10511 9.73478 2.99976 10 2.99976H14C14.2652 2.99976 14.5196 3.10511 14.7071 3.29265C14.8946 3.48019 15 3.73454 15 3.99976V6.99976" stroke="#111111" stroke-width="0.779234" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default CartItem

