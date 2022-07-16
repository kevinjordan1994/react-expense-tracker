import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./Expenses.css";

function Expenses(props) {
  // const today = new Date().getFullYear().toString();
  const [currentYear, setNewFilterYear] = useState(`2020`);

  const filterYear = (year) => {
    setNewFilterYear(year);
    console.log(year, currentYear);
  };

  return (
    <div className="expenses">
      <ExpenseFilter selectedYear={currentYear} onFilterYear={filterYear} />
      <Card>
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
