import axios from "axios"
import useAuth from "../hooks/useAuthHook"

const LogoutButton = ()=>{
   const {setAuthenticated} = useAuth()
   const onClickHandler = ()=>{
    axios({
        method:"post",
        url:`${import.meta.env.VITE_API_URL}/logout`,
        withCredentials:true
      }).then((response)=>{
          if(response.data.loggedOut){
            setAuthenticated(false)
          }
      })
   }
    return <button onClick={(()=>{
       onClickHandler()
      })} className='py-[10px] px-10 flex-shrink-0 bg-[#EEE] text-[#191818] rounded-md text-base font-[inter] font-medium leading-normal border-0 transition-all ease-in duration-300 hover:bg-[#191818] hover:text-[#EEE] hover:cursor-pointer hover:border hover:border-solid'>
    Disconnect sync
  </button>
}

export default LogoutButton

