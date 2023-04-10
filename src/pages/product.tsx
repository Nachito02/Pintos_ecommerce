import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "../styles/Product.module.css";
import { Carousel } from "react-responsive-carousel";
import { GlassMagnifier, SideBySideMagnifier } from "react-image-magnifiers";

const Product = ({ data }: any) => {
 console.log(data)
  console.log(product.articlesList[0].galleryDetails[0].baseUrl);

  return (
    <Layout>
      <div className={style.container}>
        <Carousel className={style.slider}>
          {product.articlesList &&
            product.articlesList.length > 0 &&
            product.articlesList[0].galleryDetails &&
            product.articlesList[0].galleryDetails.map((e) => (
              <GlassMagnifier imageSrc={e.baseUrl}>
                <img src={e.baseUrl} alt="Sillón" />
              </GlassMagnifier>
            ))}
        </Carousel>

        <div className={style.info_product}>
          <div className={style.info}>
            <p>{product.name} </p>
            <p>
              {" "}
              {product.redPrice.price} {product.redPrice.currency}{" "}
            </p>

            <p>{product.description}</p>
          </div>
          <div>
            <label htmlFor="">Color:</label>
            <select name="" id="">
              <option value="">Elige una opcion</option>
              <option value="">Elige una opcion</option>
              <option value="">Elige una opcion</option>
            </select>
          </div>

          <input type="text" />

          <button>Añadir al carrito</button>
        </div>
      </div>
    </Layout>
  );
};

export default Product;

export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
    params: { lang: "en", country: "us", productcode: "0839915011" },
    headers: {
      "X-RapidAPI-Key": "0325c4a014msh19346b452589069p14ea52jsn340622083236",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}
