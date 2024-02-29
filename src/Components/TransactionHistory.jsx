import { MdDelete } from "react-icons/md";
const TransactionHistory = () => {
  return (
    <div>
        <h1>
          <h3 className="text-lg font-semibold">History</h3>
          <ul className="flex flex-col">
            <li className="relative bg-white mb-2 flex justify-between">
              cash  <span>-$400</span>
              <button className="absolute bottom-0 left-[-20px]">
                <MdDelete />
              </button>
            </li>
            <li className="relative bg-white mb-2 flex justify-between">
              food  <span>-$400</span>
              <button className="absolute bottom-0 left-[-20px]">
                <MdDelete />
              </button>
            </li>
            <li className="relative bg-white mb-2 flex justify-between">
              game  <span>-$100</span>
              <button className="absolute bottom-0 left-[-20px]">
                <MdDelete />
              </button>
            </li>
          </ul>
        </h1>
    </div>
  )
}

export default TransactionHistory;