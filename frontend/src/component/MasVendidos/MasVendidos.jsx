import React from 'react'
import { Link } from 'react-router-dom'
import "./MasVendidos.css"

import { useEffect, useState } from "react";
import ItemList from  "../ItemList/ItemList"
import { Hidden } from '@mui/material'
import { instanceAxios } from '../../utils/axios';

const MasVendidos = () => {
    const [productos, setProductos] = useState([]);
    
  
    useEffect(() => {
      instanceAxios.get("/products")  
      .then((res) =>{
          const products = res.data.data.data   
          const dataNew = products.slice(0,2)
          setProductos(dataNew)
      })
   
      },[]) 
  return (
    <>
    <Hidden only={['xl', 'lg', 'md', 'sm']}>
    <div className="masVendidos">
         <h2>MasVendidos</h2>

         <Link  to="/todosProductos">
            <button className="btn "> Ver todos </button>
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