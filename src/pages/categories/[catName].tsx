import React, { useContext,useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout/Layout'
import productContext from '../../../context/AppContext/productContext'
const Categories = () => {

    const ProductContext = useContext(productContext)

    const {allProducts} = ProductContext
    const router = useRouter()
    const {catName} = router.query
    const [products,setProducts] = useState([])
    useEffect(() => {
         if(allProducts) {
          setProducts(allProducts)
         }
    },[allProducts])

    console.log(products)
  return (
    <Layout>
    <div>{
       products.filter((product:any) =>  (product.categoryName === catName)).map((e:any) => (
            <p>{e.name}</p>
        ))
        }</div>

    </Layout>
  )
}

export default Categories