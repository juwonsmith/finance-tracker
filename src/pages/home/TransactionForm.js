import { useState,useEffect } from "react"
import { useFirestore } from "../../hooks/useFirestore"

export default function TransactionForm({uid}) {
    const [name, setname] = useState('')
    const [Amount, setAmount] = useState('')
    const {addDocument, response} = useFirestore('transactions')

    const handlesubmit = (e) => {
        e.preventDefault()
        // console.log({name, Amount})
        addDocument({
            uid,
            name,
            Amount
        })
    }
    useEffect(() => {
        if (response.success){
            setname('')
            setAmount('')
        }
    }, [response.success]);

  return (
    <>
        <h3>add a transaction</h3>
        <form onSubmit={handlesubmit}>
            <label>
                <span>Transaction name</span>
                <input type='text' required onChange={(e) => setname(e.target.value)} value={name}/>
            </label>

            <label>
                <span>Amount ($)</span>
                <input type='number' required onChange={(e) => setAmount(e.target.value)} value={Amount}/>
            </label>

            <button>Add transaction</button>
        </form>
    </>
  )
}
