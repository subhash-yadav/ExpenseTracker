import React from 'react'
import ExpensesForm from './ExpensesForm'
import "./NewExpenses.css"

const NewExpenses = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) =>{
      // console.log(enteredExpenseData)
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      }
      props.newExpenseData(expenseData);
  }
  return (
    <div>
        <div className='NewExpenses'>
            <ExpensesForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    </div>
  )
}

export default NewExpenses