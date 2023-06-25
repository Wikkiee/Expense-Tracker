import {Home} from "./page/Home/index.jsx"
import {ExpenseProvider} from "./context/ExpenseTrackerContext.jsx"
function App() {
  return (
    <ExpenseProvider>
      <Home />
    </ExpenseProvider>
  )
}

export default App
