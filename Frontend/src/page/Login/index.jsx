import { Navbar } from "../../components/Navbar";
import useAuth from "../../hooks/useAuthHook.jsx";
import LoginLeftImage from "../../assets/LoginLeftImage.png";
import TextField from "@mui/material/TextField";
import SubmitButton from "../../components/SubmitButton";
const Login = () => {
  const { isAuthenticated, setAuthenticated } = useAuth();
  const onSubmitHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <>
      <Navbar name='Register' link='/register' />
      <div className='flex justify-center items-center w-full h-full mt-36 justify-evenly '>
        <div className='flex text-center'>
          <img src={LoginLeftImage} className='w-[300px] h-[300px]' />
        </div>
        <div>
          <div className='bg-black w-[500px] h-auto py-6 px-9 text-center'>
            <h1 className='text-4xl mb-6'>Welcome Back</h1>
            <form onSubmit={onSubmitHandler}>
              <TextField
                fullWidth
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
                required='true'
                sx={{ margin: "0px 0px 25px  0px" }}
                autoComplete='new-password'
                className='bg-light-black'
                id='filled-basic'
                label='Password'
                variant='filled'
                InputLabelProps={{
                  style: { color: "#B3B3B3" },
                }}
                InputProps={{
                  style: { color: "#B3B3B3" },
                }}
              />
              <SubmitButton Text={"Login"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
