import { createOrder } from '../logic'

function CreateOrder({ onCreated }) {
    const handleCreateOrder = (event) => {
        event.preventDefault()
        const { target: {status: {value: _status}} } = event

        try {
            createOrder(sessionStorage.token, _status)
                .then(() => onCreated())
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
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