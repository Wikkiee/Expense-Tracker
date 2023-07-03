import { Home } from "./page/Home/index.jsx";
import { ExpenseProvider } from "./context/ExpenseTrackerContext.jsx";
import { AuthenticationProvider } from "./context/AuthenticationContext.jsx";
import { Route, Routes } from "react-router-dom";
import Login from "./page/Login/index.jsx";
import Register from "./page/Register/index.jsx";
function App() {
  return (
    <>
      <AuthenticationProvider>
      <ExpenseProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </ExpenseProvider>
      </AuthenticationProvider>
    </>
  );
}

export default App;
