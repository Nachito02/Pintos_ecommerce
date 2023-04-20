import React, {useContext, useState, useEffect} from 'react'
import Layout from '../../components/Layout/Layout'
import productContext from '../../context/AppContext/productContext'
import Image from 'next/image'
const Cart = () => {


    const [loading,setLoading] = useState(true)

    const ProductContext = useContext(productContext)

    const {cart, allProducts} = ProductContext
   

    useEffect(() => { 
        if (allProducts && allProducts.length) {
            console.log(allProducts)
          setLoading(false)
        }
      },[allProducts])


     return (
    <Layout>
        {loading === true ?  <p>No hay productos en el carrito</p> :
            <ul>
                {cart.map((cartItem:any) => { 
                    const product =  allProducts.find((product:any) => product.defaultArticle.code === cartItem.product.code )

                    return (
                        <li key={cartItem.product.code}>
                                        <Image
                        src={product.images[0].baseUrl}
                        width={360}
                        height={400}
                        alt="imagen"
                        />
                            <h2>{product.name}</h2>
                        </li>
                    )
                 })}
            </ul>
        
        }
    </Layout> 
  )
}

export default Cart