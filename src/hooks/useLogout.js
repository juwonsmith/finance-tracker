import { useState,useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [ispending,setIsPending] = useState(false)
    const {dispatch} = useAuthContext()
    const [iscancelled, setisCancelled] = useState(false)
    const logout = async () =>{
        setError(null)
        setIsPending(true)

        //signing users out

        try{
            await projectAuth.signOut()
            dispatch({type: 'LOGOUT'})

            
            if(!iscancelled){
                setIsPending(false)
                setError(null)
            }

        }catch(err){
            console.log(err.message)
            setError(err.message)
            setError(false)
        }
    }
    useEffect(() => {
        
        return () => {
            setisCancelled(true)
        };
    }, []);
    return {logout,error,ispending}
}