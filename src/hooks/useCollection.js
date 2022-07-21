import { projectFirestore } from "../firebase/config";
import { useState,useEffect, useRef } from "react";


export const useCollection = (collection, _query, _orderBy) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)
    const query = useRef(_query).current
    const orderBy = useRef(_orderBy).current 
    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        if(query){
            ref = ref.where(...query)
        }
        if(orderBy){
            ref = ref.orderBy(...orderBy, )
        }
        const unsubscribe = ref.onSnapshot((snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
                    //update state
        setDocuments(results)
        setError(null)
        }, (err) => {
            console.log(err)
            setError('could not fetch data')
        })


        return () => unsubscribe() 
    }, [collection, query, orderBy])
    return {documents, error}
}