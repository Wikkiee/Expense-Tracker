import Logo from "../assets/Logo.svg";
import { Button } from "./LoginButton.jsx";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuthHook";
import LogoutButton from "./LogoutButton";

export const Navbar = ({ name, link }) => {
  const { isAuthenticated } = useAuth();
  return (
    <header className='mb-12 flex h-24 w-auto flex-shrink-0 items-center justify-between bg-[#191818] px-[110px]'>
      <div>
        <Link to={"/"}>
          <img src={Logo}></img>
        </Link>
      </div>
      <div>

        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <Link to={link}>
            <Button name={name} activeLoader={isAuthenticated}/>
          </Link>
        )}
      </div>
    </header>
  );
};
