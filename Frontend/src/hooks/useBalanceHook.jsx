import {
  ExpenseTrackerContext,
  ExpenseUpdateContext,
} from "../context/ExpenseTrackerContext";
import { useContext } from "react";

export const useBalance = () => {
  return useContext(ExpenseTrackerContext);
};
export const useSetBalance = () => {
  return useContext(ExpenseUpdateContext);
};
