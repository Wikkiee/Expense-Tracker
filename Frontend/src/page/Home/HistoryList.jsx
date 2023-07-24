import { HistoryItems } from "../../components/ExpenseBlocks";
import { useBalance } from "../../hooks/useBalanceHook";
import { useSetBalance } from "../../hooks/useBalanceHook";

export const HistoryList = () => {
  const { deleteExpenseHistory } = useSetBalance();
  const { currentExpenseHistory } = useBalance();

  const handleClick = (Id) => {
    deleteExpenseHistory(Id);
  };
  return (
    <div>
      <ul>
        {currentExpenseHistory.length > 0 ? (
          currentExpenseHistory.map((item, i) => {
            return (
              <HistoryItems
                key={i}
                Icon={item.Icon}
                Amount={item.Amount}
                Text={item.Text}
                Tag={item.Tag}
                Time={item.Time}
                Date={item.Date}
                handleClick={handleClick}
                Id={item.Id}
              />
            );
          })
        ) : (
          <div className='flex justify-center'>
            <div className='w-[95%] bg-light-black h-[250px] rounded flex justify-center items-center'>
              <h2 className='text-light-black'>No transactions</h2>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
};
