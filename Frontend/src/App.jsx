import { Home } from "./page/Home/index.jsx";
import { ExpenseProvider } from "./context/ExpenseTrackerContext.jsx";

import { Route, Routes } from "react-router-dom";
import Login from "./page/Login/index.jsx";
import Register from "./page/Register/index.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
function App() {
  return (
    <>
      <ExpenseProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/login' element={<Login />} exact />
            <Route path='/register' element={<Register />} exact />
          </Route>
        </Routes>
      </ExpenseProvider>
    </>
  );
}

export default App;
