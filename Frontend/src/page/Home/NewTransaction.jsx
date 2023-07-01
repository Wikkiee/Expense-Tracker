import { useRef } from "react";
import { useSetBalance } from "../../hooks/useBalanceHook";
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

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


{/* <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl> */}