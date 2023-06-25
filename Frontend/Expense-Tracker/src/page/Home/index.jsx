import { IncomeAndExpenseBox } from "./IncomeAndExpenseBox.jsx";
import { HistoryList } from "./HistoryList.jsx";
import { NewTransaction } from "./NewTransaction.jsx";
import {
  useBalance,
  useSetBalance,
} from "../../context/ExpenseTrackerContext.jsx";

export const Home = () => {
  const balance = useBalance();
  const setBalance = useSetBalance();
  return (
    <>
      <h1>Expense Tracker</h1>
      <h3>Your balance</h3>
      <h2>{balance}</h2>
      <button
        onClick={() => {
          setBalance(balance + 1);
        }}
      >
        +
      </button>
      <IncomeAndExpenseBox />
      <HistoryList />
      <NewTransaction />
    </>
  );
};
