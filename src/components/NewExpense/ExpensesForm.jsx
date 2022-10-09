import React, { useState } from 'react'
import "./ExpensesForm.css"
const ExpensesForm = (props) => {
 const [enteredtitle, setenteredtitle] = useState("");
 const [enteredamount, setenteredamount] = useState("");  
 const [entereddate, setentereddate] = useState("");
    const titleChangeHandler = (e) => {
        setenteredtitle(e.target.value)
    }; 
    const amountChangeHandler = (e) => {
        setenteredamount(e.target.value)
    };
    const dateChangeHandler = (e) => {
        setentereddate(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData ={
            expenseDate: new Date (entereddate),
            expenseDescp: enteredtitle,
            expenseAmount: enteredamount
        }
        props.onSaveExpenseData(expenseData);
        setenteredtitle("");
        setenteredamount("");
        setentereddate("");
    };
  return (
    <div>
        <form action="" onSubmit={submitHandler} className='form'>
            <div className='title'>
                <label htmlFor="" className='textField'>Title</label>
                <input type="text" name='' value={enteredtitle} id="" className='inputField'onChange={titleChangeHandler}/>
            </div>
            <div className='Amount'>
                <label htmlFor="" className='textField'>Amount</label>
                <input type="number" name='' value={enteredamount} id="" className='inputField'onChange={amountChangeHandler}/>
            </div>
            <div className='Amount'>
                <label htmlFor="" className='textField'>Date</label>
                <input type="date" name='' value={entereddate} id="" className='inputField'onChange={dateChangeHandler}/>
            </div>
            <div className='button'>
                <button className="btn">Add Expense</button>
            </div>
            
        </form>
    </div>
  )
}

export default ExpensesForm