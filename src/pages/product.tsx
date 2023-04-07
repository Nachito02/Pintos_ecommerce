import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "../styles/Product.module.css";
import { Carousel } from "react-responsive-carousel";
import { GlassMagnifier, SideBySideMagnifier } from "react-image-magnifiers";

const Product = () => {
  return (
    <Layout>
      <div className={style.container}>
      <Carousel className={style.slider}>
        <GlassMagnifier imageSrc="./assets/sillon.png">
          <img src="./assets/sillon.png" alt="Sillón" />
        </GlassMagnifier>
        <GlassMagnifier  imageSrc="./assets/sillon.png">
          <img src="./assets/sillon.png" alt="Sillón" />
        </GlassMagnifier>
        <GlassMagnifier  imageSrc="./assets/sillon.png">
          <img src="./assets/sillon.png" alt="Sillón" />
        </GlassMagnifier>

      </Carousel>
      </div>

    </Layout>
  );
};

export default Product;
