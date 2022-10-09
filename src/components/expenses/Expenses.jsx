import React from 'react'
// import Card from '../ui/Card';
import ExpenseItem from './ExpenseItem';
import "./Expenses.css"

const Expenses = (props) => {
  
  return (
    <div className="expenses">

      {
        props.item.map(expense =>(
          <ExpenseItem 
          date ={expense.expenseDate}
          title ={expense.expenseDescp}
          amount= {expense.expenseAmount}/>
        ))
      }
    </div>
  )
}

export default Expenses