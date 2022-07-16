import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const generateNewExpense = (expensedata) => {
    const expense = {
      ...expensedata,
      id: Math.random().toString(),
    };
    props.onGenerateNewExpense(expense);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSubmitNewExpense={generateNewExpense} />
    </div>
  );
}

export default NewExpense;
