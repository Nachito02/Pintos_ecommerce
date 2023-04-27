import authReducer from "./authReducer"
import {useReducer} from 'react'
import authContext from "./authContext"
import { LOGIN_USER } from "../../types"
import axios from "axios"
const AuthState = ({children}:any) => {
    const initialState = {
        user:null
    }


    const [state,dispatch] = useReducer(authReducer,initialState)

    const setUser = async() => {
        try{
            const response = await axios.get('http://localhost:3000/api/profile')

            if(response.data.user) {
                dispatch({
                    type: LOGIN_USER,
                    payload: response.data.user,
                  });
            }
          
        }catch(error) {
            console.log(error)
        }
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