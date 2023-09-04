
import { useEffect, useState } from "react";
import ItemList from  "../ItemList/ItemList"
import axios from 'axios';
import SideBar from "../SideBar/SideBar";
import "./ItemsPizzas.css"

const ItemsPizzas = () => {
    const [productos, setProductos] = useState([]);
    
  
    useEffect(() => {
      
      axios.get("https://c13-08-n-php.fly.dev/api/product/pizzas")
      .then((res) => res.data.data.data)
      .then((productos) => setProductos
        (productos))
        console.log(productos)
      },[])
      
      return (
      < >
          <div>
            <h1 className="titulo">Nuestros productos</h1>
            <h2 className="subtitulo">Pizzas:</h2>
          </div>
          <div className="productos">
            <div className="col-auto">
              <SideBar />
              <ItemList productos={productos} /><div className="masProductos">
                <button className='ver-todos' onClick={console.log("clck")}>
                 Ver todos los productos
               </button>
            </div>
          </div>


           
          
          
        </div>
      </>
    )
  }

export default ItemsPizzas