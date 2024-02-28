import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import TransactionHistory from "./Components/TransactionHistory";
import IncomeAndExpense from "./Components/IncomeAndExpense";

export default function App() {
  return (
    <main className="h-screen bg-slate-100">
      <div className="flex justify-center items-center absolute md:top-0 top-[150px] md:left-1/4 left-1/2">
            <Header />
      </div>
      <div className="flex md:flex-col  md:pt-32 md:flex-col-reverse md:gap-16 gap-32 justify-center items-center h-screen m-0 bg-slate-100">
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
  )
}