import { useState, useEffect } from "react";
import Cards from "../Cards/Cards";
import { useParams } from "react-router-dom";
import {db} from '../../Services/config'
import { collection, getDocs, where, query } from 'firebase/firestore';
import './CardsContainer.css'
import { Hidden } from "@mui/material";

 const CardsContainer = () => {
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
    <Hidden only={['xs', 'sm']}>
    <div className="gridCards">
      
      <Cards productos={productos} />
      
      
    </div>
    </Hidden>

  )
}

export default CardsContainer