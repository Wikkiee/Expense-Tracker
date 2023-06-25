import React, { useState } from "react";
import { nanoid } from "nanoid";
export const ExpenseTrackerContext = React.createContext();
export const ExpenseUpdateContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ExpenseProvider = ({ children }) => {
  const [currentBalance, setCurrentBalanace] = useState(0);
  const [currentExpense, setCurrentExpense] = useState(0);
  const [currentIncome, setCurrentIncome] = useState(0);
  const [currentExpenseHistory, setCurrentExpenseHistory] = useState([]);

  const ExpenseUpdate = (value) => {
    const { Text, Amount } = value;
    if (Amount.toString()[0] == "+") {
      setCurrentIncome(currentIncome + parseInt(Amount));
      setCurrentBalanace(currentBalance + parseInt(Amount));
      setCurrentExpenseHistory((prev) => {
        return [
          ...prev,
          { Id: nanoid(), Text: Text, Amount: parseInt(Amount) },
        ];
      });
      console.log("Income");
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
