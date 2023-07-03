import Logo from "../assets/Logo.svg";
import { Button } from "./LoginButton.jsx";
import { Link } from "react-router-dom";
export const Navbar = ({name,link}) => {
  return (
    <header className='mb-12 flex h-24 w-auto flex-shrink-0 items-center justify-between bg-[#191818] px-[110px]'>
      <div>
      <Link to={'/'}>
        <img src={Logo}></img>
      </Link>
      </div>
      <div>
        <Link to={link}> 
          <Button name={name} />
        </Link>
      </div>
    </header>
  );
};
