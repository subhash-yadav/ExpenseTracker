import React, { useState } from "react";
// import Card from './ui/Card';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div>
      <div className="container">
        <ExpenseDate date={props.date} />
        <div className="descp">{props.title}</div>
        <div className="amount">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
