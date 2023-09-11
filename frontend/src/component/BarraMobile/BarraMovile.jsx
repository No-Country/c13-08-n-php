import React from 'react'
import { Link } from 'react-router-dom'
import "./BarraMovile.css"
import MasVendidos from '../MasVendidos/MasVendidos'
import { Hidden } from '@mui/material'
import image1 from "../../assets/panes.png"



const BarraMovile = () => {

  return (
  
  <>
  <Hidden only={['xl', 'lg', 'md', 'sm']}>
  <div className="barra">
    <Link to="/panificados">
        <div className="btn-barra">
            <h3>Panes</h3>
            
           
        </div>
    </Link>
    <Link to="/focaccias">
        <div className="btn-barra">
            <h3>Focaccias</h3>
        </div>
    </Link>
    <Link to="/pizzas">
        <div className="btn-barra">
            <h3>Pizzas</h3>
            
        </div>
    </Link>
    <Link to="/combos">
        <div className="btn-barra">
            <h3>Combos</h3>
        </div>
    </Link>
  </div>
  <div className="grid-card">
    <div>
        <h2>Panes</h2>
        <h3>Ir a la Tienda </h3>
        
    </div>
    
      <img src={image1} className='img-barra' />

  </div>

  


    

  <MasVendidos/>
  


  </Hidden>
  
  </>
    
  )
}

export default BarraMovile