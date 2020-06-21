import React,{ createContext,useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransaction = [
    { amount: 1000, desc: "Cash" },
    { amount: -200, desc: "Bank" },
    { amount: -300, desc: "Camera" }

]

export const transactionContext = createContext(initialTransaction);

export const TransactionProvider = ({children}) => {
    
    let [state, dispatch] = useReducer(TransactionReducer,initialTransaction);
    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSACTION" ,
            payload: {
                amount : transObj.amount,
                desc: transObj.desc
            },
        });
    }
    function deleteTransaction(indx){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:indx
        });
    }

    return(
        <transactionContext.Provider value={{
            transaction : state,
            addTransaction,
            deleteTransaction
            
        }}>
            {children}
        </transactionContext.Provider>
    )
}