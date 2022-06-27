import './UpdateSupplier.css'
import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { retrieveSupplier, updateSupplier } from '../logic'
import { IoChevronBackOutline, IoSave } from "react-icons/io5"
import Context from './Context'

function UpdateSupplier({ onUpdated }) {
    const { supplierId } = useParams()
    const { setFeedback } = useContext(Context)
    const [supplier, setSupplier] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveSupplier(sessionStorage.token, supplierId)
                .then(supplier => setSupplier(supplier))
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, [])

    const handleUpdateSupplier = event => {
        event.preventDefault()

        const { target: {
            name: { value: name },
            email: { value: email },
            web: { value: web },
            phone: { value: phone },
            adress: { value: adress },
            contactPerson: { value: contactPerson },
            tradeAssurance: { checked: tradeAssurance }
        } } = event

        try {
            updateSupplier(sessionStorage.token, supplierId, name, email, web, phone, adress, contactPerson, tradeAssurance)
                .then(() => {
                    onUpdated()
                    setFeedback({ level: 'success', message: 'Supplier successfully updated' })
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const goBack = () => {
        navigate(`/suppliers/${supplierId}`)
    }

    return <div className='UpdateSupplier'>
        <div className='UpdateSupplier-header'>
            <IoChevronBackOutline className='UpdateSupplier__iconBack' onClick={goBack} />
            <h1 className='UpdateSupplier__title'>Update supplier</h1>
        </div>

        {supplier ?
            <form className='UpdateSupplier__form' onSubmit={handleUpdateSupplier}>
                <label className='UpdateSupplier__label'>Supplier name</label>
                <input className='UpdateSupplier__input' type='text' name='name' defaultValue={supplier.name} ></input>

                <label className='UpdateSupplier__label'>Email</label>
                <input className='UpdateSupplier__input' type='text' name='email' defaultValue={supplier.email} />

                <label className='UpdateSupplier__label'>Web</label>
                <input className='UpdateSupplier__input' type='text' name='web' defaultValue={supplier.web} />

                <label className='UpdateSupplier__label'>Phone</label>
                <input className='UpdateSupplier__input' type='text' name='phone' defaultValue={supplier.phone} />

                <label className='UpdateSupplier__label'>Adress</label>
                <textarea className='UpdateSupplier__input' name='adress' defaultValue={supplier.adress}></textarea>

                <label className='UpdateSupplier__label'>Contact Person</label>
                <input className='UpdateSupplier__input' type='text' name='contactPerson' defaultValue={supplier.contactPerson} />

                <label className='UpdateSupplier__label'>Trade Assurance</label>
                <input className='UpdateSupplier__input-checkbox' type="checkbox" name="tradeAssurance" defaultChecked={supplier.tradeAssurance}></input>

                <button type='submit' className='UpdateSupplier__btn btn-hover'>Save <IoSave className='UpdateSupplier__btn-icon btn-hover' /></button>
            </form>
            : <p>There is not supplier to update</p>
        }
    </div>


}
export default UpdateSupplier