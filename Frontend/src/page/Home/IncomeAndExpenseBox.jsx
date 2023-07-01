import { useBalance } from "../../hooks/useBalanceHook";
export const IncomeAndExpenseBox = () => {
  const {currentIncome,currentBalance,currentExpense} = useBalance();
  return (
    <div>
      <div>
        <h3>Balance </h3>
        <h4>{currentBalance} $</h4>
      </div>
      <div>
        <h2> Income </h2>
        <h3> {currentIncome}$</h3>
      </div>
      <div>
        <h3>Expense</h3>
        <h3>{currentExpense}$</h3>
      </div>
    </div>
  );
};
