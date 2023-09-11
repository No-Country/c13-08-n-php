import React from 'react'
import { Link } from 'react-router-dom'
import "./MasVendidos.css"
import axios from 'axios';
import { useEffect, useState } from "react";
import ItemList from  "../ItemList/ItemList"
import { Hidden } from '@mui/material'

const MasVendidos = () => {
    const [productos, setProductos] = useState([]);
    
  
    useEffect(() => {
      
      axios.get("https://c13-08-n-php.fly.dev/api/product/combos")
      .then((res) => res.data.data.data)
      .then((productos) => setProductos
        (productos))
        console.log(productos)
      },[])
  return (
    <>
    <Hidden only={['xl', 'lg', 'md', 'sm']}>
    <div className="masVendidos">
         <h2>MasVendidos</h2>

         <Link  to="/todosProductos">
            <button className="btn btn-primary"> Ver todos los productos</button>
        </Link>
        
    </div>
    <div className="rowProduct">
        <ItemList productos={productos} /><div className="masProductos"></div>
    </div>


    </Hidden>
    
   
    
    </>
    
  )
}

export default MasVendidos