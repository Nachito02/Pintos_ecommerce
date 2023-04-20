import axios, { all } from "axios";
import { useReducer } from "react";
import productReducer from "./productReducer";
import { ADD_CART, GET_ALL_PRODUCTS, UPDATE_CART, GET_PRODUCT,SET_CATEGORIES } from "../../types";
import productContext from "./productContext";

const ProductState = ({ children }: any) => {

  const initialState = {
    categories: null,
    productDetail: null,
    allProducts: null,
    cart: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) : []
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
   
    
    const  addCart = (product:any, quantity:number)=> { 

      const existingProduct = state.cart.findIndex((p:any) => p.product.code === product.code)

      if(existingProduct !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingProduct].quantity = quantity;
        dispatch({
          type: UPDATE_CART,
          payload: updatedCart
        });
      } else {
        dispatch({
          type: ADD_CART,
          payload: {product, quantity}
        })
      }

       

      
    }
  return (
    <productContext.Provider value={{
      cart: state.cart,
      productDetail: state.productDetail,
      categories: state.categories,
      allProducts: state.allProducts,
      getAllProducts,
      setCategories,
      addCart
    }}>

      {children}

    </productContext.Provider>

  )
}

export default ProductState