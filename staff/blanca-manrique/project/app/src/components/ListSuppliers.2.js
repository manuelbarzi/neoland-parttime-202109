import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { retrieveSuppliers } from '../logic'

function ListSuppliers() {
    const [suppliers, setSuppliers] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveSuppliers(sessionStorage.token)
                .then(suppliers => setSuppliers(suppliers))
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleSupplierDetail = supplierId => { //Para ir al detalle del proveedor
        navigate(`/suppliers/${supplierId}`)
    }
    const handleCreateSupplier = () => {   //Para abrir el compo de Create Supplier
        navigate('/suppliers/new-supplier')
    }

    return <div>
        {suppliers ? <ul>
            {suppliers.map(supplier =>
                <li key={supplier.id}>
                    <h1 onClick={() => handleSupplierDetail(supplier.id)}>{supplier.name}</h1>
                </li>)}
        </ul> : <p>no suppliers yet: You can create a new one</p>}

        <button onClick={handleCreateSupplier}>+</button>
    </div>

}
export default ListSuppliers