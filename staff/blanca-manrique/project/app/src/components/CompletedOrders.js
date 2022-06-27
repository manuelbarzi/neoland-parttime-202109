import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { retrieveCompletedOrders, filterOrders } from '../logic'
import { IoChevronForwardOutline, IoClose, IoSearch } from "react-icons/io5"
import './CompletedOrders.css'
import Context from './Context'

function CompletedOrders() {
    const { setFeedback } = useContext(Context)
    const [orders, setOrders] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveCompletedOrders(sessionStorage.token)
                .then(orders => setOrders(orders))
                .catch(error => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }, [])


    const handleOrderDetail = orderId => {
        navigate(`/orders/${orderId}`)
    }

    const handleCloseCompletedOrders = () => { navigate('/orders') }

    const searchOrders = query => {
        setSearchTerm(query)

        setFilteredResults(filterOrders(query, orders))
    }

    return <div>
        <div className='Orders'>
            {orders.length ?
                <div>
                    <div className='OrderHeader'>
                        <div className='OrderClose__completed'>
                            <p className='OrderClose__text'>completed</p>
                            <IoClose className='OrderClose__icon' onClick={handleCloseCompletedOrders} />
                        </div>
                        <div className='OrdersHead__search'>
                            <input
                                className='OrdersHead__search-field'
                                type="text"
                                placeholder='Search order...'
                                onChange={(e) => searchOrders(e.target.value)}
                            />
                            <IoSearch className='OrdersHead__search-icon' />
                        </div>
                    </div>

                </div>
                : null
            }

            <div className='Orders'>
                {searchTerm.length > 1 ?
                    (
                        <table className='OrdersTable'>
                            <thead className='OrdersTable__header'>
                                <tr>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Created date</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody className='OrdersTable__body'>
                                {filteredResults.map(order => (
                                    <tr key={order.id}>
                                        <td onClick={() => handleOrderDetail(order.id)}>{order.description}</td>
                                        <td>{order.status}</td>
                                        <td><time>{order.createdAt.toDateString()}</time></td>
                                        <td><IoChevronForwardOutline className='OrdersTable__bodyIcon' onClick={() => handleOrderDetail(order.id)} /></td>
                                    </tr>))}
                            </tbody>
                        </table>
                    )

                    : (

                        <table className='OrdersTable'>
                            <thead className='OrdersTable__header'>
                                <tr>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Created date</th>
                                    <th>Detail</th>
                                </tr>
                            </thead>
                            <tbody className='OrdersTable__body'>
                                {orders.map(order => (
                                    <tr key={order.id}>
                                        <td onClick={() => handleOrderDetail(order.id)}>{order.description}</td>
                                        <td>{order.status}</td>
                                        <td><time>{order.createdAt.toDateString()}</time></td>
                                        <td><IoChevronForwardOutline className='OrdersTable__bodyIcon' onClick={() => handleOrderDetail(order.id)} /></td>
                                    </tr>))}
                            </tbody>
                        </table>

                    )
                }

                {(searchTerm.length === 0 && orders.length === 0) ?
                    <>
                        <p>No completed orders yet</p>
                    </> : null}

                {(searchTerm.length > 1 && filteredResults.length === 0) ?
                    <>
                        <p>Order not found</p>
                    </> : null}

            </div>
        </div>
    </div>
}
export default CompletedOrders