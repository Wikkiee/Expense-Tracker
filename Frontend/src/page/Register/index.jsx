import { Navbar } from "../../components/Navbar";
import RegisterLeftImage from "../../assets/RegisterLeftImage.png";
import TextField from "@mui/material/TextField";
import SubmitButton from "../../components/SubmitButton";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuthHook";
import { useEffect } from "react";
const Register = () => {
  const userEmail = useRef();
  const userPassword = useRef();
  const userConfirmPassword = useRef();
  const navigate = useNavigate();
  const [isValidPassword, setValidPassword] = useState(true);
  const [isActiveLoader,setActiveLoader] = useState(false)
  const { isAuthenticated, setAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });
  const onSubmitHandler = (e) => {

    e.preventDefault();

    if (userPassword.current.value === userConfirmPassword.current.value) {
      setActiveLoader(true)
      setValidPassword(true);
      axios({
        method: "post",
        url: `${import.meta.env.VITE_API_URL}/register`,
        data: {
          userEmail: userEmail.current.value,
          userPassword: userPassword.current.value,
        },
        withCredentials: true,
      })
        .then((res) => {
          setActiveLoader(false)
          if (res.data.isAuthenticated) {
            setAuthenticated(() => true);
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    } else {
      setValidPassword(false);
    }
  };
  return (
    <>
      <Navbar name='Login' link='/login' />
      <div className='flex  items-center w-full h-full mt-36 justify-evenly '>
        <div className='flex text-center hover:drop-shadow-[0 3px 10px rgb(10 10 10 / 0.2)]  w-auto '>
          <img src={RegisterLeftImage} className='w-[300px] h-[300px]' />
        </div>
        <div>
          <div className='bg-black w-[500px] h-auto py-6 px-9 text-center'>
            <h1 className='text-4xl mb-6'>Expense Tracker X</h1>
            <form onSubmit={onSubmitHandler}>
              <TextField
                fullWidth
                inputRef={userEmail}
                type={"email"}
                required='true'
                sx={{ margin: "0px 0px 25px  0px" }}
                autoComplete='new-password'
                className='bg-light-black'
                label='Email'
                variant='filled'
                InputLabelProps={{
                  style: { color: "#B3B3B3" },
                }}
                InputProps={{
                  style: { color: "#B3B3B3" },
                }}
              />
              <TextField
                inputRef={userPassword}
                fullWidth
                type={"password"}
                required='true'
                sx={{ margin: "0px 0px 25px  0px" }}
                autoComplete='new-password'
                className='bg-light-black'
                label='Password'
                variant='filled'
                InputLabelProps={{
                  style: { color: "#B3B3B3" },
                }}
                InputProps={{
                  style: { color: "#B3B3B3" },
                }}
              />
              <TextField
                inputRef={userConfirmPassword}
                fullWidth
                type={"password"}
                required='true'
                sx={{ margin: "0px 0px 25px  0px" }}
                autoComplete='new-password'
                className='bg-light-black'
                label={
                  isValidPassword
                    ? "Confirm Password"
                    : "Please enter the correct matching password"
                }
                variant='filled'
                InputLabelProps={{
                  style: { color: isValidPassword ? "#B3B3B3" : "red" },
                }}
                InputProps={{
                  style: { color: "#B3B3B3", img: { color: "white" } },
                }}
              />
              <SubmitButton Text={"Register"} activeLoader={isActiveLoader} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
