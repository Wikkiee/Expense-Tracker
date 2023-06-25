import { useRef } from "react";
import { useSetBalance } from "../../hooks/useBalanceHook";
export const NewTransaction = () => {
  const {ExpenseUpdate} = useSetBalance();
  const currentText = useRef();
  const currentAmount = useRef();
  const onClickHandler = (event) => {
    event.preventDefault();
    ExpenseUpdate({
      Text: currentText.current.value,
      Amount: currentAmount.current.value,
    });
  };
  return (
    <div>
      <form onSubmit={onClickHandler}>
        <h3>Add new transaction</h3>
        <h4>Text</h4>
        <input ref={currentText} placeholder='Enter the product name' />
        <h4>Amount</h4>
        <input ref={currentAmount} placeholder='Enter the amount' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
