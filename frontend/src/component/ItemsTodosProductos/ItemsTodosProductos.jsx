import React from 'react'
// mostrar todos los productos de diferentes rutas (panificados, pizzas, etc)
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemsTodosProductos.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'


const ItemsTodosProductos = () => {
    const [productos, setProductos] = useState([])
    const { id } = useParams()
  
    useEffect(() => {
      axios
        .get(`https://c13-08-n-php.fly.dev/api/products?page=1&category=${id}`)
        .then((res) => res.data.data.data)
        .then((productos) => setProductos(productos))
    }, [id])
  
    return (
      <>
        <div>
          <h1 className='titulo'>Nuestros productos</h1>
          <h2 className='subtitulo'>
            Panificados y Pizzas con Harinas Organicas y de fermentacion natural.
          </h2>
        </div>
        <div className='productos'>
          
          <SideBar />
          <ItemList productos={productos} />
          
          
        </div>
      </>
    )}

    export default ItemsTodosProductos
  









