import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { retrieveAllProductsFromSupplier, filterProducts } from '../logic'
import { IoChevronForwardOutline, IoAdd, IoSearch } from "react-icons/io5"
import './ListProducts.css'
import Context from './Context'

function ListProducts() {
    const { supplierId } = useParams()
    const { setFeedback } = useContext(Context)
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveAllProductsFromSupplier(sessionStorage.token, supplierId)
                .then(products => setProducts(products))
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }, [])


    const handleAddProduct = () => {
        navigate('products/new-product')
    }

    const handleProductDetail = productId => {
        navigate(`products/${productId}`)
    }

    const searchProducts = (query) => {
        setSearchTerm(query)
        setFilteredResults(filterProducts(query, products))
    }

    return <div>
        <div className='ProductsHead__search'>
            <input
                className='ProductsHead__search-field'
                type="text"
                placeholder='Search product...'
                onChange={(e) => searchProducts(e.target.value)}
            />
            <IoSearch className='ProductsHead__search-icon' />
        </div>

        <div className='ProductsBody'>
            {searchTerm.length > 1 ? (
                filteredResults.map((product) => {
                    return (
                        <li className='ProductsBody__items-li' key={product.id} onClick={() => handleProductDetail(product.id)}>
                            <div className='ProductsBody__items-li-text'>
                                <p className='Products__items-li-name'>{product.name}</p>
                                <p>Category: {product.category}</p>
                            </div>
                            <IoChevronForwardOutline className='ProductsBody__items-li-icon' />
                        </li>

                    )
                })
            ) : (
                products.map((product) => {
                    return (
                        <li className='ProductsBody__items-li' key={product.id} onClick={() => handleProductDetail(product.id)}>
                            <div className='ProductsBody__items-li-text'>
                                <p className='Products__items-li-name'>{product.name}</p>
                                <p className='Products__items-li-category'>Category: {product.category}</p>
                            </div>
                            <IoChevronForwardOutline className='ProductsBody__items-li-icon' />
                        </li>

                    )
                })
            )}

            {(searchTerm.length === 0 && products.length === 0) ?
                <>
                    <p>No products yet, you can aggregate a new one</p>
                </> : null}

            {(searchTerm.length > 1 && filteredResults.length === 0) ?
                <>
                    <p>Product not found</p>
                </> : null}

            <IoAdd className='ProductsBody__addIcon' onClick={handleAddProduct} />
        </div>

    </div>

}
export default ListProducts