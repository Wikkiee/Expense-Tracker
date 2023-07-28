import { useEffect, useRef, useState } from "react";
import { useBalance, useSetBalance } from "../../hooks/useBalanceHook";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { ToggleButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export const NewTransaction = () => {
  const { ExpenseUpdate } = useSetBalance();
  const { currentIncome, currentBalance } = useBalance();
  const [isDisabled, setDisabled] = useState(false);
  const [lastValue, setLastValue] = useState(0);
  const [isInvalidValue, setInvalidValue] = useState(false);
  const [isIncomeSelected, setIncomeSelected] = useState(false);
  const [isNotRequiredFilled, setNotRequiredFilled] = useState(false);
  const [isWarning,setWarning] = useState("#B3B3B3")
  const currentAmount = useRef();
  const currentText = useRef();
  const currentTag = useRef();
  const selectIconBgColor = isIncomeSelected ? "primary" : "white";
  useEffect(() => {
    if (currentIncome === 0) {
      setIncomeSelected(true);
    }
  }, [currentIncome]);
  const onClickHandler = () => {
    if (
      currentText.current.value === "" ||
      currentAmount.current.value === "" ||
      currentTag.current.value === ""
    ) {
      setNotRequiredFilled(true);
      setWarning('#FF6D49')
    } else {
      ExpenseUpdate({
        Mode: isIncomeSelected ? "Income" : "Expense",
        Amount: Math.abs(currentAmount.current.value),
        Text: currentText.current.value,
        Tag: currentTag.current.value.toUpperCase(),
      });
      currentText.current.value = "";
      currentAmount.current.value = "";
      currentTag.current.value = "";
    }
  };

  return (
    <div className='w-[95%] ml-6 px-5 py-6 flex justify-center bg-black'>
      <form>
        <div className='w-full'>
          <div className='w-full h-full flex items-center justify-between'>
            <div className='w-[85%]'>
              <TextField
                type={"number"}
                onChange={(e) => {
                  setNotRequiredFilled(false)
                  setWarning("#B3B3B3")
                  if (
                    parseInt(e.target.value) + currentBalance > 1000000 &&
                    isIncomeSelected
                  ) {
                    e.target.value = lastValue;
                  } else {
                    setDisabled(false);
                  }
                  if (e.target.value > currentBalance) {
                    setInvalidValue(true);
                  } else {
                    setInvalidValue(false);
                  }
                  if (e.target.value !== lastValue) {
                    setLastValue(() => parseInt(e.target.value));
                  }
                }}
                disabled={isDisabled}
                error={isInvalidValue & !isIncomeSelected}
                fullWidth
                required='true'
                autoComplete='off'
                className='bg-light-black n'
                inputRef={currentAmount}
                id='filled-basic'
                label={
                  isInvalidValue & !isIncomeSelected
                    ? "Please check the balance"
                    : "Amount"
                }
                variant='filled'
                sx={{ margin: "0px 0px 25px  0px" }}
                InputLabelProps={{
                  style: { color: "#B3B3B3" },
                }}
                InputProps={{
                  style: { color: "#B3B3B3" },
                  startAdornment: (
                    <InputAdornment focused position='start'>
                      <span className='text-light-black'>₹</span>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <Tooltip
              placement='top'
              title={
                isIncomeSelected ? "Income Mode is ON" : "Expense Mode is ON"
              }
              arrow
            >
              <ToggleButton
                value={"toggle"}
                color='info'
                sx={{
                  backgroundColor: "#242424",
                  marginBottom: "auto",
                  marginTop: "4px",
                }}
                selected={isIncomeSelected}
                onChange={() => {
                  setIncomeSelected(!isIncomeSelected);
                }}
              >
                <AccountBalanceIcon
                  fontSize='small'
                  sx={{ color: selectIconBgColor }}
                />
              </ToggleButton>
            </Tooltip>
          </div>
          <TextField
            fullWidth
            required='true'
            onChange={(e)=>{
              setNotRequiredFilled(false)
              setWarning("#B3B3B3")
              if(e.target.value.length >20){
                e.target.value = e.target.value.slice(0,-1)
              }
            }}
            sx={{ margin: "0px 0px 25px  0px" }}
            autoComplete='off'
            className='bg-light-black'
            inputRef={currentText}
            id='filled-basic'
            label={isNotRequiredFilled? "Please Enter the Information":'Information'}
            variant='filled'
            InputLabelProps={{
              style: { color: isWarning },
            }}
            InputProps={{
              style: { color: "#B3B3B3" },
            }}
          />
          <TextField
            fullWidth
            required='true'
            onChange={(e)=>{
              setNotRequiredFilled(false)
              setWarning("#B3B3B3")
              if(e.target.value.length >10){
                e.target.value = e.target.value.slice(0,-1)
              }
            }}
            sx={{ margin: "0px 0px 25px  0px" }}
            autoComplete='off'
            className='bg-light-black'
            inputRef={currentTag}
            id='filled-basic'
            label={isNotRequiredFilled? 'Please Enter the Tag':'Tag'}
            variant='filled'
            InputLabelProps={{
              style: { color: isWarning },
            }}
            InputProps={{
              style: { color: "#B3B3B3" },
            }}
          />
        </div>
        <div className='flex justify-center'>
          <button
            onClick={onClickHandler}
            disabled={isInvalidValue & !isIncomeSelected || isNotRequiredFilled}
            className='bg-light-black py-2 px-12 rounded transition-colors hover:bg-white hover:text-black ease-in duration-300'
            type='button'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
