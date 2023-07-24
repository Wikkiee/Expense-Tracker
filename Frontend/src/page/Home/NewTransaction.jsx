import { useEffect, useRef, useState } from "react";
import { useBalance, useSetBalance } from "../../hooks/useBalanceHook";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { ToggleButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import SubmitButton from "../../components/SubmitButton";

export const NewTransaction = () => {
  const [isIncomeSelected, setIncomeSelected] = useState(false);
  const [isInvalidValue, setInvalidValue] = useState(false);
  const { ExpenseUpdate } = useSetBalance();
  const { currentIncome, currentBalance } = useBalance();
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
    ExpenseUpdate({
      Mode: isIncomeSelected ? "Income" : "Expense",
      Amount: Math.abs(currentAmount.current.value),
      Text: currentText.current.value,
      Tag: currentTag.current.value,
    });
  };

  return (
    <div className='w-[95%] ml-6 px-5 py-6 flex justify-center bg-black'>
      <form onSubmit={onClickHandler}>
        <div className='w-full'>
          <div className='w-full h-full flex items-center justify-between'>
            <div className='w-[85%]'>
              <TextField
                type={"number"}
                onChange={(e) => {
                  if (e.target.value > currentBalance) {
                    setInvalidValue(true);
                  } else {
                    setInvalidValue(false);
                  }
                }}
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
            sx={{ margin: "0px 0px 25px  0px" }}
            autoComplete='off'
            className='bg-light-black'
            inputRef={currentText}
            id='filled-basic'
            label='Information'
            variant='filled'
            InputLabelProps={{
              style: { color: "#B3B3B3" },
            }}
            InputProps={{
              style: { color: "#B3B3B3" },
            }}
          />
          <TextField
            fullWidth
            required='true'
            sx={{ margin: "0px 0px 25px  0px" }}
            autoComplete='off'
            className='bg-light-black'
            inputRef={currentTag}
            id='filled-basic'
            label='Tags'
            variant='filled'
            InputLabelProps={{
              style: { color: "#B3B3B3" },
            }}
            InputProps={{
              style: { color: "#B3B3B3" },
            }}
          />
        </div>
        <div className='flex justify-center'>
          <SubmitButton
            Text={"Submit"}
            isInvalidValue={isInvalidValue}
            isIncomeSelected={isIncomeSelected}
          />
        </div>
      </form>
    </div>
  );
};
