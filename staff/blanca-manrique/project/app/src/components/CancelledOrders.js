import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { retrieveCancelledOrders, filterOrders } from '../logic'
import { IoChevronForwardOutline, IoClose, IoSearch } from "react-icons/io5"
import './ListOrders.css'
import Context from './Context'

function CancelledOrders() {
    const { setFeedback } = useContext(Context)
    const [orders, setOrders] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveCancelledOrders(sessionStorage.token)
                .then(orders => setOrders(orders))
                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }, [])


    const handleOrderDetail = orderId => {
        navigate(`/orders/${orderId}`)
    }

    const handleCloseCancelledOrders = () => { navigate('/orders') }

    const searchOrders = query => {
        setSearchTerm(query)

        setFilteredResults(filterOrders(query, orders))
    }

    return <div>
        <div className='Orders'>
            {orders.length ?
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder='Search order...'
                            onChange={(e) => searchOrders(e.target.value)}
                        />
                        <IoSearch />
                    </div>

                    <div>cancelled<IoClose onClick={handleCloseCancelledOrders} /></div>

                </div>
                : null
            }

            {searchTerm.length > 1 ?
                (
                    <table className='Orders__table'>
                        <thead className='Orders__table-header'>
                            <tr>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Created date</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody className='Orders__table-body'>
                            {filteredResults.map(order => (
                                <tr key={order.id}>
                                    <td onClick={() => handleOrderDetail(order.id)}>{order.description}</td>
                                    <td>{order.status}</td>
                                    <td><time>{order.createdAt.toDateString()}</time></td>
                                    <td><IoChevronForwardOutline className='Orders__table-bodyIcon' onClick={() => handleOrderDetail(order.id)} /></td>
                                </tr>))}
                        </tbody>
                    </table>
                )

                : (

                    <table className='Orders__table'>
                        <thead className='Orders__table-header'>
                            <tr>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Created date</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody className='Orders__table-body'>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td onClick={() => handleOrderDetail(order.id)}>{order.description}</td>
                                    <td>{order.status}</td>
                                    <td><time>{order.createdAt.toDateString()}</time></td>
                                    <td><IoChevronForwardOutline className='Orders__table-bodyIcon' onClick={() => handleOrderDetail(order.id)} /></td>
                                </tr>))}
                        </tbody>
                    </table>

                )
            }

            {(searchTerm.length === 0 && orders.length === 0) ?
                <>
                    <p>No cancelled orders yet</p>
                </> : null}

            {(searchTerm.length > 1 && filteredResults.length === 0) ?
                <>
                    <p>Order not found</p>
                </> : null}

        </div>
    </div>
}
export default CancelledOrders