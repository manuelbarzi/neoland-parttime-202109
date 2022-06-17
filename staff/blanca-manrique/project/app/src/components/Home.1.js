import { useState } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import ListSuppliers from './ListSuppliers'
import Supplier from './Supplier'
import CreateSupplier from './CreateSupplier'
import UpdateSupplier from './UpdateSupplier'
import CreateProduct from './CreateProduct'

function Home({ onLoggedOut, onSuppliersIn }) {
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState()

    //funciones
    const handleLogout = () => {
        delete sessionStorage.token
        onLoggedOut()
    }

    const handleShowSuppliers = () => {
        onSuppliersIn()
    }

    const handleReturnHome = () =>{
        navigate('/')
    }
    const handleGoBack = () =>{
        navigate('suppliers')
    }

    const handleSupplierDetail = supplierId =>{
        navigate(`suppliers/${supplierId}`)
    }

    const handleCreateSupplier = () =>{ //Para abrir el compo de Create Supplier
        navigate('new-supplier')
    }

    const handleSupplierSave = () =>{ //Para refrescar el listado de suppliers una vez que hemos creado un supplier
        navigate('suppliers')
        setRefresh(true)
    }
    
    const handleSupplierUpdate =() =>{
        navigate('supplier')
        setRefresh(true)
    }
    const handleShowUpdateSupplier =() =>{ navigate('update-supplier')}

    //renderizado
    return <div>
        <nav>
            <h1><Link to="/">home</Link></h1>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>

        <div>
            <button onClick={handleShowSuppliers}>Suppliers</button>
            <button>Products</button>
            <button>Variants</button>
            <button>Orders</button>
        </div>

        <Routes >
            <Route path='suppliers/*' element={<ListSuppliers onReturnClick={handleReturnHome} onSupplierClick={handleSupplierDetail} onCreateSupplier={handleCreateSupplier} refresh={refresh}/>} />
            <Route path='suppliers/:supplierId/*' element={<Supplier onReturnClick={handleShowSuppliers} onUpdateSupplier={handleShowUpdateSupplier} />} />
            <Route path='new-supplier' element={<CreateSupplier onBackClick={handleGoBack} onCreated={handleSupplierSave}/>} />
            <Route path='update-supplier' element={<UpdateSupplier onBackClick={handleGoBack} onUpdated={handleSupplierUpdate}/>} />
        </Routes>
    </div>
}
export default Home