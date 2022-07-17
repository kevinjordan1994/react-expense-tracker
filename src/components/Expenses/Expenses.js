import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  // const today = new Date().getFullYear().toString();
  const [currentYear, setNewFilterYear] = useState(`All`);

  const filterYear = (year) => {
    setNewFilterYear(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    if (currentYear === `All`) return true;
    return expense.date.getFullYear().toString() === currentYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear={currentYear} onFilterYear={filterYear} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
