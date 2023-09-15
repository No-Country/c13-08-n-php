import { instanceAxios } from "../../utils/axios";
import Item from "../Item/Item";
import "./ItemList.css"


const ItemList = ({productos}) => {

  const addCart = async (id) => {
    try{
    const res = await instanceAxios.post(`/cart/add/${id}`, {cantidad: 1})
    //save the laravel_session cookie in the browser
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div className="contenedor-productos">
        {productos.map(prod => <Item key={prod.id} addCart={addCart} {...prod}/>)} 
    </div>
  )
}

export default ItemList