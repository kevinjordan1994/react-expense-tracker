import { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [currentTitle, changeTitle] = useState(``);
  const [currentAmount, changeAmount] = useState(``);
  const [currentDate, changeDate] = useState(``);
  const [formVisible, toggleForm] = useState(false);

  const titleInputHandler = (event) => {
    changeTitle(event.target.value);
  };

  const amountInputHandler = (event) => {
    changeAmount(event.target.value);
  };

  const dateInputHandler = (event) => {
    changeDate(event.target.value);
  };

  const toggleFormVisibility = () => {
    toggleForm(!formVisible);
  };

  const createNewExpense = (event) => {
    event.preventDefault();
    const newExpense = {
      title: currentTitle,
      amount: +currentAmount,
      date: new Date(currentDate),
    };
    props.onSubmitNewExpense(newExpense);
    clearInputFields();
    toggleFormVisibility();
  };

  const clearInputFields = () => {
    changeTitle(``);
    changeAmount(``);
    changeDate(``);
  };

  if (!formVisible) {
    return (
      <div className="new-expense__controls">
        <div className="open-form__button">
          <button onClick={toggleFormVisibility}>Add New Expense</button>
        </div>
      </div>
    );
  }

  if (formVisible) {
    return (
      <form onSubmit={createNewExpense}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={currentTitle}
              onChange={titleInputHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={currentAmount}
              min="0.01"
              step="0.01"
              onChange={amountInputHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={currentDate}
              min="2019-01-01"
              max="2022-31-12"
              onChange={dateInputHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={toggleFormVisibility}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default NewExpenseForm;
