
import { ADD_CART, GET_ALL_PRODUCTS, UPDATE_QUANTITY, GET_PRODUCT, SET_CATEGORIES, UPDATE_CART } from "../../types"
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

                    case UPDATE_QUANTITY:
                        const updatedCart = state.cart.map((item:any) =>
                          item.product.code === action.payload.code
                            ? { ...item, quantity: action.payload.quantity }
                            : item
                        );
                        console.log(updatedCart)

                        localStorage.setItem('cart', JSON.stringify(updatedCart))
                        return {
                          ...state,
                          cart: updatedCart,
                        };
    }

}