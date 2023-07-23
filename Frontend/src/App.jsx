import { Home } from "./page/Home/index.jsx";
import { ExpenseProvider } from "./context/ExpenseTrackerContext.jsx";

import { Route, Routes } from "react-router-dom";
import Login from "./page/Login/index.jsx";
import Register from "./page/Register/index.jsx";
import useAuth from "./hooks/useAuthHook.jsx"
import { useEffect } from "react";
import axios from "axios";
function App() {
  const {isAuthenticated ,setAuthenticated} = useAuth()
  useEffect(()=>{
    axios({
      method: "get",
      url: "http://localhost:5000",
      withCredentials:true,
    }).then((result)=>{
      setAuthenticated(()=> result.data.isAuthenticated)
    })
  },[])
  return (
    <>

      <ExpenseProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={(isAuthenticated)?  <Home />: <Login />} />
          <Route path='/register' element={(isAuthenticated)?  <Home />:<Register />} />
        </Routes>
      </ExpenseProvider>
    </>
  );
}

export default App;
