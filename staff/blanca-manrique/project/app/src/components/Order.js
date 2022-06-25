import { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { retrieveOrder, addItemToOrder, deleteItemFromOrder, generateOrder, updateOrderStatus, addNoteToOrder } from '../logic'
import { IoChevronBackOutline, IoAdd, IoTrashOutline, IoEllipsisVertical, IoCreate } from "react-icons/io5"
import Context from './Context'
import './Order.css'

function Order() {
    const { orderId } = useParams()
    const navigate = useNavigate()
    const { setFeedback } = useContext(Context)
    const [order, setOrder] = useState()
    const [items, setItems] = useState([])
    const [notes, setNotes] = useState([])
    const [dropdown, setDropdown] = useState(false)
    const [mode, setMode] = useState(false)
    const [dropNote, setDropNote] = useState(false)
    const [datos, setDatos] = useState({
        variant: '',
        price: 0,
        quantity: 0
    })

    useEffect(() => {
        try {
            retrieveOrder(sessionStorage.token, orderId)
                .then(order => setOrder(order))
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }, [items, notes])

    {/* MODO DRAFT*/ }
    const handleDeleteItem = (itemId) => {
        try {
            deleteItemFromOrder(sessionStorage.token, orderId, itemId)
                .then(() => {
                    const newItems = [...items]

                    const index = items.findIndex((item) => item.id === itemId)

                    newItems.splice(index, 1)

                    setItems(newItems)
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    {/* MODO DRAFT*/ }
    const handleShowDropdown = () => setDropdown(!dropdown)

    const handleInputChange = event => {
        event.preventDefault()

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const handleAddFormSubmit = event => {
        event.preventDefault()

        const { target: {
            variant: { value: variant },
            price: { value: price },
            quantity: { value: quantity }
        }
        } = event

        try {
            addItemToOrder(sessionStorage.token, orderId, variant, parseInt(price), parseInt(quantity))
                .then(() => {
                    const newItem = {
                        variant: datos.variant,
                        price: datos.price,
                        quantity: datos.quantity
                    };

                    const newItems = [...items, newItem];
                    setItems(newItems);

                    setDropdown(!dropdown)

                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }

    }

    {/* MODO DRAFT: GENERO LA ORDEN*/ }
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
                    setFeedback({level: 'success', message: 'Order successfully generated'})
                    navigate('/orders')
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    {/* MODO in progress: puedo cambiar el status a completed o cancelled*/ }
    const handleShowMode = () => setMode(!mode)

    const handleChangeStatus = event => {
        event.preventDefault()
        const { target: { status: { value: _status } } } = event
        try {
            updateOrderStatus(sessionStorage.token, orderId, _status)
                .then(() => {
                    const update = { ...order, status: order._status }
                    setOrder(update)
                    setFeedback({level: 'success', message: 'Order status successfully updated'})
                    navigate('/orders')
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    {/* MODO DRAFT && IN PROGRESS: ADD NOTE*/ }
    const handleShowCreateNote = () => setDropNote(!dropNote)

    const handleAddNote = event => {
        event.preventDefault()
        const { target: { text: { value: _text } } } = event
        try {
            addNoteToOrder(sessionStorage.token, orderId, _text)
                .then(() => {
                    const newNote = {
                        text: event.target.text.value
                    };

                    const newNotes = [...notes, newNote];
                    setNotes(newNotes);

                    setDropNote(!dropNote)
                })
                .catch(error => setFeedback({ level: 'error', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'error', message: error.message })
        }
    }

    const goBack = () => {
        navigate('/orders')
    }

    return <div>
        {order ?
            <div className='Order'>
                <div className='Order__header'>
                    <IoChevronBackOutline className='Order__header-iconBack' onClick={goBack} />
                </div>

                <div className='Order__body'>
                    <div className='Order__body-title'>
                        <span className='title-name'>Purchase order</span>
                        <span>ID order: {order.id}</span>
                        <div>
                            <span>Order status: {order.status}</span>
                            {order.status === 'in progress' ?
                                <>
                                    <IoEllipsisVertical onClick={handleShowMode} />
                                    {mode ?
                                        <>
                                            <form onSubmit={handleChangeStatus}>
                                                <select name="status" required >
                                                    <option disabled label="Choose a new status for your order" > </option>
                                                    <option name="completed">completed</option>
                                                    <option name="cancelled">cancelled</option>
                                                </select>
                                                <button type='submit'>Change</button>
                                            </form>
                                        </>
                                        : null}
                                </>
                                : null
                            }

                        </div>
                        <time>Date: {order.createdAt.toDateString()}</time>
                    </div>

                    {(order.status === 'draft' || order.status === 'in progress') ?
                        <>
                            <IoCreate onClick={handleShowCreateNote} />
                            {dropNote ?
                                <>
                                    <form onSubmit={handleAddNote}>
                                        <textarea name='text' placeholder='Add note to order...'></textarea>
                                        <button type='submit'>Create Note</button>
                                    </form>
                                </>
                                : null
                            }
                        </>
                        : null
                    }

                    {order.items.length ? <>
                        {/* SI NO HAY ITEMS: QUE NO APAREZCA */}
                        <div className='Order__body-supplier'>
                            <span className='title-name'>Supplier Info</span>
                            <p>Name: {order.supplierName}</p>
                            <p>Adress: {order.supplierAdress}</p>
                            <p>Phone: {order.supplierPhone}</p>
                            <p>E-mail: {order.supplierEmail}</p>
                        </div>

                        {/* SI NO HAY ITEMS: QUE NO APAREZCA */}
                        <div className='Order__body-info'>
                            <span className='title-name'>Items Info</span>
                            <p className='product-name'>Product: {order.variantProductName}</p>

                            <table className='Orders__table'>
                                <thead className='Orders__table-header'>
                                    <tr>
                                        <th>Variant ID</th>
                                        <th>color</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='Orders__table-body'>
                                    {order.items.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.variantId}</td>
                                            <td>{item.variantColor}</td>
                                            <td>{item.variantSize}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            {order.status === 'draft' ?
                                                <td><IoTrashOutline onClick={() => handleDeleteItem(item.id)} /></td>
                                                : null
                                            }
                                        </tr>))}

                                </tbody>
                            </table>

                            <span>TOTAL {order.items.reduce((accum, item) => accum + item.price * item.quantity, 0)} €</span>

                        </div>

                    </>

                        : <p>No items yet</p>

                    }



                    {/* SOLO SI ESTOY EN MODO DRAFT PUEDO MODIFICAR LA ORDEN: PUEDO AÑADIR ITEMS */}
                    {order.status === 'draft' ?
                        <div>
                            <IoAdd className='Orders__addIcon' onClick={handleShowDropdown} />
                            {dropdown && <>
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

                            </>}

                        </div>

                        : null

                    }

                    {order.notes.length ?
                        <>
                            <ul className='Order__body-list'>
                                {order.notes.map(note =>
                                    <li className='Order__body-listItem' key={note.id}>
                                        <time>Date: {note.date.toDateString()}</time>
                                        <p>{note.text}</p>
                                    </li>
                                )}
                            </ul>
                        </>
                        : null
                    }

                    {/* SOLO SI ESTOY EN MODO DRAFT Y LA ORDEN TIENE ITEMS PERMITO GENERAR LA ORDEN */}
                    {(order.status === 'draft' && order.items.length > 0) ?
                        <>
                            <form onSubmit={handleGenerateOrder}>
                                <select name="status" required >
                                    <option disabled label="Por defecto esta orden se genera con status draft" > </option>
                                    <option name="in progress">In progress</option>
                                </select>

                                <button>GENERATE ORDER</button>
                            </form>
                        </>
                        : null
                    }

                </div>
            </div>

            :
            <div>
                <p>order not found</p>
                <button onClick={() => navigate('/orders')}>Return to orders</button>
            </div>

        }
        
    </div >

}
export default Order