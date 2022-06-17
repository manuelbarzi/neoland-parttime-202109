import { useNavigate, Routes, Route } from "react-router-dom"
import ListOrders from "./ListOrders"
import CreateOrder from "./CreateOrder"
import Order from './Order'
// import NewItem from "./NewItem"

function Orders() {
    const navigate = useNavigate()

    return <div>
        <Routes>
            <Route path="/" element={<ListOrders />} />
            <Route path="/:orderId/*" element={<Order />} />
            {/* <Route path="/:supplierId/update" element={<UpdateSupplier onUpdated={() => navigate('/suppliers')}/>} /> */}
            <Route path="/new-order" element={<CreateOrder onCreated={() => navigate('/orders')} />} />
        </Routes>

    </div>
}
export default Orders