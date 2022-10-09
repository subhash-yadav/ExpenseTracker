import React from "react";
import "./ExpenseDate.css";
import "./ExpenseItem.css";
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div className='expenseDate'>
                <div className="expenseDate_month">{month}</div>
                <div className="expenseDate_day">{day}</div>
                <div className="expenseDate_year">{year}</div>
            </div>
  )
  }
export default ExpenseDate;
