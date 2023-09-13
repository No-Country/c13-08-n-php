import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./BarraMovile.css"
import MasVendidos from '../MasVendidos/MasVendidos'
import { Box, Hidden } from '@mui/material'
import image1 from "../../assets/Panes.png"
import image2 from "../../assets/image10.png"
import image3 from "../../assets/image4.png"
import image4 from "../../assets/Combos.png"
import { OptionContext } from '../../Context/optionsContext'
import { Button } from '@mui/material'





const BarraMovile = () => {

    const { cambiarOption, option, url, image } = useContext(OptionContext)
    

 

  return (
  
  <>
  <Hidden only={['xl', 'lg', 'md', 'sm']}>
  <div className="barra" >    
 
        <Box sx={{ cursor: 'pointer' } } className="btn-barra" onMouseOver={() => cambiarOption('Panes', '/panificados', image1)} >
            <h3 >Panes</h3>    
        </Box>
    
   
        <Box sx={{ cursor: 'pointer' } } className="btn-barra" onMouseOver={() => cambiarOption('Focaccias', '/focaccias', image2) }>
            <h3>Focaccias</h3>
        </Box>

        <Box sx={{ cursor: 'pointer' } } className="btn-barra" onMouseOver={() => cambiarOption('Pizzas', '/pizzas', image3) }>
            <h3>Pizzas</h3>
        </Box>

        <Box sx={{ cursor: 'pointer' } } className="btn-barra" onMouseOver={() => cambiarOption('combos', '/combos', image4) }>
            <h3>Combos</h3>
        </Box>
   
    
  </div>

  <div className="grid-card">
    <Box>
        <h2>{option}</h2>
        <Link to={url}><Button>Ir a la Tienda </Button></Link>
        
    </Box>
    <Box >
      

        <img src={image} className='img-barra'  />
    </Box>
      

  </div>

  


    

  <MasVendidos/>
  


  </Hidden>
  
  </>
    
  )
}

export default BarraMovile
