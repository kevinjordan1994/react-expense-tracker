import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date().toDateString();
  const expenseTitle = `Shopping`;
  const amount = 29.93;

  return (
    <div className="expense-item">
      <div>{date}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
