import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
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
        {filteredExpenses.length === 0 ? (
          <p>No Expenses Found...</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
