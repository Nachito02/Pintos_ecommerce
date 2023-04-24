import React from "react";
import Layout from "../../components/Layout/Layout";
import { Carousel } from "react-responsive-carousel";
import { SideBySideMagnifier, GlassMagnifier } from "react-image-magnifiers";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import style from './tutorial.module.css'
const Tutorial = () => {
  return (
    <Layout>
       <Carousel className={style.carousel}>
       <GlassMagnifier imageSrc="/assets/sillon.png" alwaysInPlace={true} square={true } magnifierSize={200} >
            <img src="/assets/sillon.png" alt="" />
       </GlassMagnifier>

       <GlassMagnifier imageSrc="/assets/silla2.png"  alwaysInPlace={true} magnifierSize={200}>
            <img src="/assets/silla2.png" alt="" />
       </GlassMagnifier>

       <GlassMagnifier imageSrc="/assets/combo.png"  alwaysInPlace={true}>
            <img src="/assets/combo.png" alt="" />
       </GlassMagnifier>
       </Carousel>
    </Layout>
  );
};

export default Tutorial;
