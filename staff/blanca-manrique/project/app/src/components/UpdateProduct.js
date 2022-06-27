import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { retrieveProduct, updateProduct } from '../logic'
import './UpdateProduct.css'
import Context from './Context'
import { IoChevronBackOutline, IoSave } from "react-icons/io5"

function UpdateProduct({ onUpdated }) {
    const { supplierId, productId } = useParams()
    const { setFeedback } = useContext(Context)
    const [product, setProduct] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveProduct(sessionStorage.token, supplierId, productId)
                .then(product => setProduct(product))
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, [])

    const handleUpdateProduct = event => {
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
            updateProduct(sessionStorage.token, supplierId, productId, supplierProductId, supplierProductUrl, name, category, brand, model, material, parseInt(price), parseInt(salePrice))
                .then(() => {
                    onUpdated()
                    setFeedback({ level: 'success', message: 'Product successfully updated' })
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const goBack = () => {
        navigate(`/suppliers/${supplierId}/products/${productId}`)
    }

    return <div className='UpdateProduct'>
        <div className='UpdateProduct-header'>
            <IoChevronBackOutline className='UpdateProduct__iconBack' onClick={goBack} />
            <h1 className='UpdateProduct__title'>Update product</h1>
        </div>

        {product ?
            <form className='UpdateProduct__form' onSubmit={handleUpdateProduct}>
                <label className='UpdateProduct__label'>Product ID from supplier</label>
                <input className='UpdateProduct__input' type='text' name='supplierProductId' placeholder='ID from supplier' defaultValue={product.supplierProductId} />

                <label className='UpdateProduct__label'>Product URL</label>
                <input className='UpdateProduct__input' type='text' name='supplierProductUrl' placeholder='URL' defaultValue={product.supplierProductUrl} />

                <label className='UpdateProduct__label'>Product name</label>
                <input className='UpdateProduct__input' type='text' name='name' placeholder='name' defaultValue={product.name} />

                <label className='UpdateProduct__label'>Category</label>
                <input className='UpdateProduct__input' type='text' name='category' placeholder='category' defaultValue={product.category} />

                <label className='UpdateProduct__label'>Brand</label>
                <input className='UpdateProduct__input' type='text' name='brand' placeholder='brand' defaultValue={product.brand} />

                <label className='UpdateProduct__label'>Model</label>
                <input className='UpdateProduct__input' type='text' name='model' placeholder='model' defaultValue={product.model} />

                <label className='UpdateProduct__label'>Material</label>
                <input className='UpdateProduct__input' type='text' name='material' placeholder='material' defaultValue={product.material} />

                <label className='UpdateProduct__label'>Price</label>
                <input className='UpdateProduct__input' type='number' name='price' placeholder='price' defaultValue={product.price} />

                <label className='UpdateProduct__label'>Sale price</label>
                <input className='UpdateProduct__input' type='number' name='salePrice' placeholder='sale price' defaultValue={product.salePrice} />

                <button type='submit' className='UpdateProduct__btn btn-hover'>Save <IoSave className='UpdateProduct__btn-icon btn-hover' /></button>
            </form>
            : <p>There is not product to update</p>
        }
    </div>
}

export default UpdateProduct