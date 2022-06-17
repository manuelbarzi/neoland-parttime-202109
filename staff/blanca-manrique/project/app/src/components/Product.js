import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useParams, Link } from 'react-router-dom'
import { retrieveProduct } from '../logic'
import ListVariants from './ListVariants'
import CreateVariant from './CreateVariant'
import Variant from './Variant'
import UpdateVariant from './UpdateVariant'
import ProductDropdown from './ProductDropdown'
import { IoCaretDown } from "react-icons/io5"
import { MdModeEditOutline } from "react-icons/md"
import './Product.css'

function Product() {
    const { supplierId } = useParams()
    const { productId } = useParams()
    const [product, setProduct] = useState()
    const [dropdown, setDropdown] = useState(false) //🔽 por defecto desactivado
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveProduct(sessionStorage.token, supplierId, productId)
                .then(product => setProduct(product))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const showDropdown = () => setDropdown(!dropdown)

    return <div>
        {product ? <div>
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

            {dropdown && <ProductDropdown product={product} />}

        </div> : <p>no supplier: update supplier to introduce the missing information</p>
        }

        <Routes >
            <Route path='/' element={<ListVariants />} />
            <Route path='/variants/:variantId/' element={<Variant />} />
            <Route path='/variants/:variantId/update' element={<UpdateVariant onUpdated={() => navigate(`/suppliers/${supplierId}/products/${productId}/`)} />} />
            <Route path='/variants/new-variant' element={<CreateVariant onCreated={() => navigate(`/suppliers/${supplierId}/products/${productId}/`)} />} />
        </Routes>

    </div>

}
export default Product

