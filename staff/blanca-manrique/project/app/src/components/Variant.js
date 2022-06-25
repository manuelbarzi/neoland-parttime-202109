import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { retrieveVariant } from '../logic'
import { IoChevronBackOutline, IoCaretDown } from "react-icons/io5"
import { MdModeEditOutline } from "react-icons/md"
import Context from './Context'
import './Variant.css'

function Variant() {
    const { supplierId, productId, variantId } = useParams()
    const { setFeedback } = useContext(Context)
    const [variant, setVariant] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveVariant(sessionStorage.token, supplierId, productId, variantId)
                .then(variant => setVariant(variant))
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, [])

    return <div>
        {variant ?
            <div className='Variant'>
                <div className='Variant__header'>
                    <p>Estás viendo el detalle del producto, si deseas volver a visualizar las variantes: </p>
                    <button className='Variant__header-btn' onClick={() => navigate(`/suppliers/${supplierId}/products/${productId}`)}>Return to list variants</button>
                    <MdModeEditOutline className='Variant__header-icon' onClick={() => navigate(`/suppliers/${supplierId}/products/${productId}/variants/${variantId}/update`)} />
                </div>
                <div className='Variant__info'>
                    <p>Variant ID: {variant.id}</p>
                    <p>Variant color: {variant.color}</p>
                    <p>Variant size: {variant.size}</p>
                    <p>Stock on hand: {variant.stockOnHand}</p>
                    <p>Critical stock: {variant.criticalStock}</p>
                </div>
            </div>
            :
            <div>
                <h3>Variant not found</h3>
                <button onClick={() => navigate(`/suppliers/${supplierId}/products/${productId}`)}>Return to variants</button>
            </div>
        }

    </div>

}
export default Variant