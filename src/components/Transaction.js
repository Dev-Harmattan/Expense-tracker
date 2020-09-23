import React, { useContext } from 'react';
import { GlobaContext } from '../context/GlobalState';


const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobaContext);

  const sign = transaction.amount > 0 ? "+" : "-";
  return (
    <li className={transaction.amount > 0 ? "plus" : 'minus'}>
      {transaction.text} <span>{sign}${Math.abs(transaction.amount)}
      </span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction;
