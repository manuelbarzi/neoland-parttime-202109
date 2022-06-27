import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateOrder } from '../logic'
import Context from './Context'

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

    return <div className="Product__info">
        <form onSubmit={handleGenerateOrder}>
            <select name="status" required >
                <option disabled label="Por defecto esta orden se genera con status draft" > </option>
                <option name="in progress">In progress</option>
            </select>

            <button >GENERATE ORDER</button>
        </form>       
    </div>
}

export default GenerateOrder