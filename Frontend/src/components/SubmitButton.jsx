import loader from "../assets/loader.gif";
const SubmitButton = ({ Text, isInvalidValue, isIncomeSelected, activeLoader }) => {
  if (activeLoader) {
    return (
      <button disabled className='py-[10px] px-10 flex-shrink-0 bg-[#EEE] text-[#191818] rounded-md text-base font-[inter] font-medium leading-normal border-0 transition-all ease-in duration-300'>
        <img className='w-[20px] h-auto' src={loader} />
      </button>
    );
  } else {
    return (
      <button
        disabled={isInvalidValue & !isIncomeSelected}
        className='bg-light-black py-2 px-12 rounded transition-colors hover:bg-white hover:text-black ease-in duration-300'
        type='submit'
      >
        {Text}
      </button>
    );
  }
};

export default SubmitButton;
