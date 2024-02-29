const IncomeAndExpense = () => {
  return (
    <div className="flex gap-6 bg-white px-4 my-4">
        <div className="flex flex-col text-center pr-4 border-r-2">
            <h4 className="text-lg font-semibold">Income</h4>
            <p>$0.0</p>
        </div>
        <div>
            <h4 className="text-lg font-semibold">Expense</h4>
            <p>-$0.0</p>
        </div>
    </div>
  )
}

export default IncomeAndExpense