import React from 'react'
import Layout from '../../components/Layout/Layout'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import style from '../styles/Product.module.css'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import mueble from '../../public/assets/sillon.png'
const Product = ()  => {
  return (
    <Layout>

    {/* <Carousel width={500} showThumbs={true}>
       <div>
            <img src={mueble.src}  alt='Mueble' />
            <p className="legend">Legend 1</p>
       </div>
       <div>
            <img src="../../public/assets/mueble1.jpg"  alt='Mueble' />
            <p className="legend">Legend 1</p>
       </div>
      
    </Carousel> */}


<CarouselProvider
        visibleSlides={2}
        totalSlides={6}
        step={2}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        hasMasterSpinner
        isPlaying
        className={style.carousel}
      >
              <Slider>
          <Slide index={0}> <div>
       <ImageWithZoom src={mueble.src}  />

       </div></Slide>
          <Slide index={1}> <div>
          <ImageWithZoom src={mueble.src}  />

       </div></Slide>
          <Slide index={2}> <div>
          <ImageWithZoom src={mueble.src}  />

       </div></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <DotGroup />
      </CarouselProvider>

    </Layout>
  )
}

export default Product