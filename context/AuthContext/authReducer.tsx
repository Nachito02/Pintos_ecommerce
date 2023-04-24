import { LOGIN_USER } from "../../types";

export default (state:any,action:any) => {

    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state, user:action.payload
            }
    }

}