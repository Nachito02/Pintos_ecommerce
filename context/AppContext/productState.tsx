import axios from "axios";
import { useReducer } from "react";
import productReducer from "./productReducer";
import { GET_CATEGORIES, GET_PRODUCT } from "../../types";
import productContext from "./productContext";

const ProductState = ({children}:any) => {


    const initialState = {
        categories:null,
        productDetail: null
    }


    const [state,dispatch] = useReducer(productReducer, initialState)

    const getCategories = async () =>{
          const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
    params: {lang: 'es', country: 'us'},
    headers: {
      'X-RapidAPI-Key': '0325c4a014msh19346b452589069p14ea52jsn340622083236',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  };
  

  try {
    const response = await axios.request(options);
    const data = response.data;
    dispatch({
        type: GET_CATEGORIES,
        payload: data
    })
  } catch (error) {
    console.error(error);
  }
    }


    const getProduct = async () =>{
      const options = {
        method: 'GET',
        url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/detail',
        params: {lang: 'en', country: 'us', productcode: '0839915011'},
        headers: {
          'X-RapidAPI-Key': '0325c4a014msh19346b452589069p14ea52jsn340622083236',
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

    return (
        <productContext.Provider value={{
          productDetail: state.productDetail,
            categories: state.categories,
            getCategories
        }}>

        {children}

        </productContext.Provider>

    )
}

export default ProductState