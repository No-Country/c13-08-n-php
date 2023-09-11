import React from 'react'
// mostrar todos los productos de diferentes rutas (panificados, pizzas, etc)
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemsTodosProductos.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'



const ItemsTodosProductos = () => {
    const [productos1, setProductos1] = useState([])
    const [ productos2 , setProductos2] = useState([]) 
    const [ productos3 , setProductos3] = useState([])
    const [productos, setProductos] = useState([])  
    
  
    useEffect(() => {
      axios
        .get(`https://c13-08-n-php.fly.dev/api/products?page=1`)
        .then((res) => res.data.data.data)
        .then((data) => setProductos1(data))
    }, [])

    useEffect(() => {
      axios
        .get(`https://c13-08-n-php.fly.dev/api/products?page=2`)
        .then((res) => res.data.data.data)
        .then((data) => setProductos2(data))
    }, [])

    useEffect(() => {
      axios
        .get(`https://c13-08-n-php.fly.dev/api/products?page=3`)
        .then((res) => res.data.data.data)
        .then((data) => setProductos3(data))
    }, [])

    useEffect(() => {
      setProductos([...productos1, ...productos2, ...productos3])
    }, [productos1, productos2])


  
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
  









