import { useBalance } from "../../hooks/useBalanceHook";
export const IncomeAndExpenseBox = () => {
  const {currentIncome,currentExpense} = useBalance();
  return (
    <div>
      <div>
        <h3> Income </h3>
        <h3> {currentIncome}$</h3>
      </div>
      <div>
        <h3>Expense</h3>
        <h3>{currentExpense}$</h3>
      </div>
    </div>
  );
};
