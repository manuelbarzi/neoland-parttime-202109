import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateOrder } from '../logic'
import Context from './Context'
import './GenerateOrder.css'

function GenerateOrder({ orderId }) {
    const { setFeedback } = useContext(Context)
    const [order, setOrder] = useState([])
    const navigate = useNavigate()

    const handleGenerateOrder = event => {
        event.preventDefault()
        const { target: { status: { value: _status } } } = event
        try {
            generateOrder(sessionStorage.token, orderId, _status)
                .then(() => {
                    const update = {}

                    for (const key in order)
                        update[key] = order[key]

                    update.status = 'in progress'

                    setOrder(update)
                    setFeedback({ level: 'success', message: 'Order successfully generated' })
                    navigate('/orders')
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    return <div className="GenerateOrder">
        <form onSubmit={handleGenerateOrder}>
            <select className='GenerateOrder__select' name="status" required >
                <option disabled label="Order status will change from draft to in progress" > </option>
                <option name="in progress">In progress</option>
            </select>

            <button className='GenerateOrder-btn' type="submit">GENERATE ORDER</button>
        </form>       
    </div>
}

export default GenerateOrder