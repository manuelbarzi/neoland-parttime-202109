import './CreateSupplier.css'
import { useState, useContext } from 'react'
import { createSupplier } from '../logic'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackOutline, IoSave, IoInformation } from "react-icons/io5"
import Context from './Context'

function CreateSupplier({ onCreated }) {
    const { setFeedback } = useContext(Context)
    const [info, setInfo] = useState(false) //info btn
    const navigate = useNavigate()

    const handleNewSupplier = event => {
        event.preventDefault()

        const { target: {
            name: { value: name },
            email: { value: email },
            web: { value: web },
            phone: { value: phone },
            adress: { value: adress },
            contactPerson: { value: contactPerson },
            tradeAssurance: { checked: tradeAssurance }
        }
        } = event

        try {
            createSupplier(sessionStorage.token, name, email, web, phone, adress, contactPerson, tradeAssurance)
                .then(() => {
                    onCreated()
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const goBack = () => {
        navigate('/suppliers')
    }

    const handleShowInfo = () => setInfo(!info)

    return <div className='CreateSupplier'>
        <div className='CreateSupplier-header'>
            <IoChevronBackOutline className='CreateSupplier__iconBack' onClick={goBack} />
            <h1 className='CreateSupplier__title'>Create new supplier</h1>
        </div>

        <form className='CreateSupplier__form' onSubmit={handleNewSupplier}>
            <label className='CreateSupplier__label'>Supplier name</label>
            <input className='CreateSupplier__input' type='text' name='name' placeholder='name' />

            <label className='CreateSupplier__label'>Email</label>
            <input className='CreateSupplier__input' type='text' name='email' placeholder='e-mail' />

            <label className='CreateSupplier__label'>Web</label>
            <input className='CreateSupplier__input' type='text' name='web' placeholder='web' />

            <label className='CreateSupplier__label'>Phone</label>
            <input className='CreateSupplier__input' type='text' name='phone' placeholder='phone' />

            <label className='CreateSupplier__label'>Adress</label>
            <textarea className='CreateSupplier__input' name='adress' placeholder='Adress'></textarea>

            <label className='CreateSupplier__label'>Contact person</label>
            <input className='CreateSupplier__input' type='text' name='contactPerson' placeholder='contact person name' />

            <label className='CreateSupplier__label'>Trade assurance</label>

            <div className='CreateSupplier__form-info'>
                <input
                    className='CreateSupplier__input-checkbox'
                    type="checkbox"
                    name="tradeAssurance"
                />
                <p className='CreateSupplier__form-infoYes'>Yes</p>
                <IoInformation className='CreateSupplier__form-infoIcon' onClick={handleShowInfo} />
            </div>

            {info ? <p className='CreateSupplier__form-warning'>If you do not select the field, we will assume that the supplier does not have trade assurance</p> : null}

            <button type='submit' className='CreateSupplier__btn btn-hover'>Save <IoSave className='CreateSupplier__btn-icon btn-hover' /></button>
        </form>
    </div>

}
export default CreateSupplier