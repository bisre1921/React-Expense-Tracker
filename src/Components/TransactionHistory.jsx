import React , { useContext } from "react";
import {GlobalContext} from "../Context/GlobalState";
import Transactions from "./Transactions";

const TransactionHistory = () => {
  const {transactions} = useContext(GlobalContext);

  return (
    <div>
        <h1>
          <h3 className="text-lg font-semibold">History</h3>
          <ul className="flex flex-col">
            {transactions.map(transaction => (
              <Transactions key={transaction.id} transaction = {transaction} />
            ))}
            
          </ul>
        </h1>
    </div>
  )
}

export default TransactionHistory;