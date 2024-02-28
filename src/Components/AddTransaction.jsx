const AddTransaction = () => {
  return (
    <div>
        <h1>Add New Transaction</h1>
        <form action="">
            <div>
                <label htmlFor="">Text</label>
                <input type="text" placeholder="Enter text..." />
            </div>
            <div>
                <label htmlFor="">Amount (negative - expense , positive - income) <br /> </label>
                <input type="text" placeholder="Enter Amount..." />
            </div>
            <button>
                Add Transaction
            </button>
        </form>
    </div>
  )
}

export default AddTransaction