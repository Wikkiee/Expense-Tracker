import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

export const ExpenseTrackerContext = React.createContext();
export const ExpenseUpdateContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const ExpenseProvider = ({ children }) => {
  const initialData = JSON.parse(localStorage.getItem("_trackerData_"));
  const [currentBalance, setCurrentBalanace] = useState(
    initialData != null ? initialData.currentBalance : 0
  );
  const [currentExpense, setCurrentExpense] = useState(
    initialData != null ? initialData.currentExpense : 0
  );
  const [currentIncome, setCurrentIncome] = useState(
    initialData != null ? initialData.currentIncome : 0
  );
  const [currentExpenseHistory, setCurrentExpenseHistory] = useState(
    initialData != null ? initialData.currentExpenseHistory : []
  );
  useEffect(() => {
    const data = {
      currentExpenseHistory: currentExpenseHistory,
      currentBalance: currentBalance,
      currentExpense: currentExpense,
      currentIncome: currentIncome,
    };
    localStorage.setItem("_trackerData_", JSON.stringify(data));
    axios({
      method:"put",
      url:`${import.meta.env.VITE_API_URL}/update`,
      data:data,
      withCredentials:true
    })
  }, [currentBalance, currentExpense, currentExpenseHistory, currentIncome]);

  const ExpenseUpdate = (value) => {
    const { Mode, Amount, Text, Tag } = value;
    if (Mode === "Income") {
      setCurrentIncome(() => {
        return currentIncome + parseInt(Amount);
      });
      setCurrentBalanace(() => {
        return currentBalance + parseInt(Amount);
      });
      setCurrentExpenseHistory((prev) => {
        return [
          {
            Id: nanoid(),
            Icon: "up",
            Text: Text,
            Amount: parseInt(Amount),
            Tag: Tag,
            Time: new Date().toLocaleString("en-IN", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
            }),
            Date: new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
          },
          ...prev,
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
        return [
          {
            Id: nanoid(),
            Icon: "down",
            Text: Text,
            Amount: Amount,
            Tag: Tag,
            Time: new Date().toLocaleString("en-IN", {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
            }),
            Date: new Date().toLocaleDateString("en-IN", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
          },
          ...prev,
        ];
      });
    }
  };
  const deleteExpenseHistory = (id) => {
    const items = currentExpenseHistory.filter((item) => {
      if (item.Id === id) {
        if (item.Icon === "up") {
          setCurrentBalanace(currentBalance - parseInt(item.Amount));
          setCurrentIncome(currentIncome - parseInt(item.Amount));
        } else if (item.Icon === "down") {
          setCurrentBalanace(currentBalance + parseInt(item.Amount));
          setCurrentExpense(currentExpense - parseInt(item.Amount));
        }
      }
      return item.Id != id;
    });
    setCurrentExpenseHistory(items);
  };

  return (
    <ExpenseTrackerContext.Provider
      value={{
        currentIncome,
        currentBalance,
        currentExpense,
        currentExpenseHistory,
        setCurrentIncome,
        setCurrentBalanace,
        setCurrentExpense,
        setCurrentExpenseHistory,
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
