import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);

  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "Productos", idItem);
    getDoc(nuevoDoc)
    .then(res => {
      const data = res.data();
      const nuevoProducto = {id: res.id, ...data}
      setProducto(nuevoProducto);
    })
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="detallesContainer">
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer;
