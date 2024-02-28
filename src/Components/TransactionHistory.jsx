import { MdDelete } from "react-icons/md";
const TransactionHistory = () => {
  return (
    <div className="w-[319.850px] ">
        <h1>
          <h3 className="text-lg font-semibold pb-2">History</h3>
          <ul className="p-0 mb-[40px]">
            <li className="bg-white flex justify-between my-[10px]">
              cash  <span>-$400</span>
              <button className="absolute left-1/2 ml-14 mt-1">
                <MdDelete />
              </button>
            </li>
            <li className="bg-white flex justify-between my-[10px]">
              food  <span>-$400</span>
              <button className="absolute left-1/2 ml-14 mt-1">
                <MdDelete />
              </button>
            </li>
          </ul>
        </h1>
    </div>
  )
}

export default TransactionHistory;