import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { retrieveSuppliers, filterSuppliers } from '../logic'
import { IoChevronBack, IoChevronForwardOutline, IoAdd, IoSearch } from "react-icons/io5"
import './ListSuppliers.css'
import Context from './Context'

function ListSuppliers() {
    const { setFeedback } = useContext(Context)
    const [suppliers, setSuppliers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveSuppliers(sessionStorage.token)
                .then(suppliers => {
                    setSuppliers(suppliers)
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }

    }, [])

    const handleSupplierDetail = supplierId => {
        navigate(`/suppliers/${supplierId}`)
    }
    const handleCreateSupplier = () => {
        navigate('/suppliers/new-supplier')
    }
    const goBack = () => {
        navigate('/')
    }

    const searchSuppliers = query => {
        setSearchTerm(query)
        setFilteredResults(filterSuppliers(query, suppliers))
    }

    return <div>
        <div className='SuppliersHead'>
            <IoChevronBack className='IconBack' onClick={goBack} />
            <div className='SuppliersHead__search'>
                <input
                    className='SuppliersHead__search-field'
                    type="text"
                    placeholder='Search supplier...'
                    onChange={(e) => searchSuppliers(e.target.value)}
                />
                <IoSearch className='SuppliersHead__search-icon' />
            </div>
        </div>

        <div className='SuppliersBody'>
            {searchTerm.length > 1 ?
                (filteredResults.map((supplier) => {
                    return (
                        <li className='SuppliersBody__items-li' key={supplier.id} onClick={() => handleSupplierDetail(supplier.id)}>
                            <span className='SuppliersBody__items-li-text'>{supplier.name}</span>
                            <IoChevronForwardOutline className='SuppliersBody__items-li-icon' />
                        </li>

                    )
                })
                )
                : (suppliers.map((supplier) => {
                    return (
                        <li className='SuppliersBody__items-li' key={supplier.id} onClick={() => handleSupplierDetail(supplier.id)}>
                            <span className='SuppliersBody__items-li-text'>{supplier.name}</span>
                            <IoChevronForwardOutline className='SuppliersBody__items-li-icon' />
                        </li>

                    )
                })
                )
            }

            {(searchTerm.length === 0 && suppliers.length === 0) ?
                <>
                    <p>No suppliers yet, you can aggregate a new one</p>
                </> : null}


            {(searchTerm.length > 1 && filteredResults.length === 0) ?
                <>
                    <p>Supplier not found</p>
                </> : null}

            <IoAdd className='SuppliersBody__addIcon' onClick={handleCreateSupplier} />
        </div>

    </div>

}
export default ListSuppliers