import authReducer from "./authReducer"
import {useReducer} from 'react'
import authContext from "./authContext"
import { LOGIN_USER } from "../../types"
const AuthState = ({children}:any) => {
    const initialState = {
        user:null
    }


    const [state,dispatch] = useReducer(authReducer,initialState)

    const setUser = (user:any) => {
        dispatch({
          type: LOGIN_USER,
          payload: user,
        });
      };
    return (
        <authContext.Provider value={{
            user:state.user,
            setUser
        }}>
            {children}
        </authContext.Provider>
    )
} 

export default AuthState