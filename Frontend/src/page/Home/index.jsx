import { BalanaceIncomeAndExpenseBox } from "./BalanceIncomeAndExpenseBox.jsx";
import { HistoryList } from "./HistoryList.jsx";
import { NewTransaction } from "./NewTransaction.jsx";
import { Navbar } from "../../components/Navbar.jsx";
import { Contact } from "./Contact.jsx";
import { Upcoming } from "./Upcoming.jsx";
import useAuth from "../../hooks/useAuthHook.jsx";
import { useEffect } from "react";
import axios from "axios";
import getCurrentTime from "../../utils/CurrentTime.jsx";


export const Home = () => {
const {setAuthenticated} = useAuth()
  useEffect(()=>{
    axios({
      method:'get',
      url:import.meta.env.VITE_API_URL,
      withCredentials:true
    }).then((response)=>{
      if(response.data.isAuthenticated){
        setAuthenticated(()=> true)
      }
    })
  },[])
  return (
    <>
      <Navbar name='Cloud Sync' link='/login' />
      <dib className='w-full h-screen m-0 p-0 bg-[#121212]'>
        <div className='flex justify-between px-[110px]'>
          <div>
            <div className='flex justify-center items-center flex-col mb-12'>
              <div className="w-100  flex text-left flex-col">
              <h1 className='text-6xl mb-0 '>{getCurrentTime()}</h1>
              <h4 className='mt-0 w-100 text-sm ml-2'>The joy is in creating, not maintaining.</h4>
              </div>
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
