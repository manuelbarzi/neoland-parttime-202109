import { useEffect, useState, useContext, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { retrieveOrder, addItemToOrder, deleteItemFromOrder, addNoteToOrder } from '../logic'
import { IoChevronBackOutline, IoAdd, IoTrashOutline, IoEllipsisVertical, IoCreate } from "react-icons/io5"
import Context from './Context'
import ChangeOrderStatus from './ChangeOrderStatus'
import GenerateOrder from './GenerateOrder'
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
    const handleShowDropdown = () => setDropdown(!dropdown)

    {/* MODO in progress: puedo cambiar el status a completed o cancelled*/ }
    const handleShowMode = () => setMode(!mode)

    {/* MODO DRAFT && IN PROGRESS: ADD NOTE*/ }
    const handleShowCreateNote = () => setDropNote(!dropNote)

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
                        <span className='Order__body-text'>ID order: {order.id}</span>

                        <div className='OrderDrop__body'>
                            <table className='OrderDrop__table' key={order.id}>
                                <thead className='OrderDrop__table-header'>
                                    <tr>
                                        <th>Created at</th>
                                        <th>Order Status</th>
                                    </tr>
                                </thead>
                                <tbody className='OrderDrop__table-body'>
                                    <tr>
                                        <td><time>{order.createdAt.toDateString()}</time></td>
                                        <td>{order.status}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            {order.status === 'in progress' ?
                                <>
                                    <button className='ChangeStatus-btn' onClick={handleShowMode} >Change status</button>
                                    {mode ? <ChangeOrderStatus orderId={order.id} /> : null}
                                </>
                                : null
                            }

                        </div>

                    </div>

                    {order.items.length ? <>
                        {/* SI NO HAY ITEMS: QUE NO APAREZCA */}
                        <div className='OrderDrop__body-title'>

                            <div className='OrderDrop__body'>
                                <span className='title-name'>Supplier Info</span>
                                <table className='OrderSupp__table' key={order.id}>
                                    <thead className='OrderDrop__table-header'>
                                        <tr>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>E-mail</th>
                                            <th>Adress</th>
                                        </tr>
                                    </thead>
                                    <tbody className='OrderSupp__table-body'>
                                        <tr>
                                            <td>{order.supplierName}</td>
                                            <td>{order.supplierPhone}</td>
                                            <td>{order.supplierEmail}</td>
                                            <td>{order.supplierAdress}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* SI NO HAY ITEMS: QUE NO APAREZCA */}
                        <div className='Order__body-info'>
                            <span className='title-name'>Items Info</span>
                            <p className='product-name'>Product: {order.variantProductName}</p>
                            {/* <p className='product-name'>Variant: {item.variantId}</p> */}

                            <table className='Variants__table'>
                                <thead className='Variants__table-header'>
                                    <tr>
                                        <th>color</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        {order.status === 'draft' ?
                                            <th>Action</th>
                                            : null
                                        }
                                    </tr>
                                </thead>
                                <tbody className='Variants__table-body'>
                                    {order.items.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.variantColor}</td>
                                            <td>{item.variantSize}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            {order.status === 'draft' ?
                                                <td><IoTrashOutline onClick={() => { handleDeleteItem(item.id) }} /></td>
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

                    {(order.status === 'draft' || order.status === 'in progress') ?
                        <>
                            <div className='AddNote'>
                                <p className='AddNote-text'>Add note to order</p>
                                <IoCreate className='AddNote-icon' onClick={handleShowCreateNote} />
                            </div>
                            {dropNote ?
                                <>
                                    <form onSubmit={handleAddNote}>
                                        <textarea name='text' placeholder='Add note to order...'></textarea>
                                        <button type='submit'>Create Note</button>
                                    </form>
                                </>
                                : null}

                        </>
                        : null
                    }

                    {/* SOLO SI ESTOY EN MODO DRAFT PUEDO MODIFICAR LA ORDEN: PUEDO AÑADIR ITEMS */}
                    {order.status === 'draft' ?
                        <div>
                            <div className='AddItem'>
                                <p className='AddItem-text'>Add item to order</p>
                                {/* <IoAdd className='Orders__addIcon' onClick={handleShowDropdown} /> */}
                                <IoAdd className='AddItem-icon' onClick={handleShowDropdown} />
                            </div>
                            {dropdown && <div className='Create'>
                                <form className='CreateProduct__form form-li' onSubmit={handleAddFormSubmit}>
                                    <input
                                    className='CreateProduct__input'
                                        type="text"
                                        name="variant"
                                        required="required"
                                        placeholder='Enter a variant'
                                        onChange={handleInputChange}
                                    />
                                    <input
                                    className='CreateProduct__input'
                                        type="number"
                                        name="price"
                                        required="required"
                                        placeholder='Enter the price'
                                        onChange={handleInputChange}
                                    />
                                    <input
                                    className='CreateProduct__input'
                                        type="number"
                                        name="quantity"
                                        required="required"
                                        placeholder='Enter the quantity'
                                        onChange={handleInputChange}
                                    />
                                    <button type='submit' className='CreateProduct__btn btn-hover'>Add item</button>
                                </form>

                            </div>}

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
                        </> : null}

                    {/* SOLO SI ESTOY EN MODO DRAFT Y LA ORDEN TIENE ITEMS PERMITO GENERAR LA ORDEN */}
                    {(order.status === 'draft' && order.items.length > 0) ? <GenerateOrder orderId={order.id} /> : null}

                </div>
            </div>

            :
            <div>
                <h3>order not found</h3>
                <button onClick={() => navigate('/orders')}>Return to orders</button>
            </div>

        }

    </div >

}
export default Order