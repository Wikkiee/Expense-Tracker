import React, { useContext, useState } from "react";

export const ExpenseTrackerContext = React.createContext();
export const ExpenseUpdateContext = React.createContext();

export const useBalance = () => {
  return useContext(ExpenseTrackerContext);
};
export const useSetBalance = () => {
  return useContext(ExpenseUpdateContext);
};

// eslint-disable-next-line react/prop-types
export const ExpenseProvider = ({ children }) => {
  const [currentBalance, setCurrentBalanace] = useState(1);
  const ExpenseUpdate = (value) => {
    setCurrentBalanace(value);
  };
  return (
    <ExpenseTrackerContext.Provider value={currentBalance}>
      <ExpenseUpdateContext.Provider value={ExpenseUpdate}>
        {children}
      </ExpenseUpdateContext.Provider>
    </ExpenseTrackerContext.Provider>
  );
};
