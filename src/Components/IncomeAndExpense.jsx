const IncomeAndExpense = () => {
  return (
    <div className="flex md:gap-2 gap-16 mb-4 bg-white justify-between items-center">
        <div className="flex-1 text-center pl-8">
            <h4 className="text-lg font-semibold">Income</h4>
            <p>$0.0</p>
        </div>
        <div className="flex items-center pb-2 pt-2">
            <div className="border-r border-gray-500 h-12"></div>
        </div>
        <div className="flex-1 text-center md:pr-0 pr-8">
            <h4 className="text-lg font-semibold">Expense</h4>
            <p>-$0.0</p>
        </div>
    </div>
  )
}

export default IncomeAndExpense