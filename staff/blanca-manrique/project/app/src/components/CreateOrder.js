import { useContext } from 'react'
import { createOrder } from '../logic'
import Context from './Context'

function CreateOrder({ onCreated }) {
    const { setFeedback } = useContext(Context)

    const handleCreateOrder = (event) => {
        event.preventDefault()
        const { target:
            { status: { value: _status },
                description: { value: description }  
            }
        } = event

        try {
            createOrder(sessionStorage.token, _status, description)
                .then(() =>{
                    onCreated()
                })
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }

    }
    return (<div>
        <form onSubmit={handleCreateOrder}>
            <input type="text" placeholder="Description..." name="description" />

            <select name="status" required >
                <option disabled label="Por defecto esta orden se genera con status draft" > </option>
                <option name="draft">Draft</option>
            </select>
            <button type="submit">Create Order</button>
        </form>
    </div>)
}
export default CreateOrder