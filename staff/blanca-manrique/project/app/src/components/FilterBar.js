import { useNavigate } from "react-router-dom"
import './FilterBar.css'

function FilterBar({orders}) {
    const navigate = useNavigate()

    const handleShowCompletedOrders = () => { navigate('/orders/completed') }
    const handleShowCancelledOrders = () => { navigate('/orders/cancelled') }
    const handleShowInProgressOrders = () => { navigate('/orders/in-progress') }
    const handleShowDraftOrders = () => { navigate('/orders/draft') }


    return <div>
        {orders.length ?
            <div>
                <div className="FilterBar">
                    <button className="FilterBar__btn" onClick={handleShowCompletedOrders}>Completed</button>
                    <button className="FilterBar__btn" onClick={handleShowCancelledOrders}>Cancelled</button>
                    <button className="FilterBar__btn" onClick={handleShowInProgressOrders}>In progress</button>
                    <button className="FilterBar__btn" onClick={handleShowDraftOrders}>Draft</button>
                </div>

                {/* <div>
                    <label>From</label>
                    <input type="date" id="startDate"/>
                </div>

                <div>
                    <label>To</label>
                    <input type="date" id="endDate"/>
                </div> */}
            </div>
            : null
        }
    </div>
}
export default FilterBar