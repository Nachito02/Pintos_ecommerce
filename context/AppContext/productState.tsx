import axios, { all } from "axios";
import { useReducer } from "react";
import productReducer from "./productReducer";
import { GET_ALL_PRODUCTS, GET_CATEGORIES, GET_PRODUCT,SET_CATEGORIES } from "../../types";
import productContext from "./productContext";

const ProductState = ({ children }: any) => {

  const initialState = {
    categories: null,
    productDetail: null,
    allProducts: null
  }

  const [state, dispatch] = useReducer(productReducer, initialState)


  const setCategories = () => { 

      const catArray = state.allProducts.reduce((categorias:any, producto:any) => {
        if (!categorias.includes(producto.categoryName)) {
          categorias.push(producto.categoryName);
        }
        return categorias;
      }, []);
      
      dispatch({
        type: SET_CATEGORIES,
        payload:catArray
      })

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
      setCategories
    }}>

      {children}

    </productContext.Provider>

  )
}

export default ProductState