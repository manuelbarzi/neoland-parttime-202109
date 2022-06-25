import { useEffect, useState, useContext } from 'react'
import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import { retrieveProduct } from '../logic'
import ListVariants from './ListVariants'
import CreateVariant from './CreateVariant'
import Variant from './Variant'
import UpdateVariant from './UpdateVariant'
import ProductDropdown from './ProductDropdown'
import Context from './Context'
import { IoCaretDown } from "react-icons/io5"
import { MdModeEditOutline } from "react-icons/md"
import './Product.css'

function Product() {
    const { supplierId, productId } = useParams()
    const { setFeedback } = useContext(Context)
    const [product, setProduct] = useState()
    const [dropdown, setDropdown] = useState(false) //🔽 por defecto desactivado
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

    const showDropdown = () => setDropdown(!dropdown)

    return <div>
        {product ?
            <div>
                <div className='Product'>
                    <p className='Product__name'>{product.name}</p>
                    <div className='Product__actions'>
                        <Link to='#'>
                            <IoCaretDown className='Product__icon' onClick={showDropdown} />
                        </Link>
                        <MdModeEditOutline className='Product__icon' onClick={() => navigate(`/suppliers/${supplierId}/products/${productId}/update`)} />
                        <button className='Product__returnButton' onClick={() => navigate(`/suppliers/${supplierId}`)}>Return to list products</button>
                    </div>
                </div>

                <Routes >
                    <Route path='/' element={<ListVariants />} />
                    <Route path='/variants/:variantId/' element={<Variant />} />
                    <Route path='/variants/:variantId/update' element={<UpdateVariant onUpdated={() => navigate(`/suppliers/${supplierId}/products/${productId}/`)} />} />
                    <Route path='/variants/new-variant' element={<CreateVariant onCreated={() => navigate(`/suppliers/${supplierId}/products/${productId}/`)} />} />
                </Routes>

                {dropdown && <ProductDropdown product={product} />}

            </div>
            :
            <div>
                <h3>Product not found</h3>
                <button onClick={() => navigate(`/suppliers/${supplierId}`)}>Return to products</button>
            </div>
        }


    </div>

}
export default Product

