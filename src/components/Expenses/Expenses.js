import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [FilteredYear, setFilteredYear] = useState("2020");
  const saveExpenseFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log("in expenses.js", selectedYear);
  };
  console.log(props.items, "propsss");
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === FilteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={FilteredYear}
          onSaveExpenseFilter={saveExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />
      </Card>
    </div>
  );
};

export default Expenses;
