import React , {useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc , item) => (acc += item) , 0).toFixed(2);
  return (
    <div className="flex flex-col ">
        <h3 className="text-lg font-bold">Your Balance</h3>
        <h1 className="text-green-600 font-bold">${total}</h1>
    </div>
  )
}

export default Balance