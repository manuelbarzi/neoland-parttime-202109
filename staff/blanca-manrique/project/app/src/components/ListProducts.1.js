import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { retrieveAllProductsFromSupplier } from '../logic'
import { IoChevronForwardOutline, IoAdd } from "react-icons/io5"
import './ListProducts.css'

function ListProducts() {
    const { supplierId } = useParams()
    const [products, setProducts] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveAllProductsFromSupplier(sessionStorage.token, supplierId)
                .then(products => setProducts(products))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const handleAddProduct = () => {
        navigate('products/new-product')
    }

    const handleProductDetail = productId => {
        navigate(`products/${productId}`)
    }

    return <div className='Products'>
        {products ? <ul className='Products__items'>
            {products.map(product =>
                <li className='Products__items-li' key={product.id} onClick={() => handleProductDetail(product.id)}>
                    <div className='Products__items-li-text'>
                        <p className='Products__items-li-name'>{product.name}</p>
                        <p>Category: {product.category}</p>
                    </div>
                    <IoChevronForwardOutline className='Products__items-li-icon' />
                </li>)}
        </ul> : <p>no products yet: You can create a new one</p>}

        <IoAdd className='Products__addIcon' onClick={handleAddProduct} />
    </div>

}
export default ListProducts