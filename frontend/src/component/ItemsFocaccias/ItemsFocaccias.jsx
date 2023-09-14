import { useEffect, useState } from "react";
import ItemList from  "../ItemList/ItemList"
import axios from 'axios';
import SideBar from "../SideBar/SideBar";
import './ItemsFocaccias.css'

const ItemsFocaccias = () => {
    const [productos, setProductos] = useState([]);
    
  
    useEffect(() => {
      
      axios.get("https://c13-08-n-php.fly.dev/api/product/focaccias")
      .then((res) => res.data.data.data)
      .then((productos) => setProductos
        (productos))
        console.log(productos)
      },[])
      
      return (
      < >
          <div className="box-titulo">
            <h1 className="titulo">Nuestros productos</h1>
            <h2 className="subtitulo">Focaccias:</h2>
          </div>
          <div className="productos">
            
              <SideBar />
              <ItemList productos={productos} /><div className="masProductos">
               
            
          </div>
          </div>
      </>
    )
  }

export default ItemsFocaccias