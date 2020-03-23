import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial state 
const initialState = {
    transactions: [
        {text: 'paycheck', amount: 4000, id: 1},
        {text: 'rent', amount: -1000, id: 2},
        {text: 'groceries', amount: -80, id: 3}      
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value = {{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
}