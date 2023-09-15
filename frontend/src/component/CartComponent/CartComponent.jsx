import { Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CartItem from "../CartItem/CartItem"

const Cart = () => {
     {/*agregar al carrito  usando axios  usanto metodo post */} 
     const bearerToken = document.cookie.split("=")[1];

        const [cart, setCart] = useState([])
        const [total, setTotal] = useState(0)
        const [cantidad, setCantidad] = useState(0)


        useEffect(() => {
            axios.get("https://c13-08-n-php.fly.dev/api/cart", {
                headers: {
                    Authorization: `Bearer ${bearerToken}`
                }
            })
            .then(response => {
                console.log('carrito =>>>>',response.data)
                // setCart(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })

            //set cart from session storage
            const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            setCart(cart);
            console.log("cart", cart);
        }, [])

        const handleDelete = (id) => {
            // axios.delete(`https://c13-08-n-php.fly.dev/api/cart/remove/${id}`)
            // .then(response => {
            //     console.log(response)
            //     setCart(cart.filter(item => item.id !== id))
            // })
            // .catch(error => {
            //     console.log(error)
            // })

            //delete product from cart saved in session storage
            const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const product = cart.find((prod) => prod.id === id);
            cart.splice(cart.indexOf(product), 1);
            sessionStorage.setItem("cart", JSON.stringify(cart));
            setCart(cart);
        }

        const handleAdd = (id) => {
            // axios.post(`https://c13-08-n-php.fly.dev/api/cart/addToCart/${id}`)
            // .then(response => {
            //     console.log(response)
            //     setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
            //     setTotal(total + 1)
            // })
            // .catch(error => {
            //     console.log(error)
            // })

            //add products to cart saved in session storage
            const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const product = cart.find((prod) => prod.id === id);
            if (product) {
                product.cantidad += 1;
            } else {
                product.cantidad = 1;
                cart.push(product);
            }
            sessionStorage.setItem("cart", JSON.stringify(cart));
            setCart(cart);
        }

        const handleSubtract = (id) => {
            // axios.post(`https://c13-08-n-php.fly.dev/api/cart/${id}`)
            // .then(response => {
            //     console.log(response)
            //     setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item))
            //     setTotal(total - 1)
            // })
            // .catch(error => {
            //     console.log(error)
            // })

            //subtract product from cart saved in session storage
            const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const product = cart.find((prod) => prod.id === id);
            if (product.cantidad > 1) {
                product.cantidad -= 1;
            } else {
                cart.splice(cart.indexOf(product), 1);
            }
            sessionStorage.setItem("cart", JSON.stringify(cart));
            setCart(cart);
        }

        const handleTotal = () => {
            let total = 0
            cart.forEach(item => {
                total += item.precio * item.cantidad
            })
            setTotal(total)
        }

        useEffect(() => {
            handleTotal()
        }, [cart])

        return (
            <div className="cart">
                <div className="cart__title">
                    <h1>Carrito de compras</h1>
                </div>
                <div className="cart__container">
                    <div className="cart__items">

                        {cart.map(item => (
                            <CartItem key={item.id} item={item} handleDelete={handleDelete} handleAdd={handleAdd} handleSubtract={handleSubtract}/>
                        ))}
                    </div>
                    <div className="cart__total">
                        <h3>Total: ${total}</h3>
                        <Link to="/checkout">
                            <button>Comprar</button>
                        </Link>
                    </div>
                </div>
            </div>
        )






    
}

export default Cart