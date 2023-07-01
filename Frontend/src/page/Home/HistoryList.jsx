import { useBalance } from "../../hooks/useBalanceHook";
import { useSetBalance } from "../../hooks/useBalanceHook";
export const HistoryList = () => {
  const { currentExpenseHistory } = useBalance();
  const {deleteExpenseHistory} = useSetBalance()
  // eslint-disable-next-line no-unused-vars
  const handleClick = (item)=>{
    console.log("Handle : ");
    console.log(item.Id);
    deleteExpenseHistory(item.Id)
  }
  return (
    <div>
      <h3>History</h3>
      <div>
      <ul>
      {
        currentExpenseHistory.map((item,i)=>{
          return (<li key={i}>
          <h4>{item.Text}       {item.Amount}</h4>
        </li>)
        })
      }
      </ul>
      </div>
    </div>
  );
};
{/* <h4 onClick={()=>{
            handleClick(item)
          }}>{item.Amount}</h4> */}