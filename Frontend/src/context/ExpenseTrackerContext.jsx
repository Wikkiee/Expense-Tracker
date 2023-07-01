import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
export const ExpenseTrackerContext = React.createContext();
export const ExpenseUpdateContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ExpenseProvider = ({ children }) => {
  const initialData = JSON.parse(localStorage.getItem("_trackerData_"))
  console.log(initialData);
  const [currentBalance, setCurrentBalanace] = useState((initialData != null)? initialData.currentBalance : 0);
  const [currentExpense, setCurrentExpense] = useState((initialData != null)? initialData.currentExpense : 0);
  const [currentIncome, setCurrentIncome] = useState((initialData != null)? initialData.currentIncome : 0);
  const [currentExpenseHistory, setCurrentExpenseHistory] = useState((initialData != null)? initialData.currentExpenseHistory : []);
  useEffect(()=>{
    localStorage.setItem(
      "_trackerData_",
      JSON.stringify({
        currentExpenseHistory: currentExpenseHistory,
        currentBalance: currentBalance,
        currentExpense: currentExpense,
        currentIncome: currentIncome,
      })
    );
  },[currentExpenseHistory])

  const ExpenseUpdate = (value) => {
    const { Text, Amount } = value;
    if (Amount.toString()[0] == "+") {
      setCurrentIncome(() => {
        return currentIncome + parseInt(Amount);
      });
      setCurrentBalanace(() => {
        return currentBalance + parseInt(Amount);
      });
      setCurrentExpenseHistory((prev) => {
        return [
          ...prev,
          { Id: nanoid(), Text: Text, Amount: parseInt(Amount) },
        ];
      });
    } else {
      setCurrentExpense(() => {
        return currentExpense + parseInt(Amount);
      });
      setCurrentBalanace(() => {
        return currentBalance - parseInt(Amount);
      });
      setCurrentExpenseHistory((prev) => {
        return [...prev, { Id: nanoid(), Text: Text, Amount: Amount }];
      });
    }
  };
  const deleteExpenseHistory = (id) => {
    const items = currentExpenseHistory.filter((item) => {
      console.log(id);
      if (item.Id === id) {
        setCurrentBalanace(currentBalance + parseInt(item.Amount));
        setCurrentExpense(currentExpense - parseInt(item.Amount));
      }
      return item.Id != id;
    });
    console.log("Filtred");
    console.log(items);
    setCurrentExpenseHistory(items);
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        currentIncome,
        currentBalance,
        currentExpense,
        currentExpenseHistory,
      }}
    >
      <ExpenseUpdateContext.Provider
        value={{ ExpenseUpdate, deleteExpenseHistory }}
      >
        {children}
      </ExpenseUpdateContext.Provider>
    </ExpenseTrackerContext.Provider>
  );
};
