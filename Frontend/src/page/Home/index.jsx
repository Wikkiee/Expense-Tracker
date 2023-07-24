import { BalanaceIncomeAndExpenseBox } from "./BalanceIncomeAndExpenseBox.jsx";
import { HistoryList } from "./HistoryList.jsx";
import { NewTransaction } from "./NewTransaction.jsx";
import { Navbar } from "../../components/Navbar.jsx";
import { Contact } from "./Contact.jsx";
import { Upcoming } from "./Upcoming.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useBalance } from "../../hooks/useBalanceHook.jsx";

export const Home = () => {
  const {
    setCurrentIncome,
    setCurrentBalanace,
    setCurrentExpense,
    setCurrentExpenseHistory,
  } = useBalance();
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/",
      withCredentials: true,
    }).then((response) => {
      if (response.data.isAuthenticated) {
        setCurrentBalanace(() => response.data.data.currentBalance);
        setCurrentIncome(() => response.data.data.currentIncome);
        setCurrentExpense(() => response.data.data.currentExpense);
        setCurrentExpenseHistory(
          () => response.data.data.currentExpenseHistory
        );
      }
    });
  }, []);
  return (
    <>
      <Navbar name='Login' link='/login' />
      <dib className='w-full h-screen m-0 p-0 bg-[#121212]'>
        <div className='flex justify-between px-[110px]'>
          <div>
            <div className='flex justify-center items-center flex-col mb-12'>
              <h1 className='text-6xl mb-0 '>Hello There. </h1>
              <h4 className='mt-0'>version - 1.0</h4>
            </div>
            <div className='bg-black py-7 px-[22px]'>
              <div className='mb-6'>
                <BalanaceIncomeAndExpenseBox />
              </div>
              <div className='h-[240px] overflow-y-scroll historyItemContainer'>
                <HistoryList />
              </div>
            </div>
          </div>
          <div>
            <NewTransaction />
            <div className='flex '>
              <Contact />
              <Upcoming />
            </div>
          </div>
        </div>
      </dib>
    </>
  );
};
