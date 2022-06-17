import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { addItemToOrder } from '../logic'

function NewItem({onCreated}) {
    const { orderId } = useParams()
    // const [items, setItems] = useState([])
    const [datos, setDatos] = useState({
        variant: '',
        price: 0,
        quantity: 0
    });

    const handleInputChange = event => {
        event.preventDefault()

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const handleAddFormSubmit = event =>{
        event.preventDefault()
        // const newItem = {
        //     variant: datos.variant,
        //     price: datos.price,
        //     quantity: datos.quantity
        // };

        // const newItems = [...items, newItem];
        // setItems(newItems);

        // event.target.reset()

        const { target: {
            variant: { value: variant },
            price: { value: price },
            quantity: { value: quantity }
        }
        } = event

        try {
            addItemToOrder(sessionStorage.token, orderId, variant, parseInt(price), parseInt(quantity))
                .then(() => {
                    onCreated()
                    //cerrar este compo
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }

    }

    return <div>
        <h1>Add item to order</h1>
        <form onSubmit={handleAddFormSubmit}>
            <input
                type="text"
                name="variant"
                required="required"
                placeholder='Enter a variant'
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="price"
                required="required"
                placeholder='Enter the price'
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="quantity"
                required="required"
                placeholder='Enter the quantity'
                onChange={handleInputChange}
            />
            <button type="submit">Add item</button>
        </form>

    </div>
}
export default NewItem