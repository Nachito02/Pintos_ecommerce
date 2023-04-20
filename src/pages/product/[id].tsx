import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Layout from "../../../components/Layout/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import style from "../../styles/Product.module.css";
import { Carousel } from "react-responsive-carousel";
import { GlassMagnifier, SideBySideMagnifier } from "react-image-magnifiers";
import productContext from "../../../context/AppContext/productContext";

const Product = ({ data, query }: any) => {


    const ProductContext = useContext(productContext)

    const {cart, addCart} = ProductContext

  const [quantinty, setQuantity] = useState(1)
    const {product} = data

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

  const  handleIncrement = ()=> { 
    if(quantinty >= 5) return
    setQuantity(quantinty + 1)
  }

  const  handleDecrement = ()=> { 
    if(quantinty <= 1) return

    setQuantity(quantinty - 1)
  }

  useEffect(() => {
    console.log(cart)
  } ,[cart])
  return (
    <Layout>
      <div className={style.container}>
         <Carousel className={style.slider} width={400}>
          {product.articlesList &&
            product.articlesList.length > 0 &&
            product.articlesList[0].galleryDetails &&
            product.articlesList[0].galleryDetails.map((e:any, index:number) => (
              <SideBySideMagnifier key={index} imageSrc={e.baseUrl} alwaysInPlace={true}>
                <img src={e.baseUrl} alt="Sillón" />
              </SideBySideMagnifier>
            ))}
        </Carousel> 

         <div className={style.info_product}>
          <div className={style.info}>
            <p>{product.name} </p>
            <p>
              
              {product.whitePrice.price} {product.whitePrice.currency}
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

          <div>
            <button onClick={handleIncrement}>+</button>
          <input type="number" value={quantinty} readOnly min={1} />
          <button onClick={handleDecrement}>-</button>

          </div>

          <button onClick={ () => addCart(product, quantinty) }>Añadir al carrito</button>
        </div>
      </div>
    </Layout>
  );
};


export async function getServerSideProps({query}:any) {

  console.log(query)
  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail",
    params: { lang: "en", country: "us", productcode: query.id },
    headers: {
      'X-RapidAPI-Key': 'd54d3f253amsh410aa104bec79e3p1c2a9ejsn8c1e19d8c2ce',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    const data = response.data;
    return { props: { data, query } };
  } catch (error) {
    console.error(error);
    return { props: { data: null } };
  }
}

    export default Product;