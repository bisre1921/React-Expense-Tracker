import React , {useContext} from "react";
import {GlobalContext} from "../Context/GlobalState";

const IncomeAndExpense = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc , item) => (acc += item) , 0).toFixed(2);
  const expense = (amounts.filter(item => item < 0).reduce((acc , item) => (acc += item) , 0) * -1).toFixed(2);
  return (
    <div className="flex gap-6 bg-white px-4 my-4">
        <div className="flex flex-col text-center pr-4 border-r-2">
            <h4 className="text-lg font-semibold">Income</h4>
            <p className="text-green-600">${income}</p>
        </div>
        <div>
            <h4 className="text-lg font-semibold">Expense</h4>
            <p className="text-red-600">-${expense}</p>
        </div>
    </div>
  )
}

export default IncomeAndExpense