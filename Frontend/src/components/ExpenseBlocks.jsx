import UpIcon from "../assets/UpIcon.svg";
import DownIcon from "../assets/DownIcon.svg";

// eslint-disable-next-line react/prop-types
export const AmountDisplay = ({ Name, Amount }) => {
  return (
    <div className='bg-light-black w-[230px] h-[107px] rounded-md py-4 px-6'>
      <h4 className='text-[18px] font-normal leading-normal mb-1 text-light-black'>
        {Name}
      </h4>
      <h2 className='text-3xl leading-normal font-bold'>₹ {Amount}</h2>
    </div>
  );
};

export const HistoryItems = ({ Icon, Amount, Text, Tag,Time, Date,handleClick,Id }) => {
  return (
    <li
      className='flex justify-center mb-[10px]'
      onClick={() => {
        handleClick(Id);
      }}
    >
      <div className='text-light-black   flex w-[95%]  bg-light-black h-auto items-center'>
        <img className='px-4' src={Icon === "up" ? UpIcon : DownIcon} />
        <h4 className='text-base font-medium'>₹{Amount} </h4>
        <div className='h-[46px] my-[2px] w-[4px] mx-8  bg-dark-black'></div>
        <h4 className='text-base font-medium'>{Text}</h4>
        <h5 className={`text-xs px-4  py-1 rounded ml-3 ${Icon === "up" ? "bg-[#66fd64a5]" : "bg-[#fd6464bb]"} text-white`}>{Tag}</h5>
        <div className='flex justify-end w-full'>
          <h5 className='text-[12px]'>
            {Time} {Date}
          </h5>
        </div>
        <div
          className={`${
            Icon === "up" ? "bg-[#67FD64]" : "bg-[#FD6464]"
          } w-[5px] h-full  ml-4`}
        ></div>
      </div>
    </li>
  );
};
