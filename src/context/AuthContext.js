import { createContext,useReducer } from "react";
import { useEffect } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext()
export const authReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN' : 
            return {...state, user:action.payload}
        case 'LOGOUT' :
            return {...state, user: null}

        case 'AUTH_IS_READY':
            return {...state, user: action.payload, authisReady: true}
        default: 
            return state

    } 
}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authisReady: false
    })
    useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged(user => {
        dispatch({type: 'AUTH_IS_READY', payload: user })
        unsub()
    })
    }, []);

    console.log('authcontext state', state);
    return (
        <AuthContext.Provider value = {{ ...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}