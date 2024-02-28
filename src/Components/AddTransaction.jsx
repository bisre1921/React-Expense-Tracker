const AddTransaction = () => {
  return (
    <div>
        <h1 className="text-lg font-semibold  border-b-4 mb-4">Add New Transaction</h1>
        <form action="">
            <div className="pb-2">
                <label htmlFor="">Text</label> <br />
                <input type="text" placeholder="Enter text..." className="w-full border-2 px-2 py-3 rounded-xl outline-none" />
            </div>
            <div className="pb-2">
                <label htmlFor="">Amount (negative - expense , positive - income) <br /> </label>
                <input type="text" placeholder="Enter Amount..." className="w-full border-2 px-2 py-3 rounded-xl outline-none" />
            </div>
            <div className="flex justify-center items-center">
                <button className="border-2 px-2 py-2 rounded-2xl ">
                    Add Transaction
                </button>
            </div>
            
        </form>
    </div>
  )
}

export default AddTransaction