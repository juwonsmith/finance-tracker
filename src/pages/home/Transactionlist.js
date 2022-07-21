import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore'

export default function Transactionlist({ transactions }) {
    const {deletedocument} = useFirestore('transactions')

  return (
      <ul className={styles.transactions}>
        {transactions.map(transaction => (
            <li key={transaction.id}>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>${transaction.Amount}</p>
                <button onClick={() => deletedocument(transaction.id)}>X</button>
            </li>
        ))}
      </ul>
  )
}
