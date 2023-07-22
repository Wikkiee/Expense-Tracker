import { Navbar } from "../../components/Navbar";
import RegisterLeftImage from "../../assets/RegisterLeftImage.png";
import TextField from "@mui/material/TextField";
import SubmitButton from "../../components/SubmitButton";
const Register = () => {
  const onSubmitHandler = (e) => {
    console.log(e)
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
            <h1 className='text-4xl mb-6'>Xpense Tracker</h1>
            <form onSubmit={onSubmitHandler}>
              <TextField
                fullWidth
                type={"email"}
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
                type={"password"}
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
              <TextField
                fullWidth
                type={"password"}
                required='true'
                sx={{ margin: "0px 0px 25px  0px" }}
                autoComplete='new-password'
                className='bg-light-black'
                id='filled-basic'
                label='Confirm Password'
                variant='filled'
                InputLabelProps={{
                  style: { color: "#B3B3B3" },
                }}
                InputProps={{
                  style: { color: "#B3B3B3",'img':{color:"white"} },
                }}
              
              />
              <SubmitButton Text={"Register"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
