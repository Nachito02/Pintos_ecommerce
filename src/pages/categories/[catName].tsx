import React, { useContext,useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/Layout/Layout'
import productContext from '../../../context/AppContext/productContext'
import Image from 'next/image'
import style from '../../styles/categories.module.css'
import Link from 'next/link'
const Categories = () => {

    const ProductContext = useContext(productContext)

    const {allProducts} = ProductContext
    const router = useRouter()
    const {catName} = router.query
    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => { 
         if(allProducts) {
          setProducts(allProducts)
         }
    },[allProducts])

  return (
    <Layout>
   
    {  <div className={style.container}>{
       products.filter((product:any) =>  (product.categoryName === catName)).map((e:any) => (
            <Link href={"/product/"+e.defaultArticle.code}>
             <div className={style.card}>
            <Image loading='lazy' src={e.images[0].baseUrl} width={240} height={240} alt={e.name} onLoadingComplete={ () => setLoading(false)}/>
              <div className={style.info}>
              <p>{e.name}</p>
             <p>${e.whitePrice.value}</p>
              </div>
           </div></Link>
        ))
        }</div>}

    </Layout>
  )
}

export default Categories