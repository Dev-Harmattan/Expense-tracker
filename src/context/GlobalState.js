import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial stage
const initialState = {
  transactions: []
}

//create context
export const GlobaContext = createContext(initialState);

//create provider
export const GlobalProvider = ({ children }) => {
  const [state, disPatch] = useReducer(AppReducer, initialState);


  //action
  function deleteTransaction(id) {
    disPatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    disPatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  return (
    <GlobaContext.Provider value={
      {
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }
    }>
      {children}
    </GlobaContext.Provider>
  )
}


