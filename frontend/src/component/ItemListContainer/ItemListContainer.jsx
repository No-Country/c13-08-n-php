
import { useEffect, useState } from "react";
import ItemList from  "../ItemList//ItemList"
import axios from 'axios';
import './ItemListContainer.css'
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";

 const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  

  useEffect(() => {
    
    axios.get("https://c13-08-n-php.fly.dev/api/products?page=2")
    .then((res) => res.data.data.data)    
    .then((data) => setProductos(data.slice(0,4)))
    
    

  
      
    },[])
    
    return (
    < >
     <Hidden only={['xs']}>
        <div className="box-titulos"> 
          <h1 className="titulo">Nuestros productos</h1>
          <h2 className="subtitulo">Panificados y Pizzas con Harinas Organicas y de fermentacion natural.</h2>
        </div>
        <div className="productos">

        <ItemList productos={productos} />
       
      </div> <div className="masProductos"> 
      <Link to="/todosProductos"> 
      <button className='ver-todos' onClick={() => console.log("todos los productos")}>
          Ver todos los productos
        </button>
      </Link>
      
      </div>
      </Hidden>
    </>
  )
}

export default ItemListContainer

