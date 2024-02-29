import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import TransactionHistory from "./Components/TransactionHistory";
import IncomeAndExpense from "./Components/IncomeAndExpense";
import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>    
      <main className="flex flex-col justify-center items-center h-screen">
        <div>
              <Header />
        </div>
        <div className="flex md:gap-16 gap-32 justify-center items-center md:flex-col-reverse">
              <div>
                <AddTransaction />
              </div>
              <div>
              <div>
                <Balance />
              </div>
              <div>
                <IncomeAndExpense />
              </div>
              <div>
                <TransactionHistory />
              </div>
            </div>
        </div>
      </main>
    </GlobalProvider>
  )
}
