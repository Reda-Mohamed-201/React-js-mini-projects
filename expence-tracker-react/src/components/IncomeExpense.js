import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(amount => amount > 0).reduce((acc, amount) =>acc+amount , 0);
  const expense = amounts.filter(amount => amount < 0).reduce((acc, amount) =>acc+amount , 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p  className="money plus">
          ${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p  className="money minus">
          ${Math.abs(expense)}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpense;
