import { useContext } from 'react'
import { createOrder } from '../logic'
import Context from './Context'

function CreateOrder({ onCreated }) {
    const { setFeedback } = useContext(Context)

    const handleCreateOrder = (event) => {
        event.preventDefault()
        const { target: {status: {value: _status}} } = event

        try {
            createOrder(sessionStorage.token, _status)
                .then(() => {
                    onCreated()
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }

    }
    return (<div>
        <form onSubmit={handleCreateOrder}>
            <select id="status" name="status" required >
                <option disabled label="Por defecto esta orden se genera con status draft" > </option>
                <option value="draft">Draft</option>
                <option value="in progress">In progress</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
            </select>

            <button>Create Order</button>
        </form>

    </div>)

}
export default CreateOrder