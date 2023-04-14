import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout/Layout'
import productContext from '../../../context/AppContext/productContext'
const Categories = () => {

    const ProductContext = useContext(productContext)

    const {allProducts} = ProductContext
    const router = useRouter()
    const {catName} = router.query
    console.log(allProducts)
  
  return (
    <Layout>
    <div>{
        allProducts?.results.filter((product:any) =>  (product.categoryName === catName)).map((e:any) => (
            <p>{e.name}</p>
        ))
        }</div>

    </Layout>
  )
}

export default Categories