import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { retrieveOrder } from '../logic'
import { IoChevronBackOutline } from "react-icons/io5"
import './Order.css'

function Order() {
    const { orderId } = useParams()
    const [order, setOrder] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveOrder(sessionStorage.token, orderId)
                .then(order => setOrder(order))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

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
                <div className='Order__body-supplier'>
                    <span className='title-name'>Supplier Info</span>
                    <p>Name: {order.supplierName}</p>
                    <p>Adress: {order.supplierAdress}</p>
                    <p>Phone: {order.supplierPhone}</p>
                    <p>E-mail: {order.supplierEmail}</p>
                </div>
                <div className='Order__body-info'>
                    <span className='title-name'>Items Info</span>
                    <p className='product-name'>Product: {order.variantProductName}</p>
                    <ul className='Order__body-list'>
                        {order.items.map(item =>
                            <li className='Order__body-listItem' key={item.id}>
                                <p className='item-title'>variant ID: {item.id}</p>
                                <p>price per unity: {item.price}</p>
                                <p>quantity: {item.quantity}</p>
                                <p>total: {item.price} x {item.quantity} = {item.price * item.quantity} €</p>
                            </li>
                        )}
                    </ul>
                    <span>TOTAL {order.items.reduce((accum, item) => accum + item.price * item.quantity, 0)} €</span>
                </div>
            </div>
        </div>

            : <p>order not found</p>
        }

    </div>

}
export default Order