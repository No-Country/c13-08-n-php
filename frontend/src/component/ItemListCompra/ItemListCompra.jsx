
import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import {db} from '../../Services/config'
import { collection, getDocs, where, query } from 'firebase/firestore';
import "./ItemListCompra.css"
//import LoginModal from "../LoginModal/LoginModal";
import Footer from "../Footer/Footer";
import ItemDetail from "../ItemDetail/ItemDetail";

 const ItemListCompra = () => {
  const [productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "Productos"), where("category_id","==",idCategoria)) : collection(db, "Productos");
    
    getDocs(misProductos)
    .then(res => {
      const nuevosProductos = res.docs.map(doc => {
        const data = doc.data()
        return {id:doc.id, ...data}
      })
      setProductos(nuevosProductos);
    })
    .catch(error => console.error(error))
    
  }, [idCategoria]);

  return (
    < >
      
      <div className="titulo">
        <h1 > Nuestros Productos:</h1>
        <h2> Panificados y Pizzas con Harinas Organicas y de fermentacion natural.</h2>
         {/*<LoginModal/> */}
      </div>
      <ItemDetail />
      <div className="masProductos"> 
        <button>
          Ver todos los productos
        </button>
      </div>
      < Footer />
      
        
      
    </>
  )
}

export default ItemListCompra