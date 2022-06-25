import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { retrieveCompletedOrders, filterOrders } from '../logic'
import { IoChevronForwardOutline, IoClose, IoSearch } from "react-icons/io5"
import './ListOrders.css'

function CompletedOrders() {
    const [orders, setOrders] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveCompletedOrders(sessionStorage.token)
                .then(orders => setOrders(orders))
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
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
                    <div>
                        <input
                            type="text"
                            placeholder='Search order...'
                            onChange={(e) => searchOrders(e.target.value)}
                        />
                        <IoSearch />
                    </div>

                    <div>completed<IoClose onClick={handleCloseCompletedOrders} /></div>

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

            {/* {orders ?
                <table className='Orders__table'>
                    <thead className='Orders__table-header'>
                        <tr>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Created date</th>
                            <th>Actions</th>
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

                : <p>no completed orders yet</p>
            } */}
        </div>
    </div>
}
export default CompletedOrders