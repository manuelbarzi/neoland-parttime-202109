import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './CreateProduct.css'
import { createProduct } from '../logic'
import { IoChevronBackOutline, IoSave } from "react-icons/io5"
import Context from './Context'

function CreateProduct({onCreated}) {
    const { supplierId } = useParams()
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()

    const handleNewProduct = event => {
        event.preventDefault()

        const { target: {
            supplierProductId: { value: supplierProductId },
            supplierProductUrl: { value: supplierProductUrl },
            name: { value: name },
            category: { value: category },
            brand: { value: brand },
            model: { value: model },
            material: { value: material },
            price: { value: price },
            salePrice: { value: salePrice }
        } } = event

        try { 
            createProduct(sessionStorage.token, supplierId, supplierProductId, supplierProductUrl, name, category, brand, model, material, parseInt(price), parseInt(salePrice))
                .then(() => {
                    onCreated()
                    setFeedback({level: 'success', message: 'Supplier created successfully'})
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const goBack = () => {
        navigate(`/suppliers/${supplierId}/`)
    }

    return <div className='CreateProduct'>
        <IoChevronBackOutline className='CreateProduct__iconBack' onClick={goBack}/>
        <h1 className='CreateProduct__title'>Create new product</h1>

        <form className='CreateProduct__form' onSubmit={handleNewProduct}>
            <label className='CreateProduct__label'>Product ID from supplier</label>
            <input className='CreateProduct__input' type='text' name='supplierProductId' placeholder='ID from supplier' />

            <label className='CreateProduct__label'>Product URL</label>
            <input className='CreateProduct__input' type='text' name='supplierProductUrl' placeholder='URL' />

            <label className='CreateProduct__label'>Product name</label>
            <input className='CreateProduct__input' type='text' name='name' placeholder='name' />

            <label className='CreateProduct__label'>Category</label>
            <input className='CreateProduct__input' type='text' name='category' placeholder='category' />

            <label className='CreateProduct__label'>Brand</label>
            <input className='CreateProduct__input' type='text' name='brand' placeholder='brand' />

            <label className='CreateProduct__label'>Model</label>
            <input className='CreateProduct__input' type='text' name='model' placeholder='model' />

            <label className='CreateProduct__label'>Material</label>
            <input className='CreateProduct__input' type='text' name='material' placeholder='material' />

            <label className='CreateProduct__label'>Price</label>
            <input className='CreateProduct__input' type='number' name='price' placeholder='price' />

            <label className='CreateProduct__label'>Sale price</label>
            <input className='CreateProduct__input' type='number' name='salePrice' placeholder='sale price' />

            <button type='submit' className='CreateProduct__btn btn-hover'>Save <IoSave className='CreateProduct__btn-icon btn-hover'/></button>
        </form>
    </div>

}
export default CreateProduct