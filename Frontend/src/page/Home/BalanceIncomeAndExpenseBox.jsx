import { useBalance } from "../../hooks/useBalanceHook";
import { AmountDisplay } from "../../components/ExpenseBlocks.jsx";

export const BalanaceIncomeAndExpenseBox = () => {
  const { currentIncome, currentBalance, currentExpense } = useBalance();
  return (
    <div className='flex justify-around'>
      <div>
        <AmountDisplay Name='Balance' Amount={currentBalance} />
      </div>
      <div className='px-[22px]'>
        <AmountDisplay Name='Income' Amount={currentIncome} />
      </div>
      <div>
        <AmountDisplay Name='Expense' Amount={currentExpense} />
      </div>
    </div>
  );
};
