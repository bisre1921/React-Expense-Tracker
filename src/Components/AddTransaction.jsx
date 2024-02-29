import { useState } from "react"

const AddTransaction = () => {
    const [text , setText] = useState("");
    const [amount , setAmount] = useState(0);
  return (
    <div>
        <h1 className="text-lg font-semibold border-b-4 mb-2">Add New Transaction</h1>
        <form action="">
            <div className="mb-2">
                <label htmlFor="">Text</label> <br />
                <input 
                    type="text" 
                    placeholder="Enter text..." 
                    className="w-full outline-none border-2 py-2 px-3 rounded-xl"
                    value={text}
                    onChange={(event) => {setText(event.target.value)}}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="">Amount (negative - expense , positive - income) <br /> </label>
                <input 
                    type="text" 
                    placeholder="Enter Amount..." 
                    className="w-full outline-none border-2 py-2 px-3 rounded-xl"
                    value={amount}
                    onChange={(event) => {setAmount(event.target.value)}}
                />
            </div>
            <div className="flex justify-center items-center mt-2">
                <button className="border-2 py-1 px-3 rounded-2xl">
                    Add Transaction
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default AddTransaction