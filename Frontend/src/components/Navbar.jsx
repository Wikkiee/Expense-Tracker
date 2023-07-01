import Logo from "../assets/Logo.svg";
import { Button } from "./Button.jsx";
export const Navbar = () => {
  return (
    <header className='mb-12 flex h-24 w-auto flex-shrink-0 items-center justify-between bg-[#191818] px-[110px]'>
      <div>
        <img src={Logo}></img>
      </div>
      <div>
        <Button name='Login' />
      </div>
    </header>
  );
};
