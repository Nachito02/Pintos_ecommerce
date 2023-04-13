
import { GET_ALL_PRODUCTS, GET_CATEGORIES, GET_PRODUCT } from "../../types"
export default (state:any,action:any) => {

    switch(action.type) {
        case GET_CATEGORIES: 
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
    }

}