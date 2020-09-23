import React, {useContext} from 'react';
import {GlobaContext} from '../context/GlobalState';
import Transaction from './Transaction';

const TransanctionList = () => {
    const {transactions} = useContext(GlobaContext);
    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
            {transactions.map( transaction => (
                <Transaction key={transaction.id} transaction={transaction}/>
            ))}
                
            </ul>
        </>
    )
}
export default TransanctionList;
