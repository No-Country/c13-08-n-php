
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from '../../Services/config'
import { collection, getDocs, where, query } from 'firebase/firestore';
import "./ItemListContainer.css"
import Fotter from "../fotter/Fotter";

 const ItemListContainer = () => {
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

  // Make the backgorund darker when the modal is open


  return (
    < >
      
        <div className="titulo">
          <h1 > Nuestros Productos:</h1>
          <h2> Panificados y Pizzas con Harinas Organicas y de fermentacion natural.</h2>
        </div>
        <ItemList productos={productos} /><div className="masProductos"> 
        <button>
          Ver todos los productos
        </button>
      </div>
      < Fotter />

      
      
    </>
  )
}

export default ItemListContainer

