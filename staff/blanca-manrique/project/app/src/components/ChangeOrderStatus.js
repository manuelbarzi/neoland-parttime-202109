import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateOrderStatus } from '../logic'
import Context from './Context'
import './ChangeOrderStatus.css'

function ChangeOrderStatus({orderId}) {
    const { setFeedback } = useContext(Context)
    const navigate = useNavigate()
    const [order, setOrder] = useState([])

    const handleChangeStatus = event => {
        event.preventDefault()
        const { target: { status: { value: _status } } } = event
        try {
            updateOrderStatus(sessionStorage.token, orderId, _status)
                .then(() => {
                    const update = { ...order, status: order._status }
                    setOrder(update)
                    setFeedback({ level: 'success', message: 'Order status successfully updated' })
                    navigate('/orders')
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div className="Change__info">
        <form onSubmit={handleChangeStatus}>
            <select className='Change__select' name="status" required >
                <option disabled label="Choose a new status for your order" > </option>
                <option name="completed">completed</option>
                <option name="cancelled">cancelled</option>
            </select>
            <button className='Change-btn' type='submit'>Change</button>
        </form>
    </div>
}

export default ChangeOrderStatus