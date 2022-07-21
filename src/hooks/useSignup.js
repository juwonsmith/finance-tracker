import { useState,useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from '../hooks/useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()
  const [iscancelled, setisCancelled] = useState(false)
  const signup = async (email, password, displayName) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add display name to user
      await res.user.updateProfile({ displayName })

      //dispatch login action
      dispatch(
        {type: 'LOGIN', payload: res.user}
      )
      if(!iscancelled){
        setIsPending(false)
        setError(null)
    }

    } 
    catch(err) {
      if(!iscancelled){
        setIsPending(false)
        setError(null)
    }
  }
  }

  useEffect(() => {  
    return () => {
        setisCancelled(true)
    };
}, []);

  return { signup, error, isPending }
}