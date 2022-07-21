import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = ( ) => {
    const [error, setError] = useState(null)
    const [ispending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const [iscancelled, setisCancelled] = useState(false)
    
    const login = async (email, password) =>{
        setError(null)
        setIsPending(true)
    
            try{
                //const res =  projectAuth.signInWithEmailAndPassword(email, password)
                const res = await projectAuth.signInWithEmailAndPassword(email, password)
                dispatch({type: 'LOGIN', payload: res.user})
                

                
                if(!iscancelled){
                    setIsPending(false)
                    setError(null)
                }

            }catch(err){
                if(!iscancelled){
                    console.log(err.message)
                    setIsPending(false)
                    setError(err.message)
                }

            }
            }
            useEffect(() => {
                return () => {
                setisCancelled(true)
            };
            }, []);
    return {login,error,ispending}
}