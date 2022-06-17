import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"
import { retrieveSuppliers } from '../logic'
import { IoChevronBack, IoChevronForwardOutline, IoAdd } from "react-icons/io5"
import './ListSuppliers.css'

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
    const goBack = () => { //Volvemos a Home
        navigate('/')
    }

    return <div>
        <IoChevronBack className='IconBack' onClick={goBack}/>
        
        <div className='Suppliers'>
            {suppliers ? <ul className='Suppliers__items'>
                {suppliers.map(supplier =>
                    <li className='Suppliers__items-li' key={supplier.id} onClick={() => handleSupplierDetail(supplier.id)}>
                        <span className='Suppliers__items-li-text'>{supplier.name}</span>
                        <IoChevronForwardOutline className='Suppliers__items-li-icon' />
                    </li>)}
            </ul> : <p>no suppliers yet: You can create a new one</p>}

            <IoAdd className='Suppliers__addIcon' onClick={handleCreateSupplier} />
        </div>

    </div>

}
export default ListSuppliers