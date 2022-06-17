import { useState } from 'react'
import { createOrder } from '../logic'


function CreateOrder({ onCreated }) {
    const [items, setItems] = useState([])
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

    const handleAddFormSubmit = event => {
        event.preventDefault();

        const newItem = {
            variant: datos.variant,
            price: datos.price,
            quantity: datos.quantity
        };

        const newItems = [...items, newItem];
        setItems(newItems);

        event.target.reset()
    }

    const handleDeleteClick = (itemId) => {
        const newItems = [...items];

        const index = items.findIndex((item) => item.variant === itemId) //no existe item.id porque no estamos guardado en base de datos, por lo tanto, no hay un identificador generado para cada item....usamos item.variant como key y para comprobar si estamos borrando el item deseado

        newItems.splice(index, 1)

        setItems(newItems)

    }

    // const handleCreateOrder = (event) => {
    //     event.preventDefault()
    //     const { target: { total: { value: total }, items } } = event

    //     try {
    //         createOrder(sessionStorage.token, total, items)
    //             .then(() => onCreated())
    //             .catch(error => alert(error.message))
    //     } catch (error) {
    //         alert(error.message)
    //     }

    // }
    return (<div>
        {items ? <div>
            <ul>
                {items.map(item =>
                    <li key={item.variant}>
                        <button onClick={() => handleDeleteClick(item.variant)}>Remove from order</button>
                        <p>{item.variant}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                        <p>{item.price} x {item.quantity} = {item.price * item.quantity} €</p>
                    </li>)}
            </ul>

            <span>TOTAL {items.reduce((accum, item) => accum + item.price * item.quantity, 0)} €</span>

        </div> : <p>no items yet</p>}

        <h2>Add a item</h2>

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

        {/* <form onSubmit={handleCreateOrder}>
            <input placeholder='total' />
            <input placeholder='items' />
            <button>Generate order</button>
        </form> */}

    </div>)

}
export default CreateOrder