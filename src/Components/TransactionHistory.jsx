import { MdDelete } from "react-icons/md";
const TransactionHistory = () => {
  return (
    <div>
        <h1>
          <h3>History</h3>
          <ul>
            <li>
              cash  -$400
              <button>
                <MdDelete />
              </button>
            </li>
          </ul>
        </h1>
    </div>
  )
}

export default TransactionHistory;