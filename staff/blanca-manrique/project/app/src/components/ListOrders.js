import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { retrieveAllOrders, deleteOrder, filterOrders } from '../logic'
import { IoChevronBackOutline, IoChevronForwardOutline, IoAdd, IoTrashOutline, IoSearch, IoFilterCircle } from "react-icons/io5"
import './ListOrders.css'
import Context from './Context'
import FilterBar from './FilterBar'
import dayjs from "dayjs"

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter")
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore")
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)

function ListOrders() {
    const { setFeedback } = useContext(Context)
    const [orders, setOrders] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    const navigate = useNavigate()
    const [dropFilter, setDropFilter] = useState(false)

    useEffect(() => {
        try {
            retrieveAllOrders(sessionStorage.token)
                .then(orders => setOrders(orders))
                .catch(error => setFeedback({ level: 'info', message: error.message }))

        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
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

                .catch(error => setFeedback({ level: 'info', message: error.message }))
        } catch (error) {
            setFeedback({ level: 'info', message: error.message })
        }
    }

    const handleOrderDetail = orderId => { navigate(`/orders/${orderId}`) }
    const handleCreateOrder = () => { navigate('/orders/new-order') }
    const goBack = () => { navigate('/') }

    const handleShowFilterBar = () => setDropFilter(!dropFilter)

    const searchOrders = query => {
        setSearchTerm(query)

        setFilteredResults(filterOrders(query, orders))
    }

    return <div>
        <IoChevronBackOutline className='IconBack' onClick={goBack} />

        {orders.length ?
            <div className='OrdersHead__selectFilters'>
                <div className='OrdersHead__search'>
                    <input
                        className='OrdersHead__search-field'
                        type="text"
                        placeholder='Search order...'
                        onChange={(e) => searchOrders(e.target.value)}
                    />
                    <IoSearch className='OrdersHead__search-icon'/>
                </div>
                <IoFilterCircle className='OrdersHead__filterIcon' onClick={handleShowFilterBar}/>

            </div>
            : null
        }

        {dropFilter? <FilterBar orders={orders} /> :null }

        <div className='Orders'>
            {searchTerm.length > 1 ?
                (
                    <table className='OrdersTable'>
                        <thead className='OrdersTable__header'>
                            <tr>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Created date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='OrdersTable__body'>
                            {filteredResults.map(order => (
                                <tr key={order.id}>
                                    <td onClick={() => handleOrderDetail(order.id)}>{order.description}</td>
                                    <td>{order.status}</td>
                                    <td><time>{order.createdAt.toDateString()}</time></td>
                                    <td><IoChevronForwardOutline className='OrdersTable__bodyIcon' onClick={() => handleOrderDetail(order.id)} /></td>
                                    {order.status === 'draft' ?
                                        <td><IoTrashOutline className='trash-icon' onClick={() => handleDeleteOrder(order.id)} /></td>
                                        : null
                                    }
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='OrdersTable__body'>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td onClick={() => handleOrderDetail(order.id)}>{order.description}</td>
                                    <td>{order.status}</td>
                                    <td><time>{order.createdAt.toDateString()}</time></td>
                                    <td><IoChevronForwardOutline className='OrdersTable__bodyIcon' onClick={() => handleOrderDetail(order.id)} /></td>
                                    {order.status === 'draft' ?
                                        <td><IoTrashOutline className='trash-icon' onClick={() => handleDeleteOrder(order.id)} /></td>
                                        : null
                                    }
                                </tr>))}
                        </tbody>
                    </table>

                )
            }

            {(searchTerm.length === 0 && orders.length === 0) ?
                <>
                    <p>No orders yet, you can generate a new one</p>
                </> : null}

            {(searchTerm.length > 1 && filteredResults.length === 0) ?
                <>
                    <p>Order not found</p>
                </> : null}

            <IoAdd className='Orders__addIcon' onClick={handleCreateOrder} />
        </div>

    </div>
}
export default ListOrders