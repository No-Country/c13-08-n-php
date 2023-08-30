import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {db} from '../../Services/config'
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { collection, getDocs, where, query } from 'firebase/firestore';

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

  return (
    < >
        <div>
          <h1 className="titulo">Nuestros productos</h1>
          <h2 className="subtitulo">Panificados y Pizzas con Harinas Organicas y de fermentacion natural.</h2>
        </div>
        <ItemList productos={productos} /><div className="masProductos"> 
        <button>
          Ver todos los productos
        </button>
      </div>
    </>
  )
}

export default ItemListContainer

