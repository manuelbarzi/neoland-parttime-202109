import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { retrieveVariant } from '../logic'
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
                <div className='Variant__body'>
                    <h3 className='Variant__body-title'>ID: {variant.id}</h3>
                    <table className='Variant__table' key={variant.id}>
                        <thead className='Variant__table-header'>
                            <tr>
                                <th>Variant color</th>
                                <th>Variant size</th>
                                <th>Stock on hand</th>
                                <th>Critical stock</th>
                            </tr>
                        </thead>
                        <tbody className='Variant__table-body'>
                            <tr>
                                <td>{variant.color}</td>
                                <td>{variant.size}</td>
                                <td>{variant.stockOnHand}</td>
                                <td>{variant.criticalStock}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='Variant__header'>
                    <button className='Variant__header-btn btn-green' onClick={() => navigate(`/suppliers/${supplierId}/products/${productId}`)}>Return to variants</button>
                    <button className='Variant__header-btn btn-yellow' onClick={() => navigate(`/suppliers/${supplierId}/products/${productId}/variants/${variantId}/update`)}>Update variant</button>
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