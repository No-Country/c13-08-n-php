import LoginModal from "../LoginModal/LoginModal";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {db} from '../../Services/config'
import { collection, getDocs, where, query } from 'firebase/firestore';
import "./ItemListContainer.css"

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
  const [show, setShow] = useState(false);

  return (
    < >
      <div className={show ? "blur": ""}>
        <div>
          <h1 className="titulo">Nuestros productos</h1>
          <h2 className="subtitulo">Panificados y Pizzas con Harinas Organicas y de fermentacion natural.</h2>
        </div>
        <ItemList productos={productos} />
      </div>
      {/* <LoginModal show={show} setShow={setShow}/> */}
    </>
  )
}

export default ItemListContainer

