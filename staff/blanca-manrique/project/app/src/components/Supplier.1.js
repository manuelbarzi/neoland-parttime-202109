import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { retrieveSupplier } from '../logic'
import ListProducts from './ListProducts'
import CreateProduct from './CreateProduct'
import Product from './Product'

function Supplier({ onReturnClick, onUpdateSupplier }) {
    const [supplier, setSupplier] = useState()
    const [refresh, setRefresh] = useState()
    const { supplierId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveSupplier(sessionStorage.token, supplierId)
                .then(supplier => setSupplier(supplier))
                // .then(setSupplier) //llamamos directamente al callback setSupplier --> que nos guarde supplier en el state
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const goBack = () => {
        onReturnClick()
    }

    const handleOpenUpdateSupplier = () => {
        onUpdateSupplier()
    }
    const handleShowAllProducts = () =>{
        navigate('products')
    }
    const handleGoToCreateProduct = () => {
        navigate('new-product')
    }

    const handleProductSaved =() =>{
        navigate('products')
        setRefresh(true)
    }

    const handleProductDetail = productId =>{
        navigate(`products/${productId}`)
    }

    return <div>
        <h1>Supplier</h1>
        <button onClick={goBack}>Back to suppliers menu</button>
        <button onClick={handleOpenUpdateSupplier}>Update Supplier</button>

        {supplier ? <div>
            <h2>{supplier.name}</h2>
            <h3>{supplier.contactPerson}</h3>
            <p>{supplier.tradeAssurance}</p>
            <p>{supplier.email}</p>
            <p>{supplier.phone}</p>
            <p>{supplier.web}</p>
            <p>{supplier.adress}</p>

            <button onClick={handleShowAllProducts}>See all product from ${supplier.name}</button>
        </div> : <p>no supplier: update supplier to introduce the missing information</p>
        }


        <Routes>
            <Route path='products/*' element={<ListProducts onShowCreateProduct={handleGoToCreateProduct} refresh={refresh} onProductClick={handleProductDetail}/>} />
            <Route path='new-product' element={<CreateProduct onCreated={handleProductSaved}/>} />
            <Route path='products/:productId' element={<Product />} />
        </Routes>

        {/* onBackClick={handleGoBack} onCreated={handleProductSave}*/}
    </div>

}
export default Supplier