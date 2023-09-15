import { instanceAxios } from "../../utils/axios";
import Item from "../Item/Item";
import "./ItemList.css"


const ItemList = ({productos}) => {

  const bearerToken = document.cookie.split("=")[1];

  const addCart = async (id) => {
    try{
    // const res = await instanceAxios.post(`/cart/add/${id}`, {cantidad: 1}, {headers: {Authorization: `bearer ${bearerToken}`}})
    // console.log("ADD", res.data);
    //add products to cart saved in session storage
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const product = productos.find((prod) => prod.id === id);
    const productInCart = cart.find((prod) => prod.id === id);
    if (productInCart) {
      productInCart.cantidad += 1;
    } else {
      product.cantidad = 1;
      cart.push(product);
  }
  sessionStorage.setItem("cart", JSON.stringify(cart));
  console.log("cart", cart);


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