import "./App.css";
// import Card from './components/Card';
import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/NewExpense/NewExpenses";
import React, { useState } from "react";

let Dummy_Data = [
  {
    id: 'e1',
    expenseDate: new Date(2021, 3, 10),
    expenseDescp: "Room Rent",
    expenseAmount: 300,
  },
  {
    id: 'e2',
    expenseDate: new Date(2021, 3, 10),
    expenseDescp: "School Fees",
    expenseAmount: 300,
  },
  {
    id: 'e3',
    expenseDate: new Date(2021, 3, 10),
    expenseDescp: "Bike Servicing",
    expenseAmount: 300,
  },
  {
    id: 'e4',
    expenseDate: new Date(2021, 11, 10),
    expenseDescp: "Cloth Expenses",
    expenseAmount: 300,
  },
];

function App() {
  const [expense, setExpense] = useState(Dummy_Data);
  const enteredExpensesData = (enteredNewExpenseData) => {
    const updatedData = [enteredNewExpenseData, ...expense];
    setExpense(updatedData);
  };
  return (
    <div className="App">
      <NewExpenses newExpenseData={enteredExpensesData} />
      <Expenses item={expense} />
    </div>
  );
}

export default App;
