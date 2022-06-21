import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { retrieveAllOrders, deleteOrder, updateOrderStatus } from '../logic'
import { IoChevronBackOutline, IoChevronForwardOutline, IoAdd, IoTrashOutline, IoEllipsisVertical } from "react-icons/io5"
import './ListOrders.css'
import ChangeOrderStatus from './ChangeOrderStatus'

function ListOrders() {
    const [orders, setOrders] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveAllOrders(sessionStorage.token)
                .then(orders => setOrders(orders))
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleDeleteOrder = (orderId) => {
        try {
            deleteOrder(sessionStorage.token, orderId)
                .then(() => {
                    const newOrders = [...orders]

                    const index = orders.findIndex((order) => order.id === orderId)

                    newOrders.splice(index, 1)

                    setOrders(newOrders)
                })

                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    const handleOrderDetail = orderId => {
        navigate(`/orders/${orderId}`)
    }
    const handleCreateOrder = () => {
        navigate('/orders/new-order')
    }
    const goBack = () => {
        navigate('/')
    }

    return <div>
        <IoChevronBackOutline className='IconBack' onClick={goBack} />
        <div className='Orders'>
            {orders ? 
                <table className='Orders__table'>
                    <thead className='Orders__table-header'>
                        <tr>
                            <th>Order ID</th>
                            <th>Status</th>
                            <th>Created date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='Orders__table-body'>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td onClick={() => handleOrderDetail(order.id)}>{order.id}</td>
                                <td>{order.status}</td>
                                <td><time>{order.createdAt.toDateString()}</time></td>
                                <td><IoChevronForwardOutline className='Orders__table-bodyIcon' onClick={() => handleOrderDetail(order.id)} /></td>
                                {order.status === 'draft' ?
                                    <td><IoTrashOutline onClick={() => handleDeleteOrder(order.id)} /></td>
                                    : null
                                }
                            </tr>))}
                    </tbody>
                </table>

                : <p>no orders yet: You can create a new one</p>
            }

            <IoAdd className='Orders__addIcon' onClick={handleCreateOrder} />
        </div>
    </div>
}
export default ListOrders