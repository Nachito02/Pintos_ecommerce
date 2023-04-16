import axios, { all } from "axios";
import { useReducer } from "react";
import productReducer from "./productReducer";
import { GET_ALL_PRODUCTS, GET_CATEGORIES, GET_PRODUCT } from "../../types";
import productContext from "./productContext";

const ProductState = ({ children }: any) => {


  const initialState = {
    categories: null,
    productDetail: null,
    allProducts: null
  }


  const [state, dispatch] = useReducer(productReducer, initialState)


  const getProduct = async () => {
    const options = {
      method: 'GET',
      url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
      params: { lang: 'en', country: 'us', productcode: '0839915011' },
      headers: {
        'X-RapidAPI-Key': 'd54d3f253amsh410aa104bec79e3p1c2a9ejsn8c1e19d8c2ce',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };


    try {
      const response = await axios.request(options);
      const data = response.data;
      dispatch({
        type: GET_PRODUCT,
        payload: data
      })
    } catch (error) {
      console.error(error);
    }
  }


  const getAllProducts = async () => {

      const options = {
        method: 'GET',
        url: 'http://localhost:3001/results',
      };

      try {
        const response = await axios.request(options);
        const data = response.data;
        
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: data
        })
        
      } catch (error) {
        console.error(error);
      }

    }
   
 



  return (
    <productContext.Provider value={{
      productDetail: state.productDetail,
      categories: state.categories,
      allProducts: state.allProducts,
      getAllProducts,
    }}>

      {children}

    </productContext.Provider>

  )
}

export default ProductState