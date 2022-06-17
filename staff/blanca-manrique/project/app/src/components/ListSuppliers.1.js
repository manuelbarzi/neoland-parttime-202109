import { useState, useEffect } from 'react'
import { retrieveSuppliers } from '../logic'

function ListSuppliers({ onReturnClick, onSupplierClick, onCreateSupplier, refresh }) {
    const [suppliers, setSuppliers] = useState()

    useEffect(() => {
        try {
            retrieveSuppliers(sessionStorage.token)
                .then(suppliers => setSuppliers(suppliers))
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }, [refresh])

    //Para abrir el compo de Create Supplier
    const handleCreateSupplier = () =>{
        onCreateSupplier()
    }

    const goBack = () => {
        onReturnClick()
    }

    const handleSupplierDetail = supplierId => {
        onSupplierClick(supplierId)
    }

    return <div>
        <button onClick={goBack}>Return Home</button>

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