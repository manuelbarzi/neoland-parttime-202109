import { useNavigate, Routes, Route } from "react-router-dom"
import ListOrders from "./ListOrders"
import CreateOrder from "./CreateOrder"
import Order from './Order'
import CompletedOrders from './CompletedOrders'
import CancelledOrders from "./CancelledOrders"
import InProgressOrders from "./InProgressOrders"
import DraftOrders from "./DraftOrders"


function Orders() {
    const navigate = useNavigate()

    return <div>
        <Routes>
            <Route path="/" element={<ListOrders />} />
            <Route path="/:orderId/*" element={<Order />} />
            <Route path="/new-order" element={<CreateOrder onCreated={() => navigate('/orders')} />} />
            <Route path="/completed" element={<CompletedOrders  />} />
            <Route path="/cancelled" element={<CancelledOrders  />} />
            <Route path="/in-progress" element={<InProgressOrders  />} />
            <Route path="/draft" element={<DraftOrders  />} />
        </Routes>

    </div>
}
export default Orders