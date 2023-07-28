const SubmitButton = ({ Text, isInvalidValue, isIncomeSelected }) => {
  return (
    <button
      disabled={isInvalidValue & !isIncomeSelected}
      className='bg-light-black py-2 px-12 rounded transition-colors hover:bg-white hover:text-black ease-in duration-300'
      type='submit'
    >
      {Text}
    </button>
  );
};

export default SubmitButton;
