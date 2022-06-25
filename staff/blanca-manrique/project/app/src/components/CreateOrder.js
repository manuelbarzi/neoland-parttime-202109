import { useState } from 'react'
import { createOrder } from '../logic'
import Feedback from './Feedback'

function CreateOrder({ onCreated }) {
    const [feedback, setFeedback] = useState()

    const handleCreateOrder = (event) => {
        event.preventDefault()
        const { target:
            { status: { value: _status },
                description: { value: description },
                createdAt: {value: _createdAt}
                
            }
        } = event

        try {
            createOrder(sessionStorage.token, _status, description, _createdAt = Date.now)
                .then(() =>{
                    onCreated()
                    // setFeedback({level: 'success', message: 'Order created successfully'})
                })
                .catch(error => alert(error.message))
        } catch (error) {
            setFeedback({level: 'error', message: error.message})
        }

    }
    return (<div>
        <form onSubmit={handleCreateOrder}>
            <input type="text" placeholder="Description..." name="description" />

            <select name="status" required >
                <option disabled label="Por defecto esta orden se genera con status draft" > </option>
                <option name="draft">Draft</option>
            </select>

            {feedback ? <Feedback level={feedback.level} message={feedback.message}/> : null}
            <button type="submit">Create Order</button>
        </form>
    </div>)
}
export default CreateOrder