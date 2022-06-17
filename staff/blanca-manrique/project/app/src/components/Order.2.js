import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { retrieveOrder, addItemToOrder, deleteItemFromOrder } from '../logic'
import { IoChevronBackOutline, IoAdd, IoTrashOutline } from "react-icons/io5"
import NewItem from './NewItem'
import './Order.css'

function Order() {
    const { orderId } = useParams()
    const navigate = useNavigate()
    const [order, setOrder] = useState()
    const [items, setItems] = useState([])
    const [dropdown, setDropdown] = useState(false) //🔽 por defecto desactivado
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
    }, [items]) //que escuche cuando el array de items vaya modificándose (items va a ir cambiando cada vez que elimine un item y cada vez que agrege un item)


    {/* MODO DRAFT: BORRAR UN ITEM DE LA ORDEN*/ }
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

    {/* MODO DRAFT: AGREGAR UN ITEM A LA ORDEN*/ }
    //si clico en + --> se abre el formulario para añadir item
    const handleShowDropdown = () => setDropdown(!dropdown)

    //capturo con el onChange el valor de los inputs
    const handleInputChange = event => {
        event.preventDefault()

        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    //cuando haga onSubmit: los datos q tengo en los inputs se usan en la lógica de addItemToOrder
    //con los nuevos datos actualizo el array de items: items + newItem
    //en cuanto se actualizan los items se cerrar el botón de + (dropdown)
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
                        {/* SOLO SI ESTOY EN MODO DRAFT PUEDO EDITAR UNA ORDEN: ELIMINAR ITEMS */}
                        {order.status === 'draft' ?

                            <ul className='Order__body-list'>
                                {order.items.map(item =>
                                    <li className='Order__body-listItem' key={item.id}>

                                        {order.status === 'draft' ?
                                            <IoTrashOutline onClick={() => handleDeleteItem(item.id)} />
                                            : null
                                        }
                                        {/* VISIBLE EN CUALQUIER MODO */}
                                        <p className='item-title'>item ID: {item.id}</p>
                                        <p>price per unity: {item.price}</p>
                                        <p>quantity: {item.quantity}</p>
                                        <p>total: {item.price} x {item.quantity} = {item.price * item.quantity} €</p>
                                    </li>
                                )}
                            </ul>

                            : <ul className='Order__body-list'>
                                {order.items.map(item =>
                                    <li className='Order__body-listItem' key={item.id}>
                                        <p className='item-title'>item ID: {item.id}</p>
                                        <p>price per unity: {item.price}</p>
                                        <p>quantity: {item.quantity}</p>
                                        <p>total: {item.price} x {item.quantity} = {item.price * item.quantity} €</p>
                                    </li>
                                )}
                            </ul>

                        }

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
            </div>
        </div>

            : <p>order not found</p>
        }

    </div>

}
export default Order