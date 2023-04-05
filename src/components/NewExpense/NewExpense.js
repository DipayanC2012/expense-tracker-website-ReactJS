import React from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {

  const submitDataHandler = (expenseData) => {
    const newExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(newExpenseData);
  };
  
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitData={submitDataHandler} />
    </div>
  );
}

export default NewExpense;
