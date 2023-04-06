import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
const Product = () :any => {
  return (
    <Layout>

    <Carousel width={500} showThumbs={true}>
       <div>
            <img src="../../public/assets/mueble1.jpg"  alt='Mueble' />
            <p className="legend">Legend 1</p>
       </div>

       <div>
       <Image src="/../public/assets/mueble1.jpg" width={300} height={300} alt='Mueble' />

       </div>
    </Carousel>


    </Layout>
  )
}

export default Product