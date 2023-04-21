import React, { useContext, useState, useEffect } from 'react'
import Layout from '../../components/Layout/Layout'
import productContext from '../../context/AppContext/productContext'
import Image from 'next/image'
import style from '../styles/cart.module.css'
import { Button } from 'react-bootstrap'

const Cart = () => {

    const [loading, setLoading] = useState(true)
    const [total, setTotal] = useState(0)
    const ProductContext = useContext(productContext)

    const { cart, allProducts,addCart, updateCart } = ProductContext

    console.log(cart)
    useEffect(() => {
        let sum = 0;

        if (allProducts && allProducts.length) {

        cart.forEach((cartItem:any) => {
            const product = allProducts.find((product:any) => product.defaultArticle.code === cartItem.product.code)
            const totalPrice = cartItem.product.whitePrice.price * cartItem.quantity
            sum += totalPrice
        }) }
        setTotal(sum)
    }, [ cart,allProducts])
    useEffect(() => {
        if (allProducts && allProducts.length) {
            setLoading(false)
        }
    }, [allProducts])

  
    const handleIncrement = (cartItem:any) => {
        const product = allProducts.find(
          (product:any) => product.defaultArticle.code === cartItem.product.code
        );
    
        console.log(product)
        const newQuantity = cartItem.quantity + 1;
        updateCart(product, newQuantity);
      };
      
      const handleDecrement = (cartItem:any) => {
        if (cartItem.quantity === 1) return;
        const product = allProducts.find(
          (product:any) => product.defaultArticle.code === cartItem.product.code
        );
        const newQuantity = cartItem.quantity - 1;
        updateCart(product, newQuantity);
      };
    return (
        <Layout>
                <div className={style.container}>
                {loading === true ? <p>No hay productos en el carrito</p> :
                <ul className={style.unorderList}>
                    {cart.map((cartItem: any) => {
                        const product = allProducts.find((product: any) => product.defaultArticle.code === cartItem.product.code)
                        const totalPrice = cartItem.product.whitePrice.price* cartItem.quantity
                        
                      
                        return (
                            <li key={cartItem.product.code}>
                                <div className={style.containerProduct}>
                                    <Image
                                        src={product.images[0].baseUrl}
                                        width={360}
                                        height={400}
                                        alt="imagen"
                                    />
                                    <div className={style.info}>
                                    <h3>{product.name}</h3>
                                    <p>Precio: {cartItem.product.whitePrice.price}</p>
                                    <p>Cantidad:{cartItem.quantity}</p>
                                    
                        <div>
                            <button onClick={() => handleIncrement(cartItem)}>+</button>
                        <input type="number" value={cartItem.quantity} readOnly min={1} />
                        <button onClick={() => handleDecrement(cartItem)}>-</button>

                        </div>

                                    <p>Sub total:{totalPrice}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                       
                    }
                </ul>

            }

                   <div className={style.resume}>
                   <h2>Total del carrito</h2>
                  <p>Total: ${total}</p> 
                   <Button variant="secondary">Finalizar compra</Button>
                   </div>
                </div>
            
                    </Layout>
    )
}

export default Cart