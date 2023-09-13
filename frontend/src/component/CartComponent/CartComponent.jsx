import { Link} from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CartItem from "../CartItem/CartItem"

const Cart = () => {
     {/*agregar al carrito  usando axios  usanto metodo post */} 

        const [cart, setCart] = useState([])
        const [total, setTotal] = useState(0)

        useEffect(() => {
            axios.get("https://c13-08-n-php.fly.dev/api/cart")
            .then(response => {
                setCart(response.data.data)
            })
            .catch(error => {
                console.log(error)
            })
        }, [])

        const handleDelete = (id) => {
            axios.delete(`https://c13-08-n-php.fly.dev/api/cart/remove/${id}`)
            .then(response => {
                console.log(response)
                setCart(cart.filter(item => item.id !== id))
            })
            .catch(error => {
                console.log(error)
            })
        }

        const handleAdd = (id) => {
            axios.post(`https://c13-08-n-php.fly.dev/api/cart/addToCart/${id}`)
            .then(response => {
                console.log(response)
                setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
                setTotal(total + 1)
            })
            .catch(error => {
                console.log(error)
            })
        }

        const handleSubtract = (id) => {
            axios.post(`https://c13-08-n-php.fly.dev/api/cart/${id}`)
            .then(response => {
                console.log(response)
                setCart(cart.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item))
                setTotal(total - 1)
            })
            .catch(error => {
                console.log(error)
            })
        }

        const handleTotal = () => {
            let total = 0
            cart.forEach(item => {
                total += item.quantity * item.price
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