import react from "../../assets/react.svg";
import tailwind from "../../assets/tailwind-css.svg";
import express from "../../assets/express.svg";
import { Tooltip } from "@mui/material";

export const Contact = () => {
  return (
    <div className='bg-black w-[50%] ml-6 mt-6 py-[12px] px-[12px] '>
      <h3 className='mb-3 text-light-black'>Made with</h3>
      <div className=' flex  justify-around'>
        <Tooltip placement='bottom' arrow title={"React.js"}>
          <div className='w-[55px] h-[55px] rounded-[50%] bg-light-black flex justify-center items-center'>
            <img className='w-[45px] h-[45px]' src={react} />
          </div>
        </Tooltip>
        <Tooltip placement='bottom' arrow title={"Tailwind-css"}>
          <div className='w-[55px] h-[55px] rounded-[50%] bg-light-black flex justify-center items-center'>
            <img className='w-[45px] h-[45px]' src={tailwind} />
          </div>
        </Tooltip>
        <Tooltip placement='bottom' arrow title={"Express Js"}>
          <div className='w-[55px] h-[55px] pt-1 rounded-[50%] bg-light-black flex justify-center items-center'>
            <img className='w-[40px] h-[45px]' src={express} />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};
