import { useNavigate, Routes, Route } from "react-router-dom"
import ListSuppliers from "./ListSuppliers"
import UpdateSupplier from "./UpdateSupplier"
import CreateSupplier from "./CreateSupplier"
import Supplier from "./Supplier"

function Suppliers() {
    const navigate = useNavigate()

    return <div>
        <Routes>
            <Route path="/" element={<ListSuppliers />} />
            <Route path="/:supplierId/*" element={<Supplier />} />
            <Route path="/:supplierId/update" element={<UpdateSupplier onUpdated={() => navigate('/suppliers')}/>} />
            <Route path="/new-supplier" element={<CreateSupplier onCreated={()=> navigate('/suppliers')} />} />
        </Routes>
    </div>
}
export default Suppliers