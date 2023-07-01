import { IncomeAndExpenseBox } from "./IncomeAndExpenseBox.jsx";
import { HistoryList } from "./HistoryList.jsx";
import { NewTransaction } from "./NewTransaction.jsx";
import { Navbar } from "../../components/Navbar.jsx";
export const Home = () => {
  return (
    <>
      <Navbar />
      <dib className='w-auto h-screen m-0 p-0 bg-[#121212]'>
        <div className='flex justify-between px-[110px]'>
          <div>
            <div>
              <h1 className='text-6xl mb-0'>Hello There. </h1>
              <h4 className='mt-0'>currently you have $1234</h4>
              <IncomeAndExpenseBox />
              <HistoryList />
            </div>
          </div>
          <div>
            <NewTransaction />
          </div>
        </div>
      </dib>
    </>
  );
};
