import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import History from "./Components/History";

export default function App() {
  return (
    <main>
      <section>
        <Header />
        <Balance />
        <History />
        <AddTransaction />
      </section>
    </main>
  )
}