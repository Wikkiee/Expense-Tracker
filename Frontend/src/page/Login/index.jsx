import { Navbar } from "../../components/Navbar";
import LoginLeftImage from "../../assets/LoginLeftImage.png";
import TextField from "@mui/material/TextField";
import SubmitButton from "../../components/SubmitButton";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuthHook.jsx";
import { useNavigate } from "react-router-dom";
import { useBalance } from "../../hooks/useBalanceHook";

const Login = () => {
  const userEmail = useRef();
  const userPassword = useRef();
  const { isAuthenticated, setAuthenticated } = useAuth();
  const [isUserNotFound,setUserNotFound]  = useState(false)
  const [isActiveLoader,setActiveLoader] = useState(false)
  const navigate = useNavigate();
  const {
    setCurrentIncome,
    setCurrentBalanace,
    setCurrentExpense,
    setCurrentExpenseHistory,
  } = useBalance();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  });
  const onSubmitHandler = (e) => {
    setActiveLoader(true)
    e.preventDefault();
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/login`,
      withCredentials: true,
      data: {
        userEmail: userEmail.current.value,
        userPassword: userPassword.current.value,
      },
    }).then((response) => {
      if(response.data.userNotFound){
        setUserNotFound(true)
        setActiveLoader(false)
      }
      if (response.data.isAuthenticated) {
        setAuthenticated(() => true);
        localStorage.setItem(
          "_trackerData_",
          JSON.stringify(response.data.data.userAppData)
        );
        setCurrentBalanace(() => response.data.data.userAppData.currentBalance);
        setCurrentIncome(() => response.data.data.userAppData.currentIncome);
        setCurrentExpense(() => response.data.data.userAppData.currentExpense);
        setCurrentExpenseHistory(
          () => response.data.data.userAppData.currentExpenseHistory
        );
        navigate("/");
      }
    });
  };
  return (
    <>
      <Navbar name='Register' link='/register' />
      <div className='flex  items-center w-full h-full mt-36 justify-evenly '>
        <div className='flex text-center'>
          <img src={LoginLeftImage} className='w-[300px] h-[300px]' />
        </div>
        <div>
          <div className='bg-black w-[500px] h-auto py-6 px-9 text-center'>
            <h1 className='text-4xl mb-6'>Welcome Back</h1>
            <form onSubmit={onSubmitHandler}>
            <div className="w-100 text-left">
            {isUserNotFound? <label className="text-[10px] text-red-500">*Invalid Email / Password. </label>: <span></span>}
            </div>
              <TextField
                fullWidth
                inputRef={userEmail}
                required='true'
                sx={{ margin: "0px 0px 25px  0px" }}
                autoComplete='new-password'
                className='bg-light-black'
                id='filled-basic'
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
                fullWidth
                inputRef={userPassword}
                required='true'
                sx={{ margin: "0px 0px 25px  0px" }}
                autoComplete='new-password'
                className='bg-light-black'
                id='filled-basic'
                label='Password'
                variant='filled'
                type={"password"}
                InputLabelProps={{
                  style: { color: "#B3B3B3" },
                }}
                InputProps={{
                  style: { color: "#B3B3B3" },
                }}
              />
              <SubmitButton Text={"Login"} activeLoader={isActiveLoader}/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
