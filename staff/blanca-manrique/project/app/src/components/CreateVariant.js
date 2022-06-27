import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import './CreateVariant.css'
import { createVariant } from '../logic'
import { IoChevronBackOutline, IoSave } from "react-icons/io5"
import Context from './Context'

function CreateVariant({ onCreated }) {
    const { supplierId, productId } = useParams()
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()

    const handleNewVariant = event => {
        event.preventDefault()

        const { target: {
            size: { value: size },
            color: { value: color },
            stockOnHand: { value: stockOnHand },
            criticalStock: { value: criticalStock }
        } } = event

        try {
            createVariant(sessionStorage.token, supplierId, productId, size, color, parseInt(stockOnHand), parseInt(criticalStock))
                .then(() => {
                    onCreated()
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const goBack = () => {
        navigate(`/suppliers/${supplierId}/products/${productId}/`)
    }

    return <div className='CreateVariant'>
        <div className='CreateVariant-header'>
            <IoChevronBackOutline className='CreateVariant__iconBack' onClick={goBack} />
            <h1 className='CreateVariant__title'>Create new variant</h1>
        </div>
        <form className='CreateVariant__form' onSubmit={handleNewVariant}>
            <label className='CreateVariant__label'>Product size</label>
            <input className='CreateVariant__input' type='text' name='size' placeholder='size' />

            <label className='CreateVariant__label'>Product color</label>
            <input className='CreateVariant__input' type='text' name='color' placeholder='color' />

            <label className='CreateVariant__label'>Product stock on hand</label>
            <input className='CreateVariant__input' type='text' name='stockOnHand' placeholder='stock' />

            <label className='CreateVariant__label'>critical stock</label>
            <input className='CreateVariant__input' type='text' name='criticalStock' placeholder='critical stock' />

            <button type='submit' className='CreateVariant__btn btn-hover'>Save <IoSave className='CreateVariant__btn-icon btn-hover' /></button>
        </form>
    </div>

}
export default CreateVariant