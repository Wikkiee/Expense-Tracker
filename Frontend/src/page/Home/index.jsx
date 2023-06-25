import { IncomeAndExpenseBox } from "./IncomeAndExpenseBox.jsx";
import { HistoryList } from "./HistoryList.jsx";
import { NewTransaction } from "./NewTransaction.jsx";
import { useBalance } from "../../hooks/useBalanceHook.jsx";

export const Home = () => {
  const { currentBalance} = useBalance();
  return (
    <>
      <h1>Expense Tracker</h1>
      <h3>Your balance</h3>
      <h2>{currentBalance}$</h2>
      <IncomeAndExpenseBox />
      <HistoryList />
      <NewTransaction />
    </>
  );
};
