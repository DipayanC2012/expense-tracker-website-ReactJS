import React,{useState} from "react";
import './ExpenseForm.css'

function ExpenseForm (props){

    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    const titleHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }
    const dateHandler=(event)=>{
        setEnteredDate(event.target.value);
    }
    
    const submitHandler=(event)=>{
        event.preventDefault();//prevents reloading of page on each submit of form

        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSubmitData(expenseData); 
        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');
       
        
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control" value={enteredTitle} onChange={titleHandler}>
                    <label>Title</label>
                    <input type ='text'/>
                </div>
                <div className="new-expense__control" value={enteredAmount} onChange={amountHandler}>
                    <label>Amount</label>
                    <input type ='number' min='0.01' step='0.01'/>
                </div>
                <div className="new-expense__control" value={enteredDate} onChange={dateHandler}>
                    <label>Date</label>
                    <input type ='date' min='2020-01-01' step='2023-12-31'/>
                </div> 
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;