import React, { useContext,useState } from 'react';
import './App.css';
import { transactionContext } from './transContext';

const Parent = (event) => {

    let { transaction,addTransaction,deleteTransaction } = useContext(transactionContext);
    let [newDesc,setDesc] = useState('');
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        console.log(newDesc,newAmount);
        if(Number(newAmount) === 0){
            alert('Write value greater than 0');
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc(" ");
        setAmount(0);
    }

    const getIncome = () => {
        let income = 0;
        for(var i=0;i<transaction.length;i++){
            if(transaction[i].amount>0){
                income = income + transaction[i].amount
            }
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for(var i=0;i<transaction.length;i++){
            if(transaction[i].amount<0){
                expense = expense + transaction[i].amount
            }
        }
        return expense;
    }
    

    return (
        <div className="expense-tracker">
            <h2 className="header">Expense Tracker</h2>

    <h3 >Your Balance </h3><p className="balance"> ${getIncome() + getExpense()}</p>
            <div className="expense-column">
    <h4 className="income">INCOME <br />${getIncome()}</h4>
    <h4 className="expense">EXPENSE <br />${getExpense()}</h4>
            </div>
            <br />
            <h4>History</h4>
            <hr />

            <ul className="tansaction-list">
                {transaction.map((transObj, indx) => {
                    return (
                        <li  className={transObj.amount < 0 ? 'minus' : 'plus'}key={indx}>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                            <button 
                          className="delete-btn"  
                           onClick={()=>deleteTransaction(transaction.indx)}>x</button>
                        </li>
                    )
                })}
            </ul>

            <h4>Add new transaction</h4>
            <hr />
            <form className="trans-form" onSubmit={handleAddition}>
                <label>Text

            <input type="text" placeholder="Enter Description" className="text"  onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <br />
                <br />
                <label>
                    Amount<br />[negative=expense,positive=income]
            <input type="number" placeholder="Enter Amount"   onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <br />
                <input type="submit" value="Add Transaction" className="submit" />
            </form>
        </div>
    )
}

export default Parent;