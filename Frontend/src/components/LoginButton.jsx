
import loader from "../assets/loader.gif"
export const Button = ({ name, activeLoader }) => {
  // eslint-disable-next-line react/prop-types
  if (activeLoader) {
    return (
      <button className='py-[10px] px-10 flex-shrink-0 bg-[#EEE] text-[#191818] rounded-md text-base font-[inter] font-medium leading-normal border-0 transition-all ease-in duration-300 hover:bg-[#191818] hover:text-[#EEE] hover:cursor-pointer hover:border hover:border-solid'>
        <img className='w-[25px] h-auto' src={loader} />
      </button>
    );
  } else {
    return (
      <button className='py-[10px] px-10 flex-shrink-0 bg-[#EEE] text-[#191818] rounded-md text-base font-[inter] font-medium leading-normal border-0 transition-all ease-in duration-300 hover:bg-[#191818] hover:text-[#EEE] hover:cursor-pointer hover:border hover:border-solid'>
        {name}
      </button>
    );
  }
};
