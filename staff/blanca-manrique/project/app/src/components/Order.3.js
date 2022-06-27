import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { retrieveOrder, addItemToOrder, deleteItemFromOrder, generateOrder } from '../logic'
import { IoChevronBackOutline, IoAdd, IoTrashOutline } from "react-icons/io5"
import './Order.css'

function Order() {
    const { orderId } = useParams()
    const navigate = useNavigate()
    const [order, setOrder] = useState()
    const [items, setItems] = useState([])
    const [dropdown, setDropdown] = useState(false)
    const [datos, setDatos] = useState({
        variant: '',
        price: 0,
        quantity: 0
    });

    useEffect(() => {
        try {
            retrieveOrder(sessionStorage.token, orderId)
                .then(order => setOrder(order))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [items])


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
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
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
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
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
                    navigate('/orders')
                    console.log('order generated')
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const goBack = () => {
        navigate('/orders')
    }

    return <div>
        {order ? <div className='Order'>
            <div className='Order__header'>
                <IoChevronBackOutline className='Order__header-iconBack' onClick={goBack} />
            </div>

            <div className='Order__body'>
                <div className='Order__body-title'>
                    <span className='title-name'>Purchase order</span>
                    <span>ID order: {order.id}</span>
                    <span>Order status: {order.status}</span>
                    <time>Date: {order.createdAt.toDateString()}</time>
                </div>

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

            : <p>order not found</p>
        }

    </div >

}
export default Order