
import { ADD_CART, GET_ALL_PRODUCTS, GET_CATEGORIES, GET_PRODUCT, SET_CATEGORIES, UPDATE_CART } from "../../types"
export default (state:any,action:any) => {

    switch(action.type) {
        case SET_CATEGORIES: 
            return {
                ...state, categories: action.payload
            }



        case GET_PRODUCT:
            return {
                ...state, productDetail: action.payload
            } 

            case GET_ALL_PRODUCTS:
                return {
                    ...state, allProducts: action.payload
                } 


                case ADD_CART: 
                return {
                    ...state, cart: [...state.cart, action.payload]
                }

                case UPDATE_CART:
                    return {
                        ...state , cart: action.payload
                    }
    }

}