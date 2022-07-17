import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.expenses.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found...</p>;
  }

  return props.expenses.map((expense) => (
    <ExpenseItem
      className="expenses-list"
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

export default ExpensesList;
