import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import TransactionHistory from "./Components/TransactionHistory";
import IncomeAndExpense from "./Components/IncomeAndExpense";

export default function App() {
  return (
    <main>
        <section>
          <Header />
        </section>
        <section>
          <Balance />
        </section>
        <section>
          <IncomeAndExpense />
        </section>
        <section>
          <TransactionHistory />
        </section>
        <section>
          <AddTransaction />
        </section>
       
    </main>
  )
}