import { useEffect, useState } from "react";
import ItemList from  "../ItemList/ItemList"
import axios from 'axios';

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
          <div>
            <h1 className="titulo">Nuestros productos</h1>
            <h2 className="subtitulo">Panificados y Pizzas con Harinas Organicas y de fermentacion natural.</h2>
          </div>
          <ItemList productos={productos} /><div className="masProductos"> 
          <button className='ver-todos' onClick={console.log("clck")}>
            Ver todos los productos
          </button>
        </div>
      </>
    )
  }

export default ItemsFocaccias