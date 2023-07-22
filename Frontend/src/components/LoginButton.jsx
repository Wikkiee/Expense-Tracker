export const Button = ({name}) => {
  // eslint-disable-next-line react/prop-types
  return (
    <button className='py-[10px] px-10 flex-shrink-0 bg-[#EEE] text-[#191818] rounded-md text-base font-[inter] font-medium leading-normal border-0 transition-all ease-in duration-300 hover:bg-[#191818] hover:text-[#EEE] hover:cursor-pointer hover:border hover:border-solid'>
      {name}
    </button>
  );
};

Button.propTypes = {
  name:String
}
