import { useBalance } from "../../hooks/useBalanceHook";
import { useSetBalance } from "../../hooks/useBalanceHook";
export const HistoryList = () => {
  const { currentExpenseHistory } = useBalance();
  const {deleteExpenseHistory} = useSetBalance()
  const handleClick = (item)=>{
    console.log("Handle : ");
    console.log(item.Id);
    deleteExpenseHistory(item.Id)
  }
  return (
    <div>
      <h3>History</h3>
      <div>
      {
        currentExpenseHistory.map((item,i)=>{
          return (<div key={i}>
          <h4>{item.Text}</h4>
          <h4 onClick={()=>{
            handleClick(item)
          }}>{item.Amount}</h4>
        </div>)
        })
      }
      </div>
    </div>
  );
};
