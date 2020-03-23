import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext)

    const totalIncome = transactions.map(transaction => transaction.amount > 0 ? transaction.amount : 0)
        .reduce((acc, item) => acc += item, 0);
    const totalExpense = transactions.map(transaction => transaction.amount < 0 ? transaction.amount : 0)
        .reduce((acc, item) => acc += item, 0);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${totalIncome.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${(Math.abs(totalExpense)).toFixed(2)}</p>
            </div>
        </div>
    )
}
