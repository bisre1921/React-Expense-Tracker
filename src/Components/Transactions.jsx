//import React, { useState , useContext } from 'react';
import { MdDelete } from "react-icons/md";

const Transactions = ({transaction}) => {
  

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
        <li className={`relative bg-white mb-2 pr-2 flex justify-between ${transaction.amount < 0 ? "border-r-4 border-red-600" : "border-r-4 border-green-600"}`}>
                {transaction.text}  <span> {sign}${ Math.abs(transaction.amount)} </span>
                <button className="absolute bottom-0 left-[-20px]">
                  <MdDelete className='hover:text-red-600' />
                </button>
        </li>
    </div>
  )
}

export default Transactions