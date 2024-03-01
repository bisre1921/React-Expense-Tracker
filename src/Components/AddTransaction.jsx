import { useState , useContext } from "react"
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
    const {addTransaction} = useContext(GlobalContext);

    const [text , setText] = useState("");
    const [amount , setAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTransaction = {
            id : Math.floor(Math.random() * 1000000) , 
            text , 
            amount : +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount(0);
    }
  return (
    <div>
        <h1 className="text-lg font-bold border-b-4 mb-2">Add New Transaction</h1>
        <form action="" onSubmit={handleSubmit}>
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
                <button type="submit" className="border-2 py-1 px-3 rounded-2xl text-white bg-green-600 hover:bg-transparent hover:text-black duration-300">
                    Add Transaction
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default AddTransaction