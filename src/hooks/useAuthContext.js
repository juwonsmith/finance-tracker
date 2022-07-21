import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const  useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('use Authcontext must be inside a authcontextprovider')
    }
    return context
}