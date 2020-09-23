import React, {useContext} from 'react';
import { GlobaContext } from '../context/GlobalState';


const Balance = () => {
    const {transactions} = useContext(GlobaContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total =  amounts.reduce( (acc, currentAmount) => (acc+=currentAmount), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${total}</h1>
        </>
    )
}

export default Balance;